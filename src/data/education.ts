export type Education = {
  id: string;
  degree: string;
  school: string;
  field?: string;
  location: string;
  start: string;
  end: string;
  status: "completed" | "in_progress";
  description?: string;
  highlights?: string[];
};

export const education: Education[] = [
  {
    id: "1",
    degree: "Master Didactique des Sciences et Ingénierie éducative – Option TEE",
    school: "École Normale Supérieure (ENS), Marrakech",
    field: "Technologies Émergentes en Éducation - 2ème année",
    location: "Maroc",
    start: "2024",
    end: "Présent",
    status: "in_progress",
    description: "Master en Sciences et Technologies de l'Information et de la Communication pour l'Éducation"
  },
  {
    id: "2",
    degree: "Licence en Éducation – Option Informatique",
    school: "École Normale Supérieure (ENS), Marrakech",
    field: "Formation pédagogique et informatique - Préparation au métier d'enseignant",
    location: "Marrakech, Maroc",
    start: "2023",
    end: "2023",
    status: "completed",
    highlights: ["Formation pédagogique complète", "Spécialisation en informatique"]
  },
  {
    id: "3",
    degree: "Formation Professionnelle des Enseignants",
    school: "CRMEF",
    field: "Formation qualifiante après réussite du concours - Spécialité Informatique",
    location: "Maroc",
    start: "2023",
    end: "2023",
    status: "completed"
  },
  {
    id: "4",
    degree: "Baccalauréat Sciences Physiques",
    school: "Lycée",
    location: "Maroc",
    start: "2020",
    end: "2020",
    status: "completed",
    highlights: ["Mention Bien"]
  }
];