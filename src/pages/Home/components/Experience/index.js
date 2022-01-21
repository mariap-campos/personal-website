import React from 'react';
import * as S from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Resume from '../../../../assets/documents/cv_maria_campos_pt.pdf';

function Experience() {
    return (
        <S.ExperienceContainer>
            <S.ExperienceWrapper>
                <S.TitleWrapper>
                    experience
                </S.TitleWrapper>
                <S.CompanyWrapper>
                    <S.NameWrapper>
                        <h2>sambatech</h2>
                        <span>ABRIL 2021 - CURRENT</span>
                    </S.NameWrapper>
                    <S.AdditionalInfo>
                        <h2>junior front-end developer</h2>
                        <span>Working on a React project called Lounge Cast by Ambev™. Responsible for implementing features, bug fixes and unity testing. As well as participating in the technical and creative refinement of new ideas for the development.</span> <br/>
                        <S.Location>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-Marker"/> São Paulo (remote) | <a target="_blank" rel="noreferrer" href="https://sambatech.com"><FontAwesomeIcon icon={faLink} className="icon-link"/>sambatech.com</a>
                        </S.Location>
                    </S.AdditionalInfo>
                </S.CompanyWrapper>
                <S.CompanyWrapper>
                    <S.NameWrapper>
                        <h2>enext</h2>
                        <span>AGOSTO 2020 - ABRIL 2021</span>
                    </S.NameWrapper>
                    <S.AdditionalInfo>
                        <h2>front-end developer intern</h2>
                        <span>Worked with web development for ecommerce applications using pure JS ES6+ or frameworks such as React combined with the VTEX platform, doing anything from minor changes in the applications to completely new features and landing pages.</span> <br/>
                        <S.Location>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-Marker"/> São Paulo (remote) | <a target="_blank" rel="noreferrer" href="https://enext.com.br"><FontAwesomeIcon icon={faLink} className="icon-link"/>enext.com.br</a>
                        </S.Location>
                    </S.AdditionalInfo>
                </S.CompanyWrapper>
            </S.ExperienceWrapper>
            <S.ResumeWrapper>
                <a href={Resume} target="_blank" rel="noreferrer" className="resume-link">resume (english)</a>
                <a href={Resume} target="_blank" rel="noreferrer" className="resume-link">resume (português)</a>
            </S.ResumeWrapper>
        </S.ExperienceContainer>
    )
}

export default Experience;