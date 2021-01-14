import React from 'react';
import * as S from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faCodepen } from '@fortawesome/free-brands-svg-icons'

function Header() {
    return (
    <S.HeaderWrapper>
        <S.TitleWrapper>
            <S.Title>
                maria p. campos
            </S.Title>
            <S.NavWrapper>
                <S.NavItems>
                    <S.NavItem>
                        <a target="_blank" rel="noreferrer" href="mailto:mpfc.maria@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="icon-envelope"/></a>
                    </S.NavItem>
                    <S.NavItem>
                        <a target="_blank" rel="noreferrer" href="https://github.com/mariap-campos"><FontAwesomeIcon icon={faGithub} className="icon-github"/></a>
                    </S.NavItem>
                    <S.NavItem>
                        <a target="_blank" rel="noreferrer" href="https://github.com/mariap-campos"><FontAwesomeIcon icon={faLinkedinIn} className="icon-linkedin"/></a>
                    </S.NavItem>
                    <S.NavItem>
                        <a target="_blank" rel="noreferrer" href="https://codepen.io/mariap-campos"><FontAwesomeIcon icon={faCodepen} className="icon-codepen"/></a>
                    </S.NavItem>
                </S.NavItems>

            </S.NavWrapper>
        </S.TitleWrapper>
    </S.HeaderWrapper>
    )
}

export default Header;