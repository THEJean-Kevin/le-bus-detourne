// src/data/announcements.ts
// Configuration des bandeaux d'annonce.
// - startDate / endDate sont optionnelles (format "YYYY-MM-DD")
//   - aucune des deux -> annonce affichée en permanence
//   - startDate seule -> affichée à partir de cette date, indéfiniment
//   - endDate seule -> affichée dès maintenant jusqu'à cette date
//   - les deux -> affichée uniquement sur cette période
// - website est optionnel : si renseigné, un lien cliquable est ajouté en fin de texte
// - plusieurs annonces actives en même temps sont empilées automatiquement

export interface Announcement {
  text: string;
  website?: string;
  startDate?: string; // "YYYY-MM-DD"
  endDate?: string;   // "YYYY-MM-DD"
}

export const announcements: Announcement[] = [
  {
    text: "Fermeture exceptionnelle le 17 octobre au 10 novembre, on se retrouve le 11 novembre à Couëron!",
    startDate: "2026-09-24",
    endDate: "2026-11-09",
  },
  {
    text: "Nouvelle carte hiver disponible, venez la découvrir.",
    website: "https://www.lebusdetourne.fr/notre-carte",
  },
];

// Renvoie uniquement les annonces actives à la date du jour
export function getActiveAnnouncements(): Announcement[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return announcements.filter((a) => {
    if (a.startDate) {
      const start = new Date(a.startDate);
      start.setHours(0, 0, 0, 0);
      if (today < start) return false;
    }
    if (a.endDate) {
      const end = new Date(a.endDate);
      end.setHours(23, 59, 59, 999);
      if (today > end) return false;
    }
    return true;
  });
}
