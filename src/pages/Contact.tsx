import { profile } from "../data/profile";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/10 py-12">
      <Helmet>
        <title>Contact - Aicha BARAHOU</title>
        <meta name="description" content="Contactez-moi pour des opportunités d'enseignement ou de collaboration" />
      </Helmet>

      <div className="text-center space-y-6 mb-16">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contactez-moi
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Discutons de vos projets et opportunités
        </motion.p>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.4 }}
        ></motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Informations de contact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-0 shadow-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl hover:shadow-3xl transition-all duration-500 overflow-hidden relative">
            {/* Effet de fond décoratif */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
            
            <CardHeader className="pb-8 text-center relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl"
              >
                <span className="text-3xl text-white">👋</span>
              </motion.div>
              <CardTitle className="text-4xl font-bold text-gray-800 dark:text-gray-100">
                Restons en contact
              </CardTitle>
              <p className="text-lg text-muted-foreground mt-3">
                Je suis toujours ravie d'échanger sur de nouveaux projets
              </p>
            </CardHeader>
            
            <CardContent className="space-y-8 relative z-10">
              {/* Grille des coordonnées */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 text-center border border-blue-200/50 dark:border-blue-700/30 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <span className="text-2xl text-white">📧</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">a.barahou1643@uca.ac.ma</p>
                  </div>
                </motion.div>

                {/* Téléphone */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 text-center border border-green-200/50 dark:border-green-700/30 hover:border-green-300 dark:hover:border-green-500 transition-all duration-300 hover:shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <span className="text-2xl text-white">📱</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">Téléphone</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">06 06 52 04 74</p>
                  </div>
                </motion.div>

                {/* Localisation */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 text-center border border-purple-200/50 dark:border-purple-700/30 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <span className="text-2xl text-white">📍</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">Localisation</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{profile.location}</p>
                  </div>
                </motion.div>
              </div>

              {/* Réseaux sociaux */}
              <div className="pt-8 border-t border-gray-200/60 dark:border-gray-700/60">
                <motion.h4 
                  className="font-bold text-2xl text-gray-800 dark:text-gray-200 mb-6 text-center flex items-center justify-center gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-3xl">🌐</span>
                  Retrouvez-moi en ligne
                </motion.h4>
                <div className="flex justify-center gap-4 flex-wrap">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="px-8 py-4 text-base border-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-xl rounded-2xl group"
                    >
                      <a href="https://github.com/abarahou1643-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                        <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                          💻
                        </span>
                        <span className="font-semibold">GitHub</span>
                      </a>
                    </Button>
                  </motion.div>
                  
                  {profile.socials.filter(social => social.label !== "GitHub").map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="px-8 py-4 text-base border-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-xl rounded-2xl group"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                          <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                            {social.label === "LinkedIn" && "💼"}
                          </span>
                          <span className="font-semibold">{social.label}</span>
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Section disponibilité */}
      <motion.div 
        className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl p-10 border border-blue-200/30 dark:border-blue-700/30 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="text-center">
          <motion.h3 
            className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            >
              ⏰
            </motion.span>
            Mes Disponibilités
          </motion.h3>
          <motion.p 
            className="text-xl text-muted-foreground mb-6 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {profile.availability}
          </motion.p>
          <motion.div 
            className="flex justify-center gap-6 text-base text-muted-foreground flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full border border-green-200 dark:border-green-700">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              Disponible pour l'enseignement
            </span>
            <span className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700">
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
              Ouvert aux collaborations
            </span>
            <span className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-700">
              <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></span>
              Mentorat disponible
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <p className="text-lg text-muted-foreground italic">
          N'hésitez pas à me contacter - Je réponds généralement dans les 24 heures ⚡
        </p>
      </motion.div>
    </div>
  );
}