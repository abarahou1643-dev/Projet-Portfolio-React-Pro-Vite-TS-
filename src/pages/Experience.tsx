import { experiences } from '../data/experience'
import { Briefcase, Calendar, BookOpen, Users } from 'lucide-react'

export default function Experience() {
    return (
        <div className="section bg-gradient-to-br from-blue-50/50 to-purple-50/50">
            <div className="page-container">
                {/* En-tête Expérience */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-purple-50 px-6 py-3 rounded-2xl border border-purple-200 mb-4">
                        <Briefcase className="w-6 h-6 text-purple-600" />
                        <h2 className="section-title bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Expériences Professionnelles
                        </h2>
                    </div>
                    <p className="text-lead max-w-2xl mx-auto">
                        Mon parcours d'enseignement et mes stages de formation
                    </p>
                </div>

                {/* Expérience Principale */}
                <div className="grid-clean max-w-6xl mx-auto">
                    <div className="card bg-gradient-to-r from-white to-purple-50/30 border-purple-200 hover:shadow-lg transition-all">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Users className="w-6 h-6 text-purple-600" />
                                    <h3 className="text-2xl font-bold text-gray-900">Enseignante d'informatique</h3>
                                </div>
                                <p className="text-lg font-semibold text-purple-600">
                                    Collège Atlas – Zmrane Charquia, Oulad Hajjaj
                                </p>
                                <div className="badge badge-primary">
                                    Tronc Commun (Lycée) & 2ème année Collégiale
                                </div>
                            </div>
                            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <Calendar className="w-4 h-4" />
                                <span>Depuis 2024</span>
                            </div>
                        </div>

                        {/* Cours enseignés */}
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <BookOpen className="w-5 h-5 text-purple-600" />
                                <h4 className="text-lg font-semibold text-gray-900">Cours enseignés</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {experiences[0].courses?.map((course) => (
                                    <span key={course} className="badge bg-purple-100 text-purple-800 border-purple-200">
                    {course}
                  </span>
                                ))}
                            </div>
                        </div>

                        {/* Activités principales */}
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Activités principales</h4>
                            <ul className="space-y-2">
                                {experiences[0].description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-purple-500 mt-1.5 text-lg">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Stages */}
                    <div className="grid-clean md:grid-cols-2">
                        {experiences.slice(1).map((exp, index) => (
                            <div key={index} className="card hover:border-purple-200 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-purple-100 rounded-lg">
                                        <Briefcase className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                                        <p className="text-md font-semibold text-purple-600">{exp.institution}</p>
                                    </div>
                                </div>
                                <div className="badge bg-gray-100 text-gray-700 border-gray-300 mb-4">
                                    {exp.period}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">Activités principales</h4>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                                <span className="text-purple-500 mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}