import { profile } from '../data/profile'
import { Mail, MapPin, Phone, Send, MessageCircle, Clock, Shield } from 'lucide-react'

export default function Contact() {
    return (
        <div className="section bg-gradient-to-br from-cyan-50/30 to-blue-50/30">
            <div className="page-container">
                {/* En-tête Contact */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-cyan-200 shadow-lg mb-6">
                        <div className="p-3 bg-cyan-100 rounded-xl">
                            <MessageCircle className="w-8 h-8 text-cyan-600" />
                        </div>
                        <div>
                            <h2 className="section-title bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                Contactez-moi
                            </h2>
                            <p className="text-slate-600 text-lg mt-2">
                                Discutons de vos projets et opportunités
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid-clean lg:grid-cols-2 max-w-6xl mx-auto gap-8">
                    {/* Informations Contact */}
                    <div className="card bg-gradient-to-br from-white to-cyan-50/50 border-cyan-200 shadow-soft hover:shadow-medium transition-all duration-300">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                                    Coordonnées
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    N'hésitez pas à me contacter pour toute question concernant l'enseignement,
                                    les projets collaboratifs ou les opportunités professionnelles.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        icon: Mail,
                                        label: "Email",
                                        value: profile.email,
                                        href: `mailto:${profile.email}`,
                                        color: "bg-cyan-100 text-cyan-600",
                                        description: "Réponse sous 24h"
                                    },
                                    {
                                        icon: MapPin,
                                        label: "Localisation",
                                        value: profile.location,
                                        color: "bg-green-100 text-green-600",
                                        description: "Maroc"
                                    },
                                    {
                                        icon: Phone,
                                        label: "Téléphone",
                                        value: "Disponible sur demande",
                                        color: "bg-blue-100 text-blue-600",
                                        description: "Contact professionnel"
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300 group">
                                        <div className={`p-3 rounded-xl ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-slate-900">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-cyan-600 hover:text-cyan-700 transition-colors font-medium">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-slate-700 font-medium">{item.value}</p>
                                            )}
                                            <p className="text-slate-500 text-sm mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Garanties */}
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <Clock className="w-4 h-4 text-green-500" />
                                    <span>Réponse rapide</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <Shield className="w-4 h-4 text-blue-500" />
                                    <span>Échange professionnel</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire Contact */}
                    <div className="card bg-gradient-to-br from-white to-blue-50/50 border-blue-200 shadow-soft hover:shadow-medium transition-all duration-300">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                                    Envoyer un message
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Je vous répondrai dans les plus brefs délais pour discuter de vos besoins.
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="space-y-4">
                                    <div className="grid-clean md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                                                Nom complet *
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="Votre nom"
                                                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                                                Email *
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="votre@email.com"
                                                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="block text-sm font-semibold text-slate-700">
                                            Sujet *
                                        </label>
                                        <input
                                            id="subject"
                                            type="text"
                                            placeholder="Objet du message"
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            placeholder="Décrivez votre projet ou votre demande..."
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 resize-none"
                                            required
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-3 font-semibold group"
                                >
                                    <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Envoyer le message
                                </button>
                                <p className="text-center text-slate-500 text-sm">
                                    * Champs obligatoires
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}