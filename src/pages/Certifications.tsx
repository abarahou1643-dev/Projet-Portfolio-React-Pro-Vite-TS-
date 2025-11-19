import { certifications } from '../data/certifications'
import { Award, Calendar, CheckCircle, ExternalLink, Star } from 'lucide-react'

function formatDate(dateString: string): string {
    const [year, month, day] = dateString.split("-")
    return `${day}/${month}/${year}`
}

export default function Certifications() {
    return (
        <div className="section bg-gradient-to-br from-blue-50/30 to-indigo-50/30">
            <div className="page-container">
                {/* En-tête Certifications */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-blue-200 shadow-lg mb-6">
                        <div className="p-3 bg-blue-100 rounded-xl">
                            <Award className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="section-title bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Mes Certifications
                            </h2>
                            <p className="text-slate-600 text-lg mt-2">
                                Validations de mes compétences techniques
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grille des Certifications */}
                <div className="grid-clean md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {certifications.map((cert, index) => (
                        <div key={index} className="group relative">
                            {/* Carte de Certification */}
                            <div className="card bg-white border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                                {/* Bandeau supérieur avec gradient */}
                                <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-xl"></div>

                                {/* Badge Status */}
                                <div className="absolute top-4 right-4">
                                    <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                        <CheckCircle className="w-4 h-4" />
                                        Validé
                                    </div>
                                </div>

                                <div className="p-6 flex-1">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 bg-blue-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                            <Award className="w-7 h-7 text-blue-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                                                {cert.title}
                                            </h3>
                                            <p className="flex items-center gap-2 text-slate-500 text-sm">
                                                <Calendar className="w-4 h-4" />
                                                <span>Obtenu le {formatDate(cert.issueDate)}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Émetteur */}
                                        <div className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200">
                                            <Star className="w-4 h-4 text-yellow-500" />
                                            <span className="font-semibold text-slate-700">{cert.issuer}</span>
                                        </div>

                                        {/* Compétences */}
                                        {cert.skills && cert.skills.length > 0 && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    Compétences validées
                                                </h4>
                                                <ul className="space-y-2">
                                                    {cert.skills.slice(0, 4).map((skill, i) => (
                                                        <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                            {skill}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Tags */}
                                        {cert.tags && cert.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {cert.tags.map((tag) => (
                                                    <span key={tag} className="bg-blue-100 text-blue-700 text-xs px-3 py-1.5 rounded-full border border-blue-200 font-medium">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Bouton d'action */}
                                <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-3 font-semibold group">
                                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        Voir le certificat
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Résumé Certifications */}
                <div className="text-center max-w-4xl mx-auto mt-16">
                    <div className="card bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-xl p-8">
                        <div className="flex items-center justify-center gap-6 mb-6">
                            <div className="p-4 bg-white rounded-2xl shadow-lg">
                                <Award className="w-12 h-12 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    {certifications.length} Certifications Obtenues
                                </h3>
                                <p className="text-slate-600 text-lg mt-2">
                                    Validation continue de mon expertise technique
                                </p>
                            </div>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Ces certifications attestent de ma maîtrise des technologies modernes
                            et de mon engagement continu dans l'apprentissage et le développement professionnel.
                            Chaque validation représente une étape dans mon parcours d'excellence technique.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}