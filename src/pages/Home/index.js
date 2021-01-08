import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';

function Home() {
    return (
        <>
        <Header></Header>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Skills></Skills>
        </>
    )
}

export default Home;