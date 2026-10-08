export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  photo?: string;
  veget?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  note?: string;
  group: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "sale",
    title: "Une petite faim",
    note: "Pour grignoter ou partager, à l'apéro ou en entrée",
    group: "repas",
    items: [
      { name: "Tartinade Du Moment", price: "4,50 €", description: "accompagné de ses toasts", photo: /images/plats/"Tartinade.avif" },
      { name: "Saucisson Du Moment (VPF)", price: "4,50 €", photo: /images/plats/"Saucisson.jpg" },
      { name: "Planche De Fromage", price: "15,00 €", description: "à partager ou pas !", photo: /images/plats/"PlancheDuBus.avif", veget: true },
      { name: "Soupe de légume (petit format)", price: "0,00€", description: "Soupe de légume maison du moment", photo: /images/plats/"Gaspacho.avif", veget: true },
    ],
  },
  {
    id: "hotdogs",
    title: "Hot-dogs",
    note: "Saucisse de boeuf du Gaec du Marais à Couëron (44220)",
    group: "repas",
    items: [
      { name: "Le Classique", price: "6€", description: "Pain Viennois, Saucisse de Boeuf & Sauce au Choix (Ketchup, Mayonnaise, Moutarde)", photo: /images/plats/"HDClassique.jpg" },
      { name: "Le Forestier", price: "8€", description: "Pain Viennois, Saucisse de Boeuf, Crème de moutarde, Comté", photo: /images/plats/"HDItalien.avif" },
      { name: "Le Savoyard", price: "7€", description: "Pain Viennois, Jambon Serrano, Reblochon, Roquette, Oignon Confit", photo: /images/plats/"HDEstival.avif" },
    ],
  },
  {
    id: "tartines",
    title: "Tartines",
    note: "Pain de Campagne de notre boulanger Au Petit Pétrin à Couëron (44220)",
    group: "repas",
    items: [
      { name: "La Chèvre miel", price: "6,50€", description: "Pain de Campagne, Chèvre, Lardon, Miel", photo: /images/plats/"TartineItalie.avif" },
      { name: "La Fermière", price: "8,50€", description: "Pain de Campagne, Boudin noir, Noix, Pomme, Comté", photo: /images/plats/"Wrap.avif" },
    ],
  },
  {
    id: "incontournables",
    title: "Nos incontournables",
    group: "repas",
    items: [
      { name: "Soupe de légume (grand format)", price: "8,50€", description: "Soupe de légume maison du moment", photo: /images/plats/"Cesar.avif", veget: true },
      { name: "Tartelette Boudin", price: "9€", description: "Tartelette, Boudin Noir, Pomme, Lardon, Poireau. Accompagné de sa garniture du moment" },
      { name: "Le croque Monsieur", price: "5,50€", description: "Pain de mie, Comté, Jambon Serrano, Champignon, Moutarde" },
    ],
  },
  {
    id: "sucre",
    title: "Notes sucrées",
    group: "repas",
    items: [
      { name: "Poire poché au chocolat", price: "3,50€", description: "Poire poché avec nappage chocolat", photo: /images/plats/"SaladeFruits.jpg", veget: true },
      { name: "Cookie aux pépites de chocolat", price: "4€", photo: /images/plats/"Cookie.avif" },
      { name: "Brioche façon pain perdu", price: "Caramel : 4€ Nutella 5€", description: "Caramel au beurre salé ou nutella", photo: /images/plats/"Brioche.avif" },
      { name: "La crêpe party du bus", price: "3,50€", description: "Au choix : Sucre / Caramel au beurre salé / Nature", photo: /images/plats/"Crepe.jpg" },
      { name: "Compote de pommes", price: "4€", photo: /images/plats/"Banana.avif", veget: true },
      { name: "Coupe de glace", price: "1 boule - 1,50€ / 2 boules - 2,25€ / 3 boules - 3€", photo: /images/plats/"Glace.jpg" },
    ],
  },
  {
    id: "menu",
    title: "Le menu enfant - 8€",
    note: "1 soft + 1 demi tartine ou 1 demi hotdog au choix",
    group: "repas",
    items: [
    ],
  },
  {
    id: "Nos Bières",
    title: "Nos Bières pression",
    group: "boissons",
    items: [
      { name: "Pression 25cl", price: "25cl: 4,50€ / 50cl: 8,00€", description: "Bière de la Brasserie Trompe Souris (Blonde ou bière du moment)" },
      { name: "Panaché 25cl", price: "25cl: 4,00€ / 50cl: 7,00€" },
      { name: "Monaco", price: "25cl: 4,20€ / 50cl: 7,20€" },
    ],
  },
  {
    id: "Nos Bières bouteilles",
    title: "Nos Bières bouteilles",
    group: "boissons",
    items: [
      { name: "Ambrée (Amber Ale) 5.2%", price: "6,00€", description: "Brasserie Nautile" },
      { name: "IPA (India Pale Ale) 5.5%", price: "6,00€", description: "Brasserie Nautile" },
      { name: "Triple (Belgian Tripel) 8.5%", price: "6,00€", description: "Brasserie Nautile" },
      { name: "Blanche IPA (White The Fuck ) 5.2%", price: "6,00€", description: "Brasserie Nautile" },
      { name: "Aromatisé Myrtille/Framboise 5%", price: "6,00€", description: "Brasserie Trompe Souris" },
      { name: "Bierre Sans Alcool 0%", price: "5,00€", description: "Brasserie Dremmwel" },
    ],
  },
  {
    id: "Nos vins",
    title: "Nos vins",
    group: "boissons",
    items: [
      { name: "Muscadet (Blanc sec)", price: "4,00€", description: "Domaine de la Noué" },
      { name: "P'tit Gris (Blanc Fruité)", price: "4,50€", description: "Domaine de la Noué" },
      { name: "Rosé", price: "3,50€" },
      { name: "Pétillant (Mousseux brut)", price: "4,50€", description: "Domaine de la Noué" },
    ],
  },
  {
    id: "Les apéritifs",
    title: "Les Apéro'",
    group: "boissons",
    items: [
      { name: "Kir Nantais", price: "4,50€", description: "Vin blanc sec + créme (Cassis / Mûre / Pêche)" },
      { name: "Kir Périllant", price: "5,50€", description: "Pétillant brut + créme (Cassis / Mûre / Pêche)" },
      { name: "Cocktail avec alcool", price: "Voir sur place", description: "Cocktail maison" },
    ],
  },
  {
    id: "Les Softs",
    title: "Les Softs",
    group: "boissons",
    items: [
      { name: "Jus de Pomme 25cl", price: "3,50€", description: "Ferme Fruitière de la Hautière" },
      { name: "Jus de Poire 25cl", price: "3,50€", description: "Ferme Fruitière de la Hautière" },
      { name: "Jus de Pomme/Cassis 25cl", price: "3,50€", description: "Ferme Fruitière de la Hautière" },
      { name: "Coca Cola 33cl", price: "3,00€" },
      { name: "Coca Cola Zéro 33cl", price: "3,00€" },
      { name: "Ice Tea 33cl", price: "3,00€" },
      { name: "Perrier 33cl", price: "3,50€" },
      { name: "Sirop à l'eau 25cl", price: "1,50€", description: "Fraise / Citron / Menthe / Grenadine / Pêche" },
      { name: "Diabolo 25cl", price: "2,50€", description: "Fraise / Citron / Menthe / Grenadine / Pêche" },
      { name: "Eau plate 50cl", price: "1,00€" },
      { name: "Cocktail sans alcool", price: "Voir sur place", description: "Cocktail maison" },
    ],
  },
  {
    id: "Les boissons chaudes",
    title: "Les Boissons Chaudes",
    group: "boissons",
    items: [
      { name: "Expresso", price: "2,00€", description: "Torréfacteur: Un Grain, Une Feuille" },
      { name: "Double Expresso", price: "3,00€", description: "Torréfacteur: Un Grain, Une Feuille" },
      { name: "Café allongé", price: "2,50€", description: "Torréfacteur: Un Grain, Une Feuille" },
      { name: "Décaféiné", price: "2,00€", description: "Torréfacteur: Un Grain, Une Feuille" },
      { name: "Chocolat Chaud", price: "4,00€" },
      { name: "Thé", price: "2,50€", description: "Thé Vert / Thé Vert Menthe / Thé Vert Citron / Thé noir" },
      { name: "Infusion", price: "2,50€", description: "Camomille / Fruits Rouge" },
    ],
  },
];
