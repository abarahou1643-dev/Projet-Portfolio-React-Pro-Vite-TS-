import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RootLayout from './app/RootLayout'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Courses from './pages/Courses'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import './index.css' // ← AJOUTEZ CETTE LIGNE

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="education" element={<Education />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="courses" element={<Courses />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="certifications" element={<Certifications />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App