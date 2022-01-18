import React from 'react';
import * as S from './styled';
import profileImg from '../../../../assets/images/profile.png'
import rocketAnimation from '../../../../assets/images/rocket.gif'

function AboutMe() {
    return (
        <S.Container className="container">
            <img src={rocketAnimation} alt="" className="rocket" />
            <S.ProfileWrapper >
                <S.ProfileImage>
                    <img src={profileImg} alt="" className="heroImg" />

                    <div className="circle"> </div>
                </S.ProfileImage>
                <S.ProfileTextWrapper>
                    <S.Title>
                        software developer
                    </S.Title>
                    <S.ProfileText>
                        Hello there! i’m a <strong>front-end developer</strong> 👾 still in development, i have a <strong>technology degree</strong>🎓 in system development and analysis and i'm always looking for more opportunities to grow and learn. Passionate about <strong>programming and design</strong>💻, also kinda nerdy.
                    </S.ProfileText>
                    <S.AditionalInfo>
                        <strong>21 years</strong> | brasil
                    </S.AditionalInfo>
                </S.ProfileTextWrapper>
            </S.ProfileWrapper>
        </S.Container>
    )
}

export default AboutMe;