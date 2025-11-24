import { Outlet, NavLink, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-dvh bg-background text-foreground flex flex-col">
        <header className={`sticky top-0 border-b transition-all duration-300 z-50 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-lg border-gray-200/20" 
            : "bg-background/80 backdrop-blur-sm border-transparent"
        }`}>
          <nav className="mx-auto max-w-7xl flex items-center justify-between p-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <NavLink 
                to="/" 
                className="font-bold text-2xl hover:text-primary transition-colors bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
              >
                Aicha BARAHOU
              </NavLink>
            </motion.div>
            
            <div className="flex items-center gap-8">
              {[
                { path: "/projects", label: "Projets", emoji: "💼" },
                { path: "/experience", label: "Expériences", emoji: "🚀" },
                { path: "/education", label: "Formations", emoji: "🎓" },
                { path: "/certifications", label: "Certifications", emoji: "🏆" },
                { path: "/gallery", label: "Galerie", emoji: "📸" },
                { path: "/contact", label: "Contact", emoji: "📞" }
              ].map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink 
                    to={item.path} 
                    className={({ isActive }) => 
                      `flex items-center gap-2 hover:text-primary transition-all duration-300 px-3 py-2 rounded-lg ${
                        isActive 
                          ? "text-primary font-semibold bg-primary/10 border-b-2 border-primary" 
                          : "text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`
                    }
                  >
                    <span className="text-lg">{item.emoji}</span>
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </nav>
        </header>
        
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-gradient-to-r from-background to-gray-50/50 dark:to-gray-900/50 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Aicha BARAHOU
                </h3>
                <p className="text-muted-foreground">
                  Enseignante passionnée d'informatique, spécialisée dans les technologies éducatives et l'innovation pédagogique.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Navigation</h4>
                <div className="space-y-2">
                  {["Projets", "Expériences", "Formations", "Certifications", "Galerie", "Contact"].map((item) => (
                    <a 
                      key={item}
                      href={`/${item.toLowerCase()}`} 
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Connectons-nous</h4>
                <div className="flex gap-4">
                  {[
                    { name: "LinkedIn", url: "https://linkedin.com", emoji: "💼" },
                    { name: "GitHub", url: "https://github.com", emoji: "💻" },
                    { name: "Email", url: "mailto:contact@example.com", emoji: "📧" }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                      title={social.name}
                    >
                      {social.emoji}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} • Aicha BARAHOU • Enseignante en Informatique
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Développé avec ❤️ en React, TypeScript et Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}