<?php

/*
 * ============================================================
 * LE BUS DÉ'TOURNÉ - FORMULAIRE DE CONTACT
 * ============================================================
 *
 * Ce fichier est exécuté directement par PHP sur OVH.
 *
 * Il :
 * - vérifie la requête
 * - détecte certains bots
 * - valide les données
 * - limite les envois
 * - envoie le message par mail()
 *
 * Aucune donnée du formulaire n'est enregistrée
 * définitivement sur le serveur.
 */


/*
 * ============================================================
 * CONFIGURATION
 * ============================================================
 */

// Adresse qui reçoit les messages.
// IMPORTANT : remplacer par votre vraie adresse OVH.
$destination = 'lebusdetourne@hotmail.com';

$siteName = "Le Bus Dé'tourné";

/*
 * Sel utilisé pour anonymiser le nom du fichier de rate-limit.
 *
 * Il ne s'agit PAS d'un mot de passe.
 * Il sert simplement à éviter de mettre directement l'adresse IP
 * dans le nom du fichier temporaire.
 *
 * Si le site est dans un dépôt Git public, vous pouvez remplacer
 * cette valeur par une autre chaîne aléatoire.
 */
$rateLimitSalt = 'LBDetourne-2026-7fK9mP2xQ4';


/*
 * ============================================================
 * FONCTIONS UTILITAIRES
 * ============================================================
 */

/**
 * Redirige vers la page contact avec une erreur.
 */
function redirectError(string $error): never
{
    header('Location: /contact/?error=' . rawurlencode($error));
    exit;
}


/**
 * Retourne la longueur d'une chaîne.
 *
 * mb_strlen est utilisée si disponible.
 */
function stringLength(string $value): int
{
    if (function_exists('mb_strlen')) {
        return mb_strlen($value, 'UTF-8');
    }

    return strlen($value);
}


/**
 * Nettoie une valeur utilisée dans un header HTTP.
 *
 * Empêche l'injection de CR/LF.
 */
function cleanHeaderValue(string $value): string
{
    return str_replace(
        ["\r", "\n"],
        '',
        trim($value)
    );
}


/**
 * Récupère l'IP du visiteur.
 *
 * On utilise REMOTE_ADDR directement.
 *
 * IMPORTANT :
 * On ne fait volontairement PAS confiance à
 * X-Forwarded-For, qui peut être fourni par le visiteur.
 */
function getClientIp(): string
{
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}


/**
 * Vérifie le rate-limit.
 *
 * Limites :
 * - maximum 1 envoi toutes les 60 secondes
 * - maximum 5 envois sur 1 heure
 *
 * Les fichiers sont placés dans le dossier temporaire système.
 */
function checkRateLimit(string $ip, string $salt): bool
{
    $hash = hash(
        'sha256',
        $salt . '|' . $ip
    );

    $file = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR)
        . DIRECTORY_SEPARATOR
        . 'busdetourne_contact_'
        . $hash
        . '.json';

    $now = time();

    /*
     * Lecture de l'historique.
     */
    $timestamps = [];

    if (is_file($file)) {
        $content = @file_get_contents($file);

        if ($content !== false) {
            $decoded = json_decode($content, true);

            if (is_array($decoded)) {
                $timestamps = array_map(
                    'intval',
                    $decoded
                );
            }
        }
    }

    /*
     * On ne garde que les tentatives de la dernière heure.
     */
    $timestamps = array_values(
        array_filter(
            $timestamps,
            function ($timestamp) use ($now) {
                return $timestamp > ($now - 3600);
            }
        )
    );

    /*
     * Limite : 5 envois par heure.
     */
    if (count($timestamps) >= 5) {
        return false;
    }

    /*
     * Limite : 1 envoi toutes les 60 secondes.
     */
    if (!empty($timestamps)) {
        $lastAttempt = max($timestamps);

        if (($now - $lastAttempt) < 60) {
            return false;
        }
    }

    /*
     * Ajout de la tentative actuelle.
     */
    $timestamps[] = $now;

    /*
     * Écriture avec verrouillage pour éviter les collisions.
     */
    @file_put_contents(
        $file,
        json_encode($timestamps),
        LOCK_EX
    );

    return true;
}


