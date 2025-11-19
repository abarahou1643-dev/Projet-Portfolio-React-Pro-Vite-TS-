export type GalleryImage = {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    date?: string;
    location?: string;
};

export const galleryImages: GalleryImage[] = [
    {
        id: 1,
        title: "Remise de Diplôme",
        description: "Cérémonie de remise de diplôme à l'ENS Marrakech",
        image: "/gallery/diplome-ens.webp",
        category: "Éducation",
        date: "2023",
        location: "Marrakech"
    },
    {
        id: 2,
        title: "Formation CRMEF",
        description: "Session de formation professionnelle des enseignants",
        image: "/gallery/formation-crmef.webp",
        category: "Formation",
        date: "2023",
        location: "CRMEF"
    },
    {
        id: 3,
        title: "Enseignement au Lycée",
        description: "Cours d'informatique avec les élèves",
        image: "/gallery/enseignement-lycee.webp",
        category: "Enseignement",
        date: "2024",
        location: "Collège Atlas"
    }
];