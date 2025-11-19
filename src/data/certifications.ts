export type Certification = {
    title: string;
    issuer: string;
    issueDate: string;
    expiryDate?: string;
    credentialId?: string;
    credentialUrl?: string;
    skills?: string[];
    tags?: string[];
    image?: string;
    imageAlt?: string;
    status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
    {
        title: "Fondamentaux et Concepts Avancés de la Programmation Java",
        issuer: "Plateforme de Formation",
        issueDate: "2025-10-05",
        skills: [
            "Programmation Orientée Objet",
            "Collections Java",
            "Gestion des exceptions",
            "Multithreading",
            "JDBC"
        ],
        tags: ["Java", "Backend", "POO"],
        image: "C:\\Users\\sweet\\Desktop\\mon-portfolio\\src\\data\\1",
        imageAlt: "Certificat Fondamentaux Java",
        status: "active"
    },
    {
        title: "Hibernate & JPA",
        issuer: "Plateforme de Formation",
        issueDate: "2025-10-19",
        skills: [
            "Mapping Objet-Relationnel",
            "JPQL",
            "Gestion des transactions",
            "Optimisation des performances"
        ],
        tags: ["Java", "ORM", "Base de données"],
        image: "C:\\Users\\sweet\\Desktop\\mon-portfolio\\src\\data\\2",
        imageAlt: "Certificat Hibernate JPA",
        status: "active"
    },
    {
        title: "Développement Front-End moderne avec React",
        issuer: "Plateforme de Formation",
        issueDate: "2025-11-19",
        skills: [
            "Composants React",
            "Hooks",
            "Gestion d'état",
            "React Router",
            "Intégration API"
        ],
        tags: ["React", "Frontend", "JavaScript"],
        image: "/certificats/react-frontend.webp",
        imageAlt: "Certificat React Frontend",
        status: "active"
    }
];