/*
 * ============================================================
 * VÉRIFICATION DE LA MÉTHODE
 * ============================================================
 */

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirectError('server');
}


/*
 * ============================================================
 * ANTI-SPAM : HONEYPOT
 * ============================================================
 *
 * Un vrai visiteur ne remplit jamais ce champ.
 */

$honeypot = trim(
    (string)($_POST['website'] ?? '')
);

if ($honeypot !== '') {
    /*
     * On ne donne pas d'information au bot.
     */
    redirectError('spam');
}


/*
 * ============================================================
 * RATE LIMIT
 * ============================================================
 */

$clientIp = getClientIp();

if (!checkRateLimit($clientIp, $rateLimitSalt)) {
    redirectError('ratelimit');
}


/*
 * ============================================================
 * RÉCUPÉRATION DES DONNÉES
 * ============================================================
 */

$nom = trim(
    (string)($_POST['nom'] ?? '')
);

$email = trim(
    (string)($_POST['email'] ?? '')
);

$telephone = trim(
    (string)($_POST['telephone'] ?? '')
);

$message = trim(
    (string)($_POST['message'] ?? '')
);


/*
 * ============================================================
 * VALIDATION
 * ============================================================
 */

/*
 * Champs obligatoires.
 */
if (
    $nom === '' ||
    $email === '' ||
    $message === ''
) {
    redirectError('missing');
}


/*
 * Email.
 */
if (
    !filter_var(
        $email,
        FILTER_VALIDATE_EMAIL
    )
) {
    redirectError('email');
}


/*
 * Longueurs.
 */
if (stringLength($nom) > 100) {
    redirectError('length');
}

if (stringLength($email) > 150) {
    redirectError('length');
}

if (stringLength($telephone) > 30) {
    redirectError('length');
}

if (stringLength($message) > 5000) {
    redirectError('message');
}


/*
 * ============================================================
 * NETTOYAGE
 * ============================================================
 *
 * Important avant de placer les valeurs dans les headers.
 */

$nom = cleanHeaderValue($nom);
$email = cleanHeaderValue($email);
$telephone = cleanHeaderValue($telephone);


/*
 * ============================================================
 * CONSTRUCTION DU MAIL
 * ============================================================
 */

$sujet = "Nouveau message depuis le site Le Bus Dé'tourné";


$contenu =
    "Nouveau message reçu depuis le formulaire de contact."
    . "\n\n"
    . "Nom : " . $nom
    . "\n"
    . "Email : " . $email
    . "\n"
    . "Téléphone : "
    . (
        $telephone !== ''
            ? $telephone
            : 'Non renseigné'
    )
    . "\n\n"
    . "Message :"
    . "\n"
    . $message
    . "\n";


/*
 * ============================================================
 * HEADERS EMAIL
 * ============================================================
 *
 * From :
 *   -> votre adresse OVH
 *
 * Reply-To :
 *   -> adresse du visiteur
 *
 * Ainsi, lorsque vous cliquez sur "Répondre",
 * votre réponse va directement au visiteur.
 */

$headers = [];

$headers[] =
    'From: '
    . $siteName
    . ' <'
    . $destination
    . '>';

$headers[] =
    'Reply-To: '
    . $email;

$headers[] =
    'MIME-Version: 1.0';

$headers[] =
    'Content-Type: text/plain; charset=UTF-8';


/*
 * ============================================================
 * ENVOI
 * ============================================================
 */

$success = @mail(
    $destination,
    $sujet,
    $contenu,
    implode("\r\n", $headers)
);


/*
 * ============================================================
 * RÉSULTAT
 * ============================================================
 */

if ($success) {
    header(
        'Location: /contact/merci/',
        true,
        303
    );

    exit;
}


/*
 * L'envoi a échoué.
 *
 * On ne montre surtout pas le détail de l'erreur PHP
 * au visiteur.
 */
redirectError('server');