import { projects } from "../data/projects";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Code, Play } from "lucide-react";

export default function Projects() {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "completed": 
        return { 
          color: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
          icon: "✅"
        };
      case "in_progress": 
        return { 
          color: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
          icon: "🚧"
        };
      case "planned": 
        return { 
          color: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800",
          icon: "📋"
        };
      default: 
        return { 
          color: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800",
          icon: "📁"
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10 dark:from-slate-950 dark:via-blue-950/10 dark:to-indigo-950/5">
      <Helmet>
        <title>Projets - Aicha BARAHOU</title>
        <meta name="description" content="Mes réalisations en développement et applications" />
      </Helmet>

      {/* En-tête */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="relative text-center space-y-6 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 px-4 py-2 text-sm mb-4">
              🚀 Mes Réalisations
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Projets
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Découvrez mes applications et solutions développées avec passion et expertise
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grille des projets */}
      <div className="relative max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const statusConfig = getStatusConfig(project.status);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* En-tête avec gradient */}
                  <div className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 border-b border-slate-200/40 dark:border-slate-700/40">
                    <CardHeader className="pb-4 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">🎵</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-2xl text-slate-900 dark:text-white font-bold leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                              {project.title}
                            </CardTitle>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Métadonnées */}
                      <div className="flex items-center gap-4 flex-wrap">
                        <Badge className={`${statusConfig.color} border px-3 py-1.5 text-sm font-medium`}>
                          <span className="mr-2">{statusConfig.icon}</span>
                          {project.status === "completed" ? "Terminé" : 
                           project.status === "in_progress" ? "En développement" : "En préparation"}
                        </Badge>
                        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </CardHeader>
                  </div>

                  <CardContent className="p-6 space-y-6">
                    {/* Description détaillée */}
                    {project.details && (
                      <div className="bg-slate-50/50 dark:bg-slate-800/30 rounded-xl p-4 border border-slate-200/40 dark:border-slate-700/40">
                        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                          {project.details}
                        </p>
                      </div>
                    )}

                    {/* Fonctionnalités */}
                    {project.features && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          Fonctionnalités principales
                        </h4>
                        <div className="grid gap-2">
                          {project.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * idx }}
                              className="flex items-start gap-3 group/feature"
                            >
                              <div className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/feature:scale-110 transition-transform">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              </div>
                              <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                        Stack Technologique
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.05 * techIndex }}
                          >
                            <Badge 
                              variant="secondary"
                              className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border-0 text-xs px-3 py-1.5 font-medium transition-colors"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button 
                            className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white transition-all duration-300 group/btn"
                          >
                            <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Code Source
                            <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                          </Button>
                        </a>
                      )}
                      
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button 
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                          >
                            <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Live Demo
                            <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Section statistiques */}
        <motion.div 
          className="max-w-4xl mx-auto mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Compétences Maîtrisées
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Technologies et outils que j'utilise pour créer des solutions robustes
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Java", color: "from-orange-500 to-red-500", count: "Backend" },
                { name: "MySQL", color: "from-blue-600 to-indigo-600", count: "Database" },
                { name: "Maven", color: "from-yellow-500 to-orange-500", count: "Build Tool" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white">{tech.name}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{tech.count}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}