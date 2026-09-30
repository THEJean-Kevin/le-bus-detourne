// Carte du bus, organisée en catégories.
// `group` vaut "repas" ou "boissons" — sert à savoir sous quel
// Les boissons restent en simple liste sans photo.

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
      { name: "Tartinade Du Moment", description: "accompagné de ses toasts", price: "4,50 €", photo: "/images/plats/Tartinade.avif" },
      { name: "Saucisson Du Moment (VPF)", price: "4,50 €" },
      { name: "Planche Du Bus", description: "à partager ou pas !", price: "15,00 €", photo: "/images/plats/PlancheDuBus.avif" },
      { name: "Gaspacho Tomate & Basilic", price: "4,00 €", veget: true, photo: "/images/plats/Gaspacho.avif" },
      { name: 'La Planche "Los Texos"', description: "Croque monsieur à la Tome de Couëron / Quesadillas à l'emmental, accompagné d'une confiture maison tomate-basilic", price: "5,50 €", photo: "/images/plats/LosTexos.avif" },
    ],
  },
  {
    id: "hotdogs",
    title: "Hot-dogs",
    note: "Saucisse de boeuf du Gaec du Marais à Couëron (44220)",
    group: "repas",
    items: [
      { name: "Le Classique", description: "Pain Viennois, Saucisse de Boeuf & Sauce au Choix (Ketchup, Mayonnaise, Moutarde)", price: "6€"},
      { name: "L'italien", description: "Pain Viennois, Saucisse de Boeuf, Crème de Parmesan & Tuile Parmesan", price: "8€"},
      { name: "L'estival", description: "Pain Viennois, Thon, Concombres, Pickles d'Oignons & Crème épaisse", price: "5,50€"},
      { name: "Le Champêtre", description: "Pain Viennois, Emincé de Poulet, Champignons, Tome de Couëron & Oignons", price: "7€"}
    ],
  },
  {
    id: "tartines",
    title: "Tartines",
    group: "repas",
    note: "Pain de Campagne de notre boulanger Au Petit Pétrin à Couëron (44220)",
    items: [
      { name: "La Croust' Italie", description:"Pain de Campagne, Emincé de Poulet, Crème de Parmesan, Tuile de Parmesan & Tomates Cerises", price:"9,50€"},
      { name: "La veggie-Confite", description: "Pain de Campagne, Confiture maison Tomate-Basilic, Champignons, Poivrons Grillés & Tomates Cerises", price: "7,50€", veget:true},
      { name: "L'Océane", descritpion: "Pain de Campagne, Crème Epaisse, Thon, Tomates, Concombres, Pickles d'Oignons & Oeuf Dur", price: "8€"}
    ],
  },
  {
    id: "incontournables",
    title: "Nos incontournables",
    group: "repas",
    items: [
      {name:"Le wrap poulet", description:"Crème Epaisse, Emincé de Poulet, Tomates, Champignons, Pickles d'oignons & Salade", price:"6,50€"},
      {name:"La salade César du bus", description:"Salade, Emincé de Poulet (FR), Tome de Couëron, Croûtons, Oeuf Dur, Tomates Cerises & Sauce César", price:"9€"}
    ],
  },
  {
    id: "sucre",
    title: "Petites faims sucrées",
    group: "repas",
    items: [
      {name:"Salade de fruits frais", price:"3,50€"},
      {name:"Cookie aux smarties", price:"3€"},
      {name:"Brioche façon pain perdu", description:"Caramel au beurre salé",price:"4€"},
      {name:"La crêpe party du bus", descritpion:"Au choix : Sucre / Caramel au beurre salé / Nature", price:"3,50€"},
      {name:"Banana split", price:"6€"},
      {name:"Coupe de glace", price:"1 boule- 1,50€ / 2 boules - 2,25€ / 3 boules - 3€"}
    ],
  },
       {id:"menu",
        title:"Le menu enfant - 8€",
        group: "repas",
        note: "1 soft + 1 demi tartine ou 1 demi hotdog au choix",
          items:[]
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
    group: "boissons",
    items: [
      { name: "Muscadet (Blanc sec)", price: "4,00€", description: "Domaine de la Noué"  },
      { name: "P'tit Gris (Blanc Fruité)", price: "4,50€", description: "Domaine de la Noué"  },
      { name: "Rosé (Rosé gamay)", price: "3,50€", description: "Domaine des 3 lézards"  },
      { name: "Pétillant (Mousseux brut)", price: "4,50€", description: "Domaine des 3 lézards"  },
    ],
  },
  {
    id: "Les apéritifs",
    title: "Les Apéro'",
    group: "boissons",
    items: [
      { name: "Kir Nantais", price: "4,50€", description: "Vin blanc sec + créme (Cassis / Mûre / Pêche)"  },
      { name: "Kir Périllant", price: "5,50€", description: "Pétillant brut + créme (Cassis / Mûre / Pêche)"  },
      { name: "Cocktail avec alcool", price: "Voir sur place", description: "Cocktail maison" },
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
      { name: "Cocktail sans alcool", price: "Voir sur place", description: "Cocktail maison" },
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
