export type Experience = {
  id: string;
  role: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  type: "job" | "internship" | "training";
  description?: string;
  responsibilities: string[];
  technologies?: string[];
};

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Enseignante d'informatique",
    organization: "Collège Atlas – Zmrane Charquia, Oulad Hajjaj",
    location: "Maroc",
    start: "2024",
    end: "Présent",
    type: "job",
    description: "Tronc Commun (Lycée) & 2ème année Collégiale",
    responsibilities: [
      "Enseignement de l'informatique aux niveaux secondaire et collégial",
      "Développement de supports pédagogiques adaptés",
      "Encadrement des projets étudiants"
    ],
    technologies: ["Réseaux informatiques", "Langages de programmation", "Systèmes informatiques"]
  },
  {
    id: "2",
    role: "Stages dans l'enseignement",
    organization: "École Salah Al-Din Al-Ayoubi",
    location: "Maroc",
    start: "2023",
    end: "2023",
    type: "internship",
    responsibilities: [
      "Observations de classes",
      "Participation à des activités pédagogiques",
      "Contribution au suivi des élèves"
    ]
  },
  {
    id: "3",
    role: "Stage en administration",
    organization: "Lycée Qualifiant Rhalif Al-Farouq",
    location: "Maroc",
    start: "2023",
    end: "2023",
    type: "internship",
    responsibilities: [
      "Assistance aux tâches administratives",
      "Classement et organisation des documents"
    ]
  }
];