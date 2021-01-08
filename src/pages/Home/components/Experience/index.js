import React from 'react';
import * as S from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Resume from '../../../../assets/documents/CV_MARIA_CAMPOS_eng.pdf';

function Experience() {
    return (
        <S.ExperienceContainer>
            <S.ExperienceWrapper>
                <S.TitleWrapper>
                    experience
                </S.TitleWrapper>
                <S.CompanyWrapper>
                    <S.NameWrapper>
                        <h2>enext</h2>
                        AGOSTO 2019 - CURRENT
                    </S.NameWrapper>
                    <S.AdditionalInfo>
                        <h2>Front-end Developer Intern</h2>
                        <span>Working with web development for ecommerce aplications using JS ES6+ combined with the VTEX platform, doing anything from minor changes in the applications to completely new features and landing pages. Some applicattions also use React.</span> <br/>
                        <S.Location>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-Marker"/> São Paulo (remote) | <a target="_blank" rel="noreferrer" href="https://enext.com.br"><FontAwesomeIcon icon={faLink} className="icon-link"/>enext.com.br</a>
                        </S.Location>
                    </S.AdditionalInfo>
                </S.CompanyWrapper>
            </S.ExperienceWrapper>
            <S.ResumeWrapper>
            <a href={Resume} target="_blank" className="resume-link">resume</a>

            </S.ResumeWrapper>
        </S.ExperienceContainer>
    )
}

export default Experience;