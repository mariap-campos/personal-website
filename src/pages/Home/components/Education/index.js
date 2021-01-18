import React from 'react';
import * as S from './styled';

function Education() {
    return (
        <S.EducationContainer>
            <S.EducationWrapper>
                <S.TitleWrapper>
                    education
                </S.TitleWrapper>
                <S.CollegeWrapper>
                    <S.NameWrapper>
                        <h2>universidade de mogi das cruzes</h2>
                        <p>SYSTEM DEVELOPMENT AND ANALYSIS<span>@Mogi das Cruzes, SP - Brasil</span></p>
                    </S.NameWrapper>
                    <S.AdditionalInfo>
                        <span>AGOSTO 2019 - CURRENT</span>
                    </S.AdditionalInfo>
                </S.CollegeWrapper>
                <S.CollegeWrapper>
                    <S.NameWrapper>
                        <h2>universidade paulista</h2>
                        <p>MECHATRONIC ENGINEERING (unfinished)<span>@Tatuapé, SP - Brasil</span></p>
                    </S.NameWrapper>
                    <S.AdditionalInfo>
                    <span>JANUARY 2017 - JULY 2019</span>
                    </S.AdditionalInfo>
                </S.CollegeWrapper>
            </S.EducationWrapper>
        </S.EducationContainer>
    )
}

export default Education;