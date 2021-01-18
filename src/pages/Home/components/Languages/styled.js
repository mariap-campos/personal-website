import styled from 'styled-components'

export const LanguagesContainer = styled.div`
    border-bottom: 3px solid var(--color-blueish);
    width: 60vw;

    @media screen and (max-width: 768px) {
        width: 90vw;
        margin: 0 auto;
        padding: 25px 0px;
    }
`;

export const TitleWrapper = styled.h1`
    font-size: 4rem;
    margin-bottom: 10px;
`;

export const LanguagesWrapper = styled.div`
    padding: 55px 10px;
    line-height: 3rem;
    animation-name: slide;
    animation-duration: 1.2s;
    animation-timing-function: ease;
`;
export const LanguageWrapper = styled.div`
    display: flex;
    width: 40vw;
    margin: 20px auto;
    justify-content: space-between;
    font-size: 18px;
    padding: 12px;
    border-bottom: 1px solid #e2e2e2;

    @media screen and (max-width: 768px) {
        width: 80vw;
    }

`;
export const Rating = styled.div`
    color: #969696;
    svg {
        font-size: 20px;
        margin-right: 10px;
    }
`;

