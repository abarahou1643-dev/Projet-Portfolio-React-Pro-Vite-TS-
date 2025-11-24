export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  status: "valid" | "expired";
  image?: string;
  imageAlt?: string;
};

export const certifications: Certification[] = [
  {
    id: "1",
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "Plateforme de Formation",
    issueDate: "2025-10-05",
    status: "valid",
    skills: ["Programmation Orientée Objet", "Collections Java", "Gestion des exceptions", "Multithreading"],
    credentialUrl: "#"
  },
  {
    id: "2",
    title: "Hibernate & JPA",
    issuer: "Plateforme de Formation",
    issueDate: "2025-10-19",
    status: "valid",
    skills: ["Mapping Objet-Relationnel", "JPQL", "Gestion des transactions", "Optimisation des performances"],
    credentialUrl: "#"
  },
  {
    id: "3",
    title: "Développement Front-End moderne avec React",
    issuer: "Plateforme de Formation",
    issueDate: "2025-11-19",
    status: "valid",
    skills: ["Composants React", "Hooks", "Gestion d'état", "React Router"],
    credentialUrl: "#"
  }
];