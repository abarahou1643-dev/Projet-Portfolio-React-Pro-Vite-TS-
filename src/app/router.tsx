import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Experience from '@/pages/Experience';
import EducationPage from '@/pages/Education';
import CertificationsPage from '@/pages/Certifications';
import Contact from '@/pages/Contact';
import Courses from '@/pages/Courses';
import Gallery from '@/pages/Gallery';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'education', element: <EducationPage /> },
            { path: 'experience', element: <Experience /> },
            { path: 'courses', element: <Courses /> },
            { path: 'projects', element: <Projects /> },
            { path: 'certifications', element: <CertificationsPage /> },
            { path: 'gallery', element: <Gallery /> },
            { path: 'contact', element: <Contact /> },
        ],
    },
]);