import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { motion } from "framer-motion";

export type Education = {
  id: string;
  degree: string;
  school: string;
  field?: string;
  location: string;
  start: string;
  end: string;
  status: "completed" | "in_progress";
  description?: string;
  highlights?: string[];
};

export const education: Education[] = [
  {
    id: "1",
    degree: "Master Didactique des Sciences et Ingénierie éducative   ",
    school: "École Normale Supérieure (ENS), Marrakech",
    field: "Technologies Émergentes en Éducation - 2ème année",
    location: "Maroc",
    start: "2024",
    end: "Présent",
    status: "in_progress",
    description: "Master en Sciences et Technologies de l'Information et de la Communication pour l'Éducation"
  },
  {
    id: "2",
    degree: "Licence en Éducation – Option Informatique",
    school: "École Normale Supérieure (ENS), Marrakech",
    field: "Formation pédagogique et informatique - Préparation au métier d'enseignant",
    location: "Marrakech, Maroc",
    start: "2023",
    end: "2023",
    status: "completed",
    highlights: ["Formation pédagogique complète", "Spécialisation en informatique"]
  },
  {
    id: "3",
    degree: "Formation Professionnelle des Enseignants",
    school: "CRMEF",
    field: "Formation qualifiante après réussite du concours - Spécialité Informatique",
    location: "Maroc",
    start: "2023",
    end: "2023",
    status: "completed"
  },
  {
    id: "4",
    degree: "Baccalauréat Sciences Physiques",
    school: "Lycée",
    location: "Maroc",
    start: "2020",
    end: "2020",
    status: "completed",
    highlights: ["Mention Bien"]
  }
];

export default function Education() {
  const getStatusConfig = (status: "completed" | "in_progress") => {
    return status === "completed" 
      ? {
          icon: "🎓",
          gradient: "from-emerald-500 to-green-600",
          badge: "bg-gradient-to-r from-emerald-500 to-green-600",
          text: "Terminé"
        }
      : {
          icon: "🚀",
          gradient: "from-blue-500 to-purple-600",
          badge: "bg-gradient-to-r from-blue-500 to-purple-600",
          text: "En Cours"
        };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950/20 py-12">
      <Helmet>
        <title>Formation Académique - Aicha BARAHOU</title>
        <meta name="description" content="Parcours académique et formations en éducation et technologies émergentes" />
      </Helmet>

      {/* Header Section */}
      <div className="text-center space-y-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">PARCOURS ACADÉMIQUE</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Formation
          </h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Mon parcours d'excellence en <span className="font-semibold text-blue-600 dark:text-blue-400">éducation</span> et{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">technologies émergentes</span>
          </motion.p>
        </motion.div>
      </div>

      {/* Education Timeline */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid gap-8">
          {education.map((edu, index) => {
            const statusConfig = getStatusConfig(edu.status);
            
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <Card className="border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl hover:shadow-3xl transition-all duration-500 overflow-hidden relative">
                  {/* Background Gradient Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${statusConfig.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Status Indicator */}
                  <div className="absolute top-6 right-6 z-10">
                    <Badge className={`${statusConfig.badge} text-white px-4 py-2 rounded-full shadow-lg border-0`}>
                      <span className="flex items-center gap-2 font-semibold">
                        <span className="text-sm">{statusConfig.icon}</span>
                        {statusConfig.text}
                      </span>
                    </Badge>
                  </div>

                  {/* Timeline Connector */}
                  {index !== education.length - 1 && (
                    <div className="absolute bottom-0 left-12 w-1 h-8 bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700"></div>
                  )}

                  <CardHeader className="pb-6 relative z-10">
                    <div className="flex items-start gap-6">
                      {/* Timeline Dot */}
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 bg-gradient-to-br ${statusConfig.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-2xl text-white">{statusConfig.icon}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div className="space-y-3">
                          <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                            {edu.degree}
                          </CardTitle>
                          
                          <div className="flex items-center gap-3 text-lg font-semibold text-blue-600 dark:text-blue-400">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            {edu.school}
                          </div>

                          {edu.field && (
                            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed bg-white/50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                              {edu.field}
                            </p>
                          )}
                        </div>

                        {/* Date and Location */}
                        <div className="flex flex-wrap items-center gap-6 text-sm">
                          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                            <span className="text-lg">📅</span>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">
                              {edu.start} - {edu.end}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                            <span className="text-lg">📍</span>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">
                              {edu.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-6">
                    {/* Description */}
                    {edu.description && (
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-5 rounded-2xl border border-blue-200 dark:border-blue-700">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                          {edu.description}
                        </p>
                      </div>
                    )}

                    {/* Highlights */}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="font-bold text-lg text-gray-800 dark:text-white flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          Points Forts
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {edu.highlights.map((highlight, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + idx * 0.1 }}
                              className="flex items-center gap-3 bg-white/50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-200 dark:border-gray-600 group/highlight hover:bg-white dark:hover:bg-gray-700 transition-all duration-300"
                            >
                              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-800 dark:to-blue-800 rounded-3xl p-12 text-white shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center space-y-8">
            <h3 className="text-4xl font-black">Synthèse du Parcours</h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center space-y-3">
                <div className="text-5xl font-black text-white">4</div>
                <div className="text-blue-200 font-semibold">Formations</div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="text-5xl font-black text-green-400">3</div>
                <div className="text-green-200 font-semibold">Diplômées</div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="text-5xl font-black text-purple-400">1</div>
                <div className="text-purple-200 font-semibold">En Cours</div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="text-5xl font-black text-yellow-400">4</div>
                <div className="text-yellow-200 font-semibold">Années</div>
              </div>
            </div>

            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Un parcours continu d'excellence académique, alliant pédagogie et innovation technologique
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}