import { profile } from "../data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950/10 relative overflow-hidden">
      {/* Background Elements Animés */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Grid Pattern Subtile */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      <Helmet>
        <title>{profile.name} - Enseignante en Informatique</title>
        <meta name="description" content={profile.about} />
      </Helmet>

      <div className="grid lg:grid-cols-2 gap-20 items-center w-full max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Colonne gauche - Contenu Principal */}
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* En-tête avec Badge Animé */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-4 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
                  {profile.availability}
                </span>
              </div>
              <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Prête pour de nouveaux défis
              </div>
            </motion.div>

            {/* Titre Principal avec Animation de Texte */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <h1 className="text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                  <span className="block text-gray-800 dark:text-white">Bonjour,</span>
                  <span className="block bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                    Je suis {profile.name.split(' ')[0]}
                  </span>
                </h1>
              </motion.div>
              
              <motion.h2 
                className="text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {profile.role}
              </motion.h2>
            </div>
          </div>

          {/* Description avec Effet de Surbrillance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative group"
          >
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transform group-hover:scale-110 transition-transform duration-500" />
            <div className="pl-8">
              <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-medium bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                {profile.about}
              </p>
            </div>
          </motion.div>

          {/* Compétences en Grid Interactive */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <h3 className="font-bold text-2xl text-gray-800 dark:text-white tracking-wide">
                Mes Expertises
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {profile.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="group"
                >
                  <Badge 
                    variant="secondary"
                    className="w-full px-4 py-3 text-sm font-semibold bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-300/50 dark:hover:border-blue-500/30 transition-all duration-500 shadow-lg hover:shadow-xl rounded-xl cursor-default text-center"
                  >
                    <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {skill}
                    </span>
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Actions avec Effets Avancés */}
          <motion.div 
            className="flex flex-wrap gap-6 pt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <Button 
              size="lg" 
              className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 hover:from-blue-600 hover:to-purple-600 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-105 rounded-2xl border-0 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Link to="/projects" className="flex items-center gap-4 relative z-10">
                <span className="text-xl transform group-hover:scale-110 transition-transform duration-300">🚀</span>
                <span>Découvrir mes Projets</span>
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 py-6 text-lg font-semibold border-2 border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white hover:dark:bg-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-2xl group"
            >
              <Link to="/contact" className="flex items-center gap-4">
                <span className="text-xl transform group-hover:scale-110 transition-transform duration-300">💫</span>
                <span>Commencer un Projet</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Colonne droite - Photo Artistique */}
        <motion.div 
          className="flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Container Photo Principal */}
            <motion.div 
              className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-3xl border-8 border-white/95 dark:border-gray-800/95 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/profile.jpg" 
                alt={`${profile.name} - ${profile.role}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Gradient Dynamique */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
              
              {/* Effet de lumière */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 mix-blend-overlay" />
            </motion.div>

            {/* Badge Professionnel Flottant */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-2xl shadow-2xl border-2 border-white/20 backdrop-blur-sm"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, rotate: 2, y: -5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-sm">👩‍🏫</span>
                </div>
                <span className="font-bold text-lg tracking-wide">Enseignante Passionnée</span>
              </div>
            </motion.div>

            {/* Éléments Décoratifs Avancés */}
            {[
              { position: "-top-8 -left-8", color: "from-yellow-400/20 to-amber-500/20", size: "w-20 h-20", delay: 0 },
              { position: "top-1/4 -right-10", color: "from-green-400/20 to-emerald-500/20", size: "w-16 h-16", delay: 0.5 },
              { position: "bottom-1/3 -left-12", color: "from-purple-400/20 to-pink-500/20", size: "w-14 h-14", delay: 1 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.position} ${item.size} bg-gradient-to-r ${item.color} rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg`}
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.2 + item.delay, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 45 }}
              />
            ))}

            {/* Carte Stats Flottante */}
            <motion.div 
              className="absolute -top-6 right-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-200/60 dark:border-gray-700/60"
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-center space-y-2">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">4+</div>
                <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 tracking-wide">ANNÉES D'ÉTUDES</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Indicateur de Scroll Élégant */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide">EXPLORER MON UNIVERS</span>
          <motion.div 
            className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center relative overflow-hidden"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}