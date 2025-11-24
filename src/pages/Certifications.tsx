import { certifications } from "../data/certifications";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useState } from "react";

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Chemins des images de certificats
  const certificateImages: { [key: string]: string } = {
    "1": "/certificats/java-certificat.jpg",
    "2": "/certificats/hibernate-certificat.jpg", 
    "3": "/certificats/react-certificat.jpg"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <Helmet>
        <title>Certifications - Aicha BARAHOU</title>
        <meta name="description" content="Validations de mes compétences techniques" />
      </Helmet>

      {/* En-tête */}
      <div className="text-center space-y-6 mb-12">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Mes Certifications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Validations de mes compétences techniques
          </p>
        </div>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* Grille des certifications */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {certifications.map((cert) => (
          <Card 
            key={cert.id} 
            className="group hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:scale-105"
          >
            <CardHeader className="pb-4 space-y-4">
              {/* En-tête de la carte */}
              <div className="flex items-center justify-between">
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-0 px-3 py-1">
                  ✅ Validé
                </Badge>
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-lg">🏆</span>
                </div>
              </div>

              {/* Titre et informations */}
              <div className="space-y-3">
                <CardTitle className="text-xl text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </CardTitle>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2">
                    <span>🏢</span>
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <span>📅</span>
                    Obtenu le {formatDate(cert.issueDate)}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Compétences */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Compétences validées :
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bouton Voir le certificat */}
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 group/btn"
                onClick={() => setSelectedImage(certificateImages[cert.id])}
              >
                <span className="flex items-center gap-2">
                  <span className="group-hover/btn:scale-110 transition-transform">📄</span>
                  Voir le certificat
                </span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistiques */}
      <div className="max-w-4xl mx-auto mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{certifications.length}</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Certifications</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {certifications.filter(c => c.status === 'valid').length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">En validité</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {new Set(certifications.flatMap(c => c.skills)).size}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Compétences certifiées</div>
          </div>
        </div>
      </div>

      {/* Modal pour afficher le certificat */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête du modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Certificat</h3>
              <button 
                onClick={() => setSelectedImage(null)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                ×
              </button>
            </div>
            
            {/* Image du certificat */}
            <div className="p-6 max-h-[70vh] overflow-auto">
              <img 
                src={selectedImage} 
                alt="Certificat"
                className="max-w-full h-auto mx-auto rounded-lg shadow-md"
              />
            </div>
            
            {/* Pied du modal */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-center">
              <Button 
                variant="outline" 
                onClick={() => setSelectedImage(null)}
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Fermer
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}