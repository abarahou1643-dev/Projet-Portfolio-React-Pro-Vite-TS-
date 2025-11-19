export type Experience = {
    position: string;
    institution: string;
    period: string;
    description: string[];
    level?: string;
    courses?: string[];
};

export const experiences: Experience[] = [
    {
        position: "Enseignante d'informatique",
        institution: "Collège Atlas – Zmrane Charquia, Oulad Hajjaj",
        period: "Depuis 2024",
        level: "Tronc Commun (Lycée) & 2ème année Collégiale",
        courses: [
            "Réseaux informatiques",
            "Langages de programmation",
            "Généralités sur le système informatique",
            "Logiciels et outils bureautiques",
            "Représentation et codage de l'information"
        ],
        description: [
            "Enseignement de l'informatique aux niveaux secondaire et collégial",
            "Développement de supports pédagogiques adaptés",
            "Encadrement des projets étudiants"
        ]
    },
    {
        position: "Stages dans l'enseignement",
        institution: "École Salah Al-Din Al-Ayoubi",
        period: "3 stages",
        description: [
            "Observations de classes",
            "Participation à des activités pédagogiques",
            "Contribution au suivi des élèves"
        ]
    },
    {
        position: "Stage en administration",
        institution: "Lycée Qualifiant Rhalif Al-Farouq",
        period: "Stage",
        description: [
            "Assistance aux tâches administratives",
            "Classement et organisation des documents"
        ]
    }
];