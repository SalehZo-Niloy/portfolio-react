import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Banner from '../Components/Banner/Banner';
import AboutMe from '../Components/AboutMe/AboutMe';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';
import EmailMe from '../Components/EmailMe/EmailMe';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Skills></Skills>
            <EmailMe></EmailMe>
            <Footer></Footer>
        </div>
    );
};

export default Main;