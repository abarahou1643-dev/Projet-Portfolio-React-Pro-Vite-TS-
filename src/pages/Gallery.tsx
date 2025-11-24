import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    title: "Remise de Diplôme",
    category: "Éducation",
    description: "Cérémonie de remise de diplôme à l'ENS Marrakech",
    year: "2023",
    location: "Marrakech",
    image: "/gallery/diploma.jpg"
  },
  {
    id: 2,
    title: "Formation CRMEF",
    category: "Formation",
    description: "Session de formation professionnelle des enseignants",
    year: "2023",
    location: "CRMEF",
    image: "/gallery/formation.jpg"
  },
  {
    id: 3,
    title: "Enseignement au Lycée",
    category: "Enseignement",
    description: "Cours d'informatique avec les élèves",
    year: "2024",
    location: "Collège",
    image: "/gallery/teaching.jpg"
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-pink-50/30 dark:to-pink-950/10 py-12">
      <Helmet>
        <title>Galerie Photos - Aicha BARAHOU</title>
        <meta name="description" content="Moments marquants de mon parcours académique et professionnel" />
      </Helmet>

      <div className="text-center space-y-6 mb-16">
        <motion.h1 
          className="text-5xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Galerie Photos
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Moments marquants de mon parcours académique et professionnel
        </motion.p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden group hover:scale-105">
              <div className="aspect-video relative overflow-hidden">
                {/* Image réelle au lieu de l'emoji */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm">Cliquer pour agrandir</span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-sm px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30">
                    {item.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>
                <CardTitle className="text-xl text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-base text-muted-foreground mb-3 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span>📍</span>
                  {item.location}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-16 max-w-2xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-gradient-to-r from-primary/10 to-pink-500/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Plus de photos à venir !
          </h3>
          <p className="text-muted-foreground text-lg">
            Cette galerie sera régulièrement mise à jour avec les nouveaux moments forts de mon parcours.
          </p>
        </div>
      </motion.div>
    </div>
  );
}