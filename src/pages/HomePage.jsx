import { useState } from 'react'
import MyProjects from '../components/Projects/MyProjects';
import AboutMe from '../components/About/AboutMe';
import Services from '../components/Services/Services';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
    const [aboutToggle, setAboutToggle] = useState(false);
    const handleAbout = () => setAboutToggle(!aboutToggle);
    return (
        <>
            <Header />
            <Hero
                aboutToggle={aboutToggle}
                handleAbout={handleAbout}
            />
            <AboutMe aboutToggle={aboutToggle} />
            <MyProjects />
            <Services />
            <Footer />
        </>
    )
}