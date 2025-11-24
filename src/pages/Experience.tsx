import { experiences } from "../data/experience";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { motion } from "framer-motion";

export default function Experience() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "job": return "bg-gradient-to-r from-green-500 to-emerald-600 text-white";
      case "internship": return "bg-gradient-to-r from-blue-500 to-cyan-600 text-white";
      case "training": return "bg-gradient-to-r from-purple-500 to-pink-600 text-white";
      default: return "bg-gradient-to-r from-gray-500 to-gray-600 text-white";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "job": return "💼 Emploi";
      case "internship": return "🎓 Stage";
      case "training": return "📚 Formation";
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-green-50/30 dark:to-green-950/10 py-12">
      <Helmet>
        <title>Expériences Professionnelles - Aicha BARAHOU</title>
        <meta name="description" content="Mon parcours d'enseignement et mes stages de formation" />
      </Helmet>

      <div className="text-center space-y-6 mb-16">
        <motion.h1 
          className="text-5xl font-bold bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Expériences Professionnelles
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Mon parcours d'enseignement et mes stages de formation
        </motion.p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-600 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-8 max-w-6xl mx-auto px-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm group">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <CardTitle className="text-3xl text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                    {exp.role}
                  </CardTitle>
                  <Badge className={`${getTypeColor(exp.type)} text-sm px-4 py-2 shadow-lg`}>
                    {getTypeLabel(exp.type)}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <p className="text-xl font-semibold text-primary bg-gradient-to-r from-primary/10 to-transparent px-4 py-2 rounded-lg">
                    {exp.organization}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-base text-muted-foreground">
                    <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                      <span>📍</span>
                      <span>{exp.location}</span>
                    </span>
                    <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                      <span>📅</span>
                      <span>{exp.start} — {exp.end}</span>
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-lg italic text-gray-600 dark:text-gray-400 mt-2 border-l-4 border-primary pl-4 py-1">
                      {exp.description}
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <span className="w-2 h-6 bg-primary rounded-full"></span>
                    Activités principales :
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start group/item">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                        <span className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {exp.technologies && (
                    <div className="pt-6">
                      <h4 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                        <span className="w-2 h-6 bg-primary rounded-full"></span>
                        Domaines enseignés :
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-base px-4 py-2 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}