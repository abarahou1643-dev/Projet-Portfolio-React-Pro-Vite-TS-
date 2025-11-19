export type Course = {
    category: string;
    items: string[];
};

export const courses: Course[] = [
    {
        category: "Programmation Java",
        items: [
            "Bases de la programmation Java (JVM, JDK, concepts fondamentaux)",
            "Programmation orientée objet (classes, objets, héritage, polymorphisme)",
            "Gestion des exceptions et robustesse des applications",
            "Collections Java (Set, List, Map) pour la manipulation de données",
            "API JDBC pour l'interaction avec les bases de données relationnelles",
            "Hibernate et JPQL pour la gestion d'objets persistants",
            "Sockets et threads pour les applications réseau et concurrentes",
            "Interfaces graphiques avec JavaFX et applications web avec JSP/Ajax"
        ]
    },
    {
        category: "Développement Web et Frameworks",
        items: [
            "Langages web : HTML, CSS, JavaScript",
            "Framework Laravel pour PHP",
            "PDO pour la gestion des bases de données",
            "Websockets pour la communication temps réel",
            "Web Workers pour le traitement parallèle",
            "Node.js pour les serveurs web performants",
            "Express.js pour les applications web",
            "Mongoose ODM pour MongoDB",
            "React.js pour les interfaces utilisateur dynamiques",
            "Angular pour les applications monopages (SPA)"
        ]
    },
    {
        category: "DevOps et Architecture",
        items: [
            "Développement back-end avec Spring IoC, Spring Security",
            "Docker pour la conteneurisation",
            "Concepts DevOps (culture, collaboration, automatisation)",
            "Outils : Kubernetes, Jenkins, Ansible, Azure DevOps",
            "Intégration continue et déploiement continu (CI/CD)",
            "Qualité du code avec SonarQube",
            "Programmation distribuée avec RMI",
            "Architecture microservices",
            "Gestion de la scalabilité et performance"
        ]
    },
    {
        category: "Développement Mobile et Multiplateforme",
        items: [
            "Conception d'interfaces graphiques mobiles (XML, ViewGroups)",
            "API natives (téléphonie, SMS, GPS, caméra)",
            "Persistance des données (SQLite, Room, Content Providers)",
            "Multi-threading et tâches en arrière-plan",
            "Frameworks multiplateformes : React Native, Xamarin, Flutter",
            "Développement pour iOS, Android, Windows",
            "Gestion de la compatibilité et performances",
            "Tests et débogage multiplateforme"
        ]
    },
    {
        category: "Modélisation et Conception",
        items: [
            "UML (diagrammes de classes, séquence, cas d'utilisation, etc.)",
            "Modélisation de systèmes logiciels et processus métier",
            "Meilleures pratiques de modélisation",
            "Communication entre parties prenantes avec UML",
            "Documentation des exigences et conception"
        ]
    }
];