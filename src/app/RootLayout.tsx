import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function RootLayout() {
    const location = useLocation()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        setIsMobileMenuOpen(false)

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [location.pathname])

    const navItems = [
        { path: '/', label: 'Accueil', icon: '🏠' },
        { path: '/education', label: 'Formations', icon: '🎓' },
        { path: '/experience', label: 'Expériences', icon: '💼' },
        { path: '/courses', label: 'Compétences', icon: '⚡' },
        { path: '/projects', label: 'Projets', icon: '🚀' },
        { path: '/certifications', label: 'Certifications', icon: '🏆' },
        { path: '/gallery', label: 'Galerie', icon: '📷' },
    ]

    return (
        <div className="app-container min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Header Premium */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3 border-b border-slate-200/60'
                    : 'bg-transparent py-6'
            }`}>
                <div className="container-modern">
                    <div className="flex items-center justify-between">
                        {/* Logo Animé */}
                        <NavLink
                            to="/"
                            className="text-2xl font-bold text-gradient-animated hover:scale-105 transition-transform duration-300"
                        >
                            Aicha BARAHOU
                        </NavLink>

                        {/* Navigation Desktop Premium */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                                            isActive
                                                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                                                : 'text-slate-600 hover:text-blue-600 hover:bg-white/80 hover:shadow-md'
                                        }`
                                    }
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    {item.label}
                                </NavLink>
                            ))}

                            <NavLink
                                to="/contact"
                                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                            >
                                <span>📧</span>
                                Contact
                            </NavLink>
                        </div>

                        {/* Menu Mobile */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <span className="text-xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Menu Mobile Dropdown */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-2xl p-4 animate-fade-in">
                            <div className="grid gap-2">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                                                isActive
                                                    ? 'bg-blue-500 text-white shadow-lg'
                                                    : 'text-slate-600 hover:bg-slate-50'
                                            }`
                                        }
                                    >
                                        <span className="text-lg">{item.icon}</span>
                                        {item.label}
                                    </NavLink>
                                ))}
                                <NavLink
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold shadow-lg mt-2"
                                >
                                    <span>📧</span>
                                    Contact
                                </NavLink>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Espace pour le header fixe */}
            <div className="h-20"></div>

            {/* Main Content */}
            <main className="main-content flex-1">
                <Outlet />
            </main>

            {/* Footer Premium */}
            <footer className="glass-panel mt-20 border-t border-slate-200/60">
                <div className="container-modern py-16">
                    <div className="text-center space-y-8">
                        {/* Logo Footer */}
                        <div className="text-2xl font-bold text-gradient-animated">
                            Aicha BARAHOU
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 max-w-md mx-auto leading-relaxed text-lg">
                            Enseignante passionnée par l'informatique et les technologies éducatives.
                            Spécialisée dans la programmation et le développement web.
                        </p>

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-slate-500">
                            <a href="mailto:aicha.barahou@email.com" className="flex items-center gap-3 hover:text-blue-600 transition-all duration-300 group">
                                <span className="text-2xl group-hover:scale-110 transition-transform">✉️</span>
                                <span className="font-medium">aicha.barahou@email.com</span>
                            </a>
                            <div className="flex items-center gap-3 group">
                                <span className="text-2xl group-hover:scale-110 transition-transform">🎓</span>
                                <span className="font-medium">Enseignante qualifiée d'informatique</span>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="pt-8 border-t border-slate-200/60">
                            <p className="text-slate-500">
                                © {new Date().getFullYear()} • Aicha BARAHOU • Tous droits réservés
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}