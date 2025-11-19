import { education } from '../data/education'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'

export default function Education() {
    return (
        <div className="section bg-gradient-to-br from-violet-50/30 to-purple-50/30">
            <div className="page-container">
                {/* En-tête Éducation */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-violet-200 shadow-lg mb-6">
                        <div className="p-3 bg-violet-100 rounded-xl">
                            <GraduationCap className="w-8 h-8 text-violet-600" />
                        </div>
                        <div>
                            <h2 className="section-title bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                                Parcours Académique
                            </h2>
                            <p className="text-slate-600 text-lg mt-2">
                                Mon parcours éducatif, mes diplômes et mes formations
                            </p>
                        </div>
                    </div>
                </div>

                {/* Timeline Éducation */}
                <div className="grid-clean max-w-4xl mx-auto">
                    {education.map((edu, index) => (
                        <div key={index} className="relative">
                            {/* Ligne de timeline */}
                            {index !== education.length - 1 && (
                                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-violet-300 to-purple-300 z-0"></div>
                            )}

                            {/* Carte Éducation */}
                            <div className="card bg-gradient-to-br from-white to-violet-50/30 border-violet-200 shadow-soft hover:shadow-medium transition-all duration-300 relative z-10 ml-8">
                                {/* Point de timeline */}
                                <div className="absolute -left-8 top-8 w-4 h-4 bg-violet-500 rounded-full border-4 border-white shadow-lg z-20"></div>

                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                    <div className="space-y-4 flex-1">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-violet-100 rounded-xl">
                                                <BookOpen className="w-6 h-6 text-violet-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                                                <p className="text-lg font-semibold text-violet-600 mb-3">{edu.institution}</p>
                                                <p className="text-slate-600 leading-relaxed">{edu.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
                                        <div className="flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-xl font-medium">
                                            <Calendar className="w-4 h-4" />
                                            <span>{edu.period}</span>
                                        </div>
                                        {edu.location && (
                                            <div className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-xl font-medium">
                                                <MapPin className="w-4 h-4" />
                                                <span>{edu.location}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Badge spécial pour le diplôme actuel */}
                                {index === 0 && (
                                    <div className="absolute -top-3 -right-3">
                                        <div className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                            <Award className="w-4 h-4" />
                                            En cours
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Statistiques Éducation */}
                <div className="grid-clean grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto mt-16">
                    {[
                        {
                            number: education.length,
                            label: "Diplômes & Formations",
                            icon: GraduationCap,
                            color: "from-violet-500 to-purple-500"
                        },
                        {
                            number: "2020",
                            label: "Début du parcours",
                            icon: Calendar,
                            color: "from-blue-500 to-cyan-500"
                        },
                        {
                            number: "Master",
                            label: "Niveau actuel",
                            icon: Award,
                            color: "from-emerald-500 to-green-500"
                        },
                        {
                            number: "100%",
                            label: "Taux de réussite",
                            icon: BookOpen,
                            color: "from-orange-500 to-red-500"
                        },
                    ].map((stat, index) => (
                        <div key={index} className="card text-center hover:scale-105 transition-transform duration-300 bg-white/80 backdrop-blur-sm border border-slate-200/60">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} w-12 h-12 mx-auto mb-3 flex items-center justify-center`}>
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                                {stat.number}
                            </div>
                            <div className="text-slate-600 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}