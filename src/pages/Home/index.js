import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';

function Home() {
    return (
        <>
        <Header></Header>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Skills></Skills>
        <Education></Education>
        </>
    )
}

export default Home;