// Planning de la tournée : UNIQUEMENT les jours travaillés
// (les jours de repos ne s'affichent pas sur le site, donc pas
// besoin de les lister ici).
//
// Un même lieu peut apparaître plusieurs fois avec des horaires
// différents (ex. mercredi + dimanche au même endroit).
//
// `photo` : chemin vers l'image dans /public/images/spots/

export const planning = [
  {
    jour: 'Mercredi',
    lieu: 'Couëron',
    adresse: 'Esplanade Jeremy Huguet',
    postal: '44220 Couëron',
    horaire: '12h - 21h',
    photo: '/images/spots/mercredi.jpg',
    alt: "Le Bus Dé'tourné garé esplanade Jeremy Huguet à Couëron",
    geo : "47.208999637060394,-1.7279982288685551"
  },
  {
    jour: 'Jeudi',
    lieu: 'St Etienne de Montluc',
    adresse: 'Place Foch',
    postal: '44360 St Etienne de Montluc',
    horaire: '16h - 21h',
    photo: '/images/spots/jeudi.jpg',
    alt: "Le Bus Dé'tourné garé place Foch à Saint-Étienne-de-Montluc",
    geo : "47.2778974207101,-1.7823679479756382"
  },
  {
    jour: 'Vendredi',
    lieu: 'Grandchamps des Fontaines',
    adresse: "Plan d'eau Notre dame des Fontaines",
    postal: '44119 Grandchamps des Fontaines',
    horaire: '16h - 21h',
    photo: '/images/spots/vendredi.jpg',
    alt: "Le Bus Dé'tourné garé au plan d'eau Notre-Dame-des-Fontaines à Grandchamps-des-Fontaines",
    geo : "47.36461990460405,-1.6098361917956077"
  },
  {
    jour: 'Dimanche',
    lieu: 'Couëron', 
    adresse: 'Esplanade Jeremy Huguet',
    postal: '44220 Couëron',
    horaire: '12h - 19h',
    photo: '/images/spots/mercredi.jpg',
    alt: "Le Bus Dé'tourné garé esplanade Jeremy Huguet à Couëron",
    geo : "47.208999637060394,-1.7279982288685551"
  },
];
