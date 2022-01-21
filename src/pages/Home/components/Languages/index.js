import React from 'react';
import * as S from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquare as faSquareEmpty } from '@fortawesome/free-regular-svg-icons'

function Languages() {
    return (
        <S.LanguagesContainer>
            <S.LanguagesWrapper>
                <S.TitleWrapper>
                    languages
                </S.TitleWrapper>
                <S.LanguageWrapper>
                    portuguese 
                    <S.Rating>
                        <FontAwesomeIcon icon={faSquare} color="var(--color-orange)" />
                        <FontAwesomeIcon icon={faSquare} color="var(--color-yellow)" />
                        <FontAwesomeIcon icon={faSquare} color="var(--color-blueish)"/>
                        <FontAwesomeIcon icon={faSquare} color="var(--color-blue)"/>
                        native
                    </S.Rating>
                </S.LanguageWrapper>
                <S.LanguageWrapper>
                    english
                    <S.Rating>
                        <FontAwesomeIcon icon={faSquare} color="var(--color-orange)" />
                        <FontAwesomeIcon icon={faSquare} color="var(--color-yellow)" />
                        <FontAwesomeIcon icon={faSquare} color="var(--color-blueish)"/>
                        <FontAwesomeIcon icon={faSquare} color="var(--color-blue)"/>
                        fluent
                    </S.Rating>
                </S.LanguageWrapper>
                <S.LanguageWrapper>
                    spanish 
                    <S.Rating>
                        <FontAwesomeIcon icon={faSquare} color="var(--color-orange)" />
                        <FontAwesomeIcon icon={faSquareEmpty} color="var(--color-yellow)" />
                        <FontAwesomeIcon icon={faSquareEmpty} color="var(--color-blueish)"/>
                        <FontAwesomeIcon icon={faSquareEmpty} color="var(--color-blue)"/>
                        basic
                    </S.Rating>
                </S.LanguageWrapper>
            </S.LanguagesWrapper>
        </S.LanguagesContainer>
    )
}

export default Languages;