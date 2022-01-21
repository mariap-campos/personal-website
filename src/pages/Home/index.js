import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia';
import * as S from './styled';
function Home() {
    const [showNav, setShowNav] = useState(false);
    const [showSocial, setShowSocial] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= window.innerHeight - 100){
            setShowNav(true);
        } else {
            setShowNav(false)
        }
        if (window.scrollY >= window.innerHeight - 500){
          setShowSocial(true);
        } else {
          setShowSocial(false)
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    return (
        <S.Container onScroll={() => console.log('fuck')}>
            <Header showNav={showNav}></Header>
            <AboutMe></AboutMe>
            <Experience></Experience>
            <Skills></Skills>
            <Education></Education>
            <Languages></Languages>
            <Footer></Footer>
            <SocialMedia showNav={showSocial}></SocialMedia>
        </S.Container>
    )
}

export default Home;