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
                        <span>GRADUATED - JULY 2021</span>
                    </S.AdditionalInfo>
                </S.CollegeWrapper>
            </S.EducationWrapper>
        </S.EducationContainer>
    )
}

export default Education;