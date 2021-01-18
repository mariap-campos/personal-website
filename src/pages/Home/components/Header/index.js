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
                <a target="_blank" title="email" rel="noreferrer" href="mailto:mpfc.maria@gmail.com">
                    <S.NavItem className="email">
                      <FontAwesomeIcon icon={faEnvelope} className="icon-envelope"/>
                    </S.NavItem>
                </a>
                <a target="_blank" title="github" rel="noreferrer" href="https://github.com/mariap-campos">
                    <S.NavItem className="github">
                        <FontAwesomeIcon icon={faGithub} className="icon-github"/>
                    </S.NavItem>
                </a>
                <a target="_blank" title="linkedin" rel="noreferrer" href="https://github.com/mariap-campos">
                    <S.NavItem className="linkedin">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon-linkedin"/>
                    </S.NavItem>
                </a>
                <a target="_blank" title="codepen" rel="noreferrer" href="https://codepen.io/mariap-campos">
                    <S.NavItem className="codepen">
                        <FontAwesomeIcon icon={faCodepen} className="icon-codepen"/>
                    </S.NavItem>
                </a>
                </S.NavItems>

            </S.NavWrapper>
        </S.TitleWrapper>
    </S.HeaderWrapper>
    )
}

export default Header;