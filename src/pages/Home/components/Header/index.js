import React from 'react';
import * as S from './styled';
import logoImg from '../../../../assets/images/meteor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'

function Header() {
    return (
    <S.HeaderWrapper>
        <S.TitleWrapper>
            <S.Title>
                maria <br/>
                campos
            </S.Title>
            <S.Logo>
            <img src={logoImg} alt="" className="heroImg"/>
            </S.Logo>
        </S.TitleWrapper>
        <S.NavWrapper>
            <S.NavItems>
                <S.NavItem>
                    <a target="_blank" href="mailto:mpfc.maria@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="icon-envelope"/></a>
                </S.NavItem>
                <S.NavItem>
                    <a target="_blank" href="https://github.com/mariap-campos"><FontAwesomeIcon icon={faGithub} className="icon-github"/></a>
                </S.NavItem>
                <S.NavItem>
                    <a target="_blank" href="https://github.com/mariap-campos"><FontAwesomeIcon icon={faLinkedin} className="icon-linkedin"/></a>
                </S.NavItem>
                <S.NavItem>
                    <a target="_blank" href="https://codepen.io/mariap-campos"><FontAwesomeIcon icon={faCodepen} className="icon-codepen"/></a>
                </S.NavItem>
            </S.NavItems>

        </S.NavWrapper>
    </S.HeaderWrapper>
    )
}

export default Header;