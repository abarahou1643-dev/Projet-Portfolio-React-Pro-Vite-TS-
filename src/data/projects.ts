export type Project = {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in_progress" | "planned";
  progress?: number;
  technologies: string[];
  period: string;
  details?: string;
  githubUrl?: string;
  demoUrl?: string;
  features?: string[];
  image?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "École de Musique 'Harmonie'",
    description: "Application de gestion complète pour une école de musique",
    status: "completed",
    technologies: ["Java", "JavaFX", "MySQL", "Scene Builder", "Maven"],
    period: "2024",
    githubUrl: "https://github.com/abarahou1643-dev/Ecole-musique.git",
    features: [
      "Gestion des élèves et professeurs",
      "Planning des cours instrumentaux",
      "Gestion du matériel musical",
      "Interface graphique moderne",
      "Base de données relationnelle"
    ],
    details: "Application développée en Java/JavaFX pour digitaliser la gestion des ressources pédagogiques et optimiser la planification des cours de musique dans une école spécialisée.",
    image: "/projects/music-school.jpg"
  },
  {
    id: "2",
    title: "Nouveaux Projets en Préparation",
    description: "Applications éducatives et outils pédagogiques innovants",
    status: "planned",
    technologies: ["React", "Python", "Java", "Android", "Node.js"],
    period: "2025",
    details: "Je travaille actuellement sur de nouveaux projets éducatifs innovants. Revenez bientôt pour découvrir mes réalisations complètes."
  }
];