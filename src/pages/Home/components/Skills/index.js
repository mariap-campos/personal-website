import React from 'react';
import * as S from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faHtml5, faCss3Alt, faReact, faGitAlt, faChrome, faFigma} from '@fortawesome/free-brands-svg-icons'
import { faUsers, faPencilAlt, faFillDrip, faFileImage, faFlask } from '@fortawesome/free-solid-svg-icons'

function Skills() {
    return (
        <S.SkillsContainer>
            <S.SkillsWrapper>
                <S.TitleWrapper>
                    skills
                </S.TitleWrapper>
                <S.CardsWrapper>
                    <S.CardItem>
                        <h3>languages</h3>
                        <S.Card>
                            <FontAwesomeIcon icon={faJsSquare} className="icon-Marker"/>
                            javascript
                        </S.Card>
                        <S.Card>
                            <FontAwesomeIcon icon={faHtml5} className="icon-Marker"/>
                            html
                        </S.Card>
                        <S.Card>
                            <FontAwesomeIcon icon={faCss3Alt} className="icon-Marker"/>
                            (s)css
                        </S.Card>
                    </S.CardItem>
                    <S.CardItem>
                        <h3>frameworks/libs</h3>
                        <S.Card>
                            <FontAwesomeIcon icon={faReact} className="icon-Marker"/>
                            react
                        </S.Card>
                        <S.Card>
                            <FontAwesomeIcon icon={faReact} className="icon-Marker"/>
                            styled components
                        </S.Card>
                        <S.Card>
                            <FontAwesomeIcon icon={faFlask} className="icon-Marker"/>
                            jest (unit tests)
                        </S.Card>
                        <S.Card>
                            <FontAwesomeIcon icon={faReact} className="icon-Marker"/>
                            react native
                        </S.Card>
                    </S.CardItem>
                    <S.CardItem>
                        <h3>design</h3>
                        <S.Card>
                            <FontAwesomeIcon icon={faUsers} className="icon-Marker"/>
                            ui / ux 
                        </S.Card>
                        <S.Card>
                            <FontAwesomeIcon icon={faPencilAlt} className="icon-Marker"/>
                            sketching
                        </S.Card>
                        <S.Card>
                            <FontAwesomeIcon icon={faFillDrip} className="icon-Marker"/>
                            responsive design
                        </S.Card>
                    </S.CardItem>
                    <S.CardItem>
                        <h3>tools</h3>
                        <S.Card>
                            <FontAwesomeIcon icon={faGitAlt} className="icon-Marker"/>
                            git / github
                        </S.Card>
                        <S.Card>
                            <FontAwesomeIcon icon={faChrome} className="icon-Marker"/>
                            devtools
                        </S.Card>
                        <S.Card>
                            <FontAwesomeIcon icon={faFileImage} className="icon-Marker"/>
                            photoshop / illustrator
                        </S.Card>
                        <S.Card>
                            <FontAwesomeIcon icon={faFigma} className="icon-Marker"/>
                            figma / adobe xd
                        </S.Card>
                    </S.CardItem>
                </S.CardsWrapper>

            </S.SkillsWrapper>

        </S.SkillsContainer>
    )
}

export default Skills;