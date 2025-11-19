export type Project = {
    title: string;
    institution: string;
    description: string;
    period?: string;
    tags: string[];
    link?: string;
    repo?: string;
};

export const projects: Project[] = [
    {
        title: "Plateforme de pré-candidature à la licence d'éducation",
        institution: "Ecole Supérieure d'Education et de Formation de l'Université Chouaîb Doukkali",
        description: "Système de gestion des pré-candidatures pour le concours passerelle S3",
        period: "2024",
        tags: ["Web", "Gestion", "Education"],
        link: "#"
    },
    {
        title: "Plateforme de gestion des absences",
        institution: "Ecole Nationale des Sciences Appliquées d'El Jadida",
        description: "Solution web et mobile pour le suivi des absences et demandes administratives",
        period: "2024",
        tags: ["Web", "Mobile", "Administration"],
        link: "#"
    },
    {
        title: "ProfSwap - Plateforme de permutation",
        institution: "Projet Personnel",
        description: "Plateforme de permutation pour les enseignants développée en MERN Stack",
        period: "2023",
        tags: ["MERN", "React", "Node.js", "MongoDB"],
        repo: "#"
    },
    {
        title: "Site web institutionnel",
        institution: "Faculté Polydisciplinaire Sidi Bennour",
        description: "Site web moderne et responsive pour la faculté",
        period: "2023",
        tags: ["Web", "WordPress", "Institution"],
        link: "#"
    }
];