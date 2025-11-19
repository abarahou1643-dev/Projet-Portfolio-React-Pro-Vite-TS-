import { Rocket, ExternalLink, Github, Calendar, Building, Code } from 'lucide-react'

export default function Projects() {
    return (
        <div className="section bg-gradient-to-br from-indigo-50/30 to-purple-50/30">
            <div className="page-container">
                {/* En-tête Projets */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-indigo-200 shadow-lg mb-6">
                        <div className="p-3 bg-indigo-100 rounded-xl">
                            <Rocket className="w-8 h-8 text-indigo-600" />
                        </div>
                        <div>
                            <h2 className="section-title bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Mes Projets
                            </h2>
                            <p className="text-slate-600 text-lg mt-2">
                                Réalisations en développement et applications
                            </p>
                        </div>
                    </div>
                </div>

                {/* Message d'information */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="card bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <Code className="w-6 h-6 text-blue-600" />
                            <h3 className="text-xl font-bold text-blue-700">Projets en préparation</h3>
                        </div>
                        <p className="text-slate-600">
                            Je travaille actuellement sur de nouveaux projets. Revenez bientôt pour découvrir mes réalisations complètes.
                        </p>
                    </div>
                </div>

                {/* Un seul projet vide/placeholder */}
                <div className="max-w-4xl mx-auto">
                    <div className="card bg-gradient-to-br from-white to-indigo-50/30 border-indigo-200 shadow-soft hover:shadow-medium transition-all duration-500 group">
                        {/* En-tête du projet */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                            <div className="space-y-4 flex-1">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-indigo-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        <Building className="w-7 h-7 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                                            Projet en Cours de Développement
                                        </h3>
                                        <p className="text-lg font-semibold text-indigo-600 mt-2 flex items-center gap-2">
                                            <Calendar className="w-5 h-5" />
                                            En développement - Décembre 2024
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-6 mb-6">
                            <p className="text-slate-600 leading-relaxed text-lg italic">
                                Ce projet est actuellement en phase de développement. Les détails techniques et fonctionnels seront bientôt disponibles.
                            </p>

                            {/* Technologies prévues */}
                            <div>
                                <h4 className="font-semibold text-slate-900 mb-3">Technologies envisagées :</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'].map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full border border-slate-300 font-medium text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Statut du projet */}
                        <div className="bg-slate-50 rounded-xl p-4 mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-slate-700">Statut du projet</span>
                                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                    En développement
                                </span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div
                                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: '45%' }}
                                ></div>
                            </div>
                            <div className="text-sm text-slate-500 mt-2 text-center">
                                45% complété
                            </div>
                        </div>

                        {/* Actions désactivées */}
                        <div className="flex gap-3 w-full pt-6 border-t border-indigo-100">
                            <button
                                disabled
                                className="btn btn-primary flex-1 opacity-50 cursor-not-allowed"
                            >
                                <ExternalLink className="w-5 h-5" />
                                Projet en cours
                            </button>
                            <button
                                disabled
                                className="btn btn-secondary flex-1 opacity-50 cursor-not-allowed"
                            >
                                <Github className="w-5 h-5" />
                                Code privé
                            </button>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center max-w-2xl mx-auto mt-12">
                    <div className="card bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            Vous avez un projet ?
                        </h3>
                        <p className="text-slate-600 mb-6">
                            Discutons de vos idées et voyons comment je peux vous aider à les concrétiser.
                        </p>
                        <a
                            href="/contact"
                            className="btn btn-primary inline-flex items-center gap-3"
                        >
                            <Rocket className="w-5 h-5" />
                            Me contacter pour un projet
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}