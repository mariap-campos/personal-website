import React from 'react';
import * as S from './styled';
import profileImg from '../../../../assets/images/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi } from '@fortawesome/free-solid-svg-icons'

function AboutMe() {
    return (
        <S.ProfileWrapper>
            <S.ProfileImage>
            <img src={profileImg} alt="" className="heroImg"/>
            </S.ProfileImage>
            <S.ProfileTextWrapper>
                <S.Title>
                    front-end dev
                </S.Title>
                <S.ProfileText>
                    Hello there! i’m a <strong>front-end developer</strong> 👾 still in development, currently working on my <strong>technology degree</strong>🎓 and always looking for more oportunitties to grow and learn. Passionate about <strong>programming and design</strong>💻, also kinda nerdy.
                </S.ProfileText>
                <S.AditionalInfo>
                    <strong>20 years</strong> | brasil
                </S.AditionalInfo>
            </S.ProfileTextWrapper>
        </S.ProfileWrapper>
    )
}

export default AboutMe;