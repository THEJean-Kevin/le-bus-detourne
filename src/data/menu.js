// Carte du bus, organisée en catégories.
// `group` vaut "repas" ou "boissons" — sert à savoir sous quel
// Les boissons restent en simple liste sans photo.

export const menuCategories = [
  {
    id: "sale",
    title: "Une petite faim",
    note: "Pour grignoter ou partager, à l'apéro ou en entrée",
    group: "repas",
    items: [
      { name: "Tartinade Du Moment", description: "accompagné de ses toasts", price: "4,50 €", photo: "/images/plats/Tartinade.avif" },
      { name: "Saucisson Du Moment (VPF)", price: "4,50 €" },
      { name: "Planche Du Bus", description: "à partager ou pas !", price: "15,00 €", photo: "/images/plats/PlancheDuBus.avif" },
      { name: "Beignets de Courgettes", description: "Accompagnés d'une crème aux herbes", price: "6,00 €", veget: true },
      { name: "Gaspacho Tomate & Basilic", price: "4,00 €", veget: true, photo: "/images/plats/Gaspacho.avif" },
      { name: 'La Planche "Los Texos"', description: "Croque monsieur à la Tome de Couëron / Quesadillas à l'emmental, accompagné d'une confiture maison tomate-basilic", price: "5,50 €", photo: "/images/plats/LosTexos.avif" },
    ],
  },
  {
    id: "incontournables",
    title: "Nos incontournables",
    group: "repas",
    items: [
      
    ],
  },
  {
    id: "hotdogs",
    title: "Hot-dogs",
    group: "repas",
    items: [
      
    ],
  },
  {
    id: "tartines",
    title: "Tartines",
    group: "repas",
    items: [
      
    ],
  },
  
  {
    id: "sucre",
    title: "Petites faims sucrées",
    group: "repas",
    items: [
     
    ],
  },
  {
    id: "Nos Bières",
    title: "Nos Bières pression",
    group: "boissons",
    items: [
      { name: "Pression 25cl", price: "25cl: 4,50€ / 50cl: 8,00€", description: "Bière de la Brasserie Trompe Souris (Blonde ou bière du moment)"  },
      { name: "Panaché 25cl", price: "25cl: 4,00€ / 50cl: 7,00€" },
      { name: "Monaco", price: "25cl: 4,20€ / 50cl: 7,20€" },
    ],
  },
  {
    id: "Nos Bières bouteilles",
    title: "Nos Bières bouteilles",
    
    group: "boissons",
    items: [
      { name: "Ambrée (Amber Ale) 5.2%", price: "6,00€", description: "Brasserie Nautile"  },
      { name: "IPA (India Pale Ale) 5.5%", price: "6,00€", description: "Brasserie Nautile"  },
      { name: "Triple (Belgian Tripel) 8.5%", price: "6,00€", description: "Brasserie Nautile"  },
      { name: "Blanche IPA (White The Fuck ) 5.2%", price: "6,00€", description: "Brasserie Nautile"  },
      { name: "Aromatisé Myrtille/Framboise 5%", price: "6,00€", description: "Brasserie Trompe Souris"  },
      { name: "Bierre Sans Alcool 0%", price: "5,00€", description: "Brasserie Dremmwel"  },
    ],
  },
  {
    id: "Nos vins",
    title: "Nos vins",
    note: "Domaine de la Noué à St Julien de Concelles",
    group: "boissons",
    items: [
      { name: "Muscadet", price: "4,00€", description: "Blanc sec"  },
      { name: "P'tit Gris", price: "4,50€", description: "Blanc Fruité"  },
      { name: "Rosé", price: "3,50€", description: "Rosé gamay, domaine des 3 lézards"  },
      { name: "Pétillant", price: "4,50€", description: "Mousseux brut"  },
    ],
  },
  {
    id: "Les apéritifs",
    title: "Les Apéro'",
    group: "boissons",
    items: [
      { name: "Kir Nantais", price: "4,50€", description: "Vin blanc sec + créme (Cassis / Mûre / Pêche)"  },
      { name: "Kir Périllant", price: "5,50€", description: "Pétillant brut + créme (Cassis / Mûre / Pêche)"  },
      { name: "Cocktail avec alcool", price: "Vois sur place", description: "Cocktail maison" },
    ],
  },
  {
    id: "Les Softs",
    title: "Les Softs",
    group: "boissons",
    items: [
      { name: "Jus de Pomme 25cl", price: "3,50€", description: "Ferme Fruitière de la Hautière"  },
      { name: "Jus de Poire 25cl", price: "3,50€", description: "Ferme Fruitière de la Hautière"  },
      { name: "Jus de Pomme/Cassis 25cl", price: "3,50€", description: "Ferme Fruitière de la Hautière"  },
      { name: "Coca Cola 33cl", price: "3,00€"  },
      { name: "Coca Cola Zéro 33cl", price: "3,00€"  },
      { name: "Ice Tea 33cl", price: "3,00€"  },
      { name: "Perrier 33cl", price: "3,50€"  },
      { name: "Sirop à l'eau 25cl", price: "1,50€", description: "Fraise / Citron / Menthe / Grenadide" },
      { name: "Diabolo 25cl", price: "2,50€", description: "Fraise / Citron / Menthe / Grenadide" },
      { name: "Eau plate 50cl", price: "1,00€"  },
      { name: "Cocktail sans alcool", price: "Vois sur place", description: "Cocktail maison" },
    ],
  },
  {
    id: "Les boissons chaudes",
    title: "Les Boissons Chaudes",
    group: "boissons",
    items: [
      { name: "Expresso", price: "2,00€", description: "Torrecfacteur: Un Grain, Une Feuille"  },
      { name: "Double Expresso", price: "3,00€", description: "Torrecfacteur: Un Grain, Une Feuille"  },
      { name: "Café allongé", price: "2,50€", description: "Torrecfacteur: Un Grain, Une Feuille"  },
      { name: "Décaféiné", price: "2,00€", description: "Torrecfacteur: Un Grain, Une Feuille"  },
      { name: "Chocolat Chaud", price: "4,00€" },
      { name: "Thé", price: "2,50€", description: "Thé Vert / Thé Vert Menthe / Thé Vert Citron / Thé noir"  },
      { name: "Infusion", price: "2,50€", description: "Camomille"  },
    ],
  },
];
