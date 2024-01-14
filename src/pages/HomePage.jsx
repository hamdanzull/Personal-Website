/* eslint-disable react/prop-types */
import { useState } from 'react'
import MyProjects from '../components/Projects/MyProjects';
import AboutMe from '../components/About/AboutMe';
import Services from '../components/Services/Services';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Copyright from "../components/Footer/Copyright";
import SocialIcon from "../components/Footer/SocialIcon";

export default function HomePage({ visitorCount }) {
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
            <Footer>
                <SocialIcon />
                <Copyright visitorCount={visitorCount} />
            </Footer>
        </>
    )
}