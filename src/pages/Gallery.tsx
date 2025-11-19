import { galleryImages } from '../data/gallery'
import { Calendar, MapPin, Image as ImageIcon, ZoomIn, ExternalLink } from 'lucide-react'

export default function Gallery() {
    return (
        <div className="section bg-gradient-to-br from-pink-50/30 to-rose-50/30">
            <div className="page-container">
                {/* En-tête Galerie */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-pink-200 shadow-lg mb-6">
                        <div className="p-3 bg-pink-100 rounded-xl">
                            <ImageIcon className="w-8 h-8 text-pink-600" />
                        </div>
                        <div>
                            <h2 className="section-title bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                                Galerie Photos
                            </h2>
                            <p className="text-slate-600 text-lg mt-2">
                                Moments marquants de mon parcours académique et professionnel
                            </p>
                        </div>
                    </div>
                </div>

                {galleryImages.length > 0 ? (
                    <div className="grid-clean md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6">
                        {galleryImages.map((image) => (
                            <div key={image.id} className="group relative">
                                {/* Carte Galerie */}
                                <div className="card bg-white border-pink-200 hover:border-pink-300 shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden h-full flex flex-col">
                                    {/* Image Container */}
                                    <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                                        {image.image ? (
                                            <>
                                                <img
                                                    src={image.image}
                                                    alt={image.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                {/* Overlay au hover */}
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                                                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex gap-3">
                                                        <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform">
                                                            <ZoomIn className="w-5 h-5 text-slate-700" />
                                                        </button>
                                                        <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform">
                                                            <ExternalLink className="w-5 h-5 text-slate-700" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="text-center text-slate-400">
                                                <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                                <p className="text-sm">Image à venir</p>
                                            </div>
                                        )}

                                        {/* Badge Catégorie */}
                                        <div className="absolute top-4 left-4">
                                            <span className="badge bg-white/90 backdrop-blur-sm text-slate-700 border-slate-300 shadow-md">
                                                {image.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-pink-600 transition-colors">
                                            {image.title}
                                        </h3>
                                        <p className="text-slate-600 mb-4 leading-relaxed flex-1">
                                            {image.description}
                                        </p>

                                        <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                                            {image.date && (
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{image.date}</span>
                                                </div>
                                            )}
                                            {image.location && (
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{image.location}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="max-w-md mx-auto space-y-6">
                            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto shadow-lg">
                                <ImageIcon className="w-10 h-10 text-slate-400" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold text-slate-700">Galerie en préparation</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Les photos de mon parcours académique et professionnel seront bientôt disponibles.
                                </p>
                            </div>
                            <div className="pt-4">
                                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                                    <Calendar className="w-4 h-4" />
                                    Bientôt disponible
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Statistiques Galerie */}
                {galleryImages.length > 0 && (
                    <div className="text-center max-w-4xl mx-auto mt-16">
                        <div className="card bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 shadow-lg p-8">
                            <div className="flex items-center justify-center gap-6 mb-6">
                                <div className="p-4 bg-white rounded-2xl shadow-lg">
                                    <ImageIcon className="w-12 h-12 text-pink-600" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                                        {galleryImages.length} Moments Partagés
                                    </h3>
                                    <p className="text-slate-600 text-lg mt-2">
                                        Captures de mon parcours éducatif
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-pink-200">
                                {[
                                    { number: "Académique", label: "Formations", color: "text-pink-600" },
                                    { number: "Professionnel", label: "Expériences", color: "text-rose-600" },
                                    { number: "Personnel", label: "Développement", color: "text-orange-600" },
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className={`text-xl font-bold ${stat.color}`}>{stat.number}</div>
                                        <div className="text-slate-600 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}