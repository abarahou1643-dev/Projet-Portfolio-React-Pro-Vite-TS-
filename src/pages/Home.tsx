import { profile } from '../data/profile'
import { Sparkles, Code, BookOpen, Users } from 'lucide-react'

export default function Home() {
    return (
        <div className="section">
            <div className="page-container">
                {/* Hero Section */}
                <div className="grid-clean lg:grid-cols-2 items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="space-y-8">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl px-6 py-3 shadow-lg">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-semibold text-blue-700">Disponible pour l'enseignement</span>
                        </div>

                        {/* Main Title */}
                        <div className="space-y-4">
                            <h1 className="hero-title">
                                Bonjour, je suis{' '}
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                                    Aicha BARAHOU
                                </span>
                            </h1>
                            <p className="text-2xl lg:text-3xl text-slate-600 font-light">
                                Enseignante qualifiée d'
                                <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">informatique</span>
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-lead max-w-2xl text-slate-600 leading-relaxed">
                            {profile.about}
                        </p>

                        {/* Skills */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Sparkles className="w-5 h-5 text-yellow-500" />
                                <h3 className="text-lg font-semibold text-slate-700">Expertises principales</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {profile.skills.map((skill) => (
                                    <span key={skill} className="badge badge-primary hover:scale-105 transition-transform cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex-clean flex-wrap">
                            <a href="/projects" className="btn btn-primary group">
                                <Code className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Voir mes projets
                            </a>
                            <a href="/contact" className="btn btn-secondary group">
                                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Me contacter
                            </a>
                        </div>
                    </div>

                    {/* Image/Illustration */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="card bg-gradient-to-br from-white to-blue-50/50 border-blue-200 shadow-2xl p-8 max-w-md text-center relative overflow-hidden">
                                {/* Background Decoration */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full translate-y-12 -translate-x-12"></div>

                                <div className="relative z-10">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mx-auto flex items-center justify-center border-4 border-white shadow-2xl mb-6">
                                        <BookOpen className="w-12 h-12 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Aicha BARAHOU</h3>
                                    <p className="text-slate-600 mb-4">Enseignante en Informatique</p>
                                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        Master MSSIE en cours
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid-clean grid-cols-2 md:grid-cols-4 mt-20">
                    {[
                        { number: "3+", label: "Années d'études", icon: "📚", color: "from-blue-500 to-cyan-500" },
                        { number: "2", label: "Diplômes obtenus", icon: "🎓", color: "from-purple-500 to-pink-500" },
                        { number: "10+", label: "Compétences techniques", icon: "⚡", color: "from-green-500 to-emerald-500" },
                        { number: "100%", label: "Engagement", icon: "❤️", color: "from-orange-500 to-red-500" },
                    ].map((stat, index) => (
                        <div key={index} className="card text-center hover:scale-105 transition-transform duration-300 group bg-white/80 backdrop-blur-sm border border-slate-200/60">
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                            <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
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