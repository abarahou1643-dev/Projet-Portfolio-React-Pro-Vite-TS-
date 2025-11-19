import { courses } from '../data/courses'
import { Code, Globe, Server, Smartphone, Layout, CheckCircle, Zap, Target } from 'lucide-react'

const categoryIcons = {
    "Programmation Java": Code,
    "Développement Web et Frameworks": Globe,
    "DevOps et Architecture": Server,
    "Développement Mobile et Multiplateforme": Smartphone,
    "Modélisation et Conception": Layout,
}

export default function Courses() {
    const totalSkills = courses.reduce((acc, cat) => acc + cat.items.length, 0)

    return (
        <div className="section bg-gradient-to-br from-emerald-50/30 to-cyan-50/30">
            <div className="page-container">
                {/* En-tête Compétences */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-emerald-200 shadow-lg mb-6">
                        <div className="p-3 bg-emerald-100 rounded-xl">
                            <Zap className="w-8 h-8 text-emerald-600" />
                        </div>
                        <div>
                            <h2 className="section-title bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                                Compétences Techniques
                            </h2>
                            <p className="text-slate-600 text-lg mt-2">
                                Domaines de maîtrise et technologies apprises
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grille des Compétences */}
                <div className="grid-clean max-w-6xl mx-auto gap-8">
                    {courses.map((category, index) => {
                        const IconComponent = categoryIcons[category.category as keyof typeof categoryIcons] || Code
                        return (
                            <div key={index} className="card bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200 shadow-soft hover:shadow-medium transition-all duration-300 group">
                                {/* En-tête Catégorie */}
                                <div className="flex items-start gap-6 mb-8 pb-6 border-b border-emerald-100">
                                    <div className="p-4 bg-emerald-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-8 h-8 text-emerald-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{category.category}</h3>
                                        <div className="flex flex-wrap items-center gap-4">
                                            <span className="badge bg-emerald-100 text-emerald-800 border-emerald-200">
                                                {category.items.length} compétences
                                            </span>
                                            <div className="flex items-center gap-2 text-emerald-600 font-medium">
                                                <Target className="w-4 h-4" />
                                                Maîtrise avancée
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Liste des Compétences */}
                                <div className="grid-clean gap-3">
                                    {category.items.map((item, itemIndex) => (
                                        <div
                                            key={itemIndex}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 group/item"
                                        >
                                            <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-4 h-4 text-emerald-600" />
                                            </div>
                                            <p className="text-slate-700 leading-relaxed flex-1 font-medium">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Résumé des Compétences */}
                <div className="text-center max-w-4xl mx-auto mt-16">
                    <div className="card bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200 shadow-lg p-8">
                        <div className="flex items-center justify-center gap-6 mb-6">
                            <div className="p-4 bg-white rounded-2xl shadow-lg">
                                <Zap className="w-12 h-12 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                                    Expertise Polyvalente
                                </h3>
                                <p className="text-slate-600 text-lg mt-2">
                                    {totalSkills} compétences techniques maîtrisées
                                </p>
                            </div>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Avec une expertise couvrant le développement full-stack, mobile, DevOps et la conception,
                            je dispose d'une vision complète du cycle de développement logiciel et des technologies modernes.
                        </p>
                        <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-emerald-200">
                            {[
                                { number: "Full-Stack", label: "Développement", color: "text-emerald-600" },
                                { number: "Mobile", label: "Applications", color: "text-cyan-600" },
                                { number: "DevOps", label: "Architecture", color: "text-blue-600" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                                    <div className="text-slate-600 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}