import styled from 'styled-components'

export const SkillsContainer = styled.div`
    border-bottom: 3px solid var(--color-blueish);
`;
export const SkillsWrapper = styled.div`
    padding: 55px 10px;

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

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
       flex-direction: column;
    }
`;
export const CardItem = styled.div`
    h3 {
        text-align: center;
        margin-bottom: 16px;
        color: var(--color-text);
    }

    @media screen and (max-width: 768px) {
       margin-bottom: 20px;
    }

`;
export const Card = styled.div`
    background-color: var(--color-blueish);
    padding: 18px;
    width: 14vw;
    margin-right: 10px;
    color: white;

    @media screen and (max-width: 768px) {
        width: 60vw;
        margin: 0 auto;
    }

    svg {
        margin-right: 11px;
    }

    &:nth-of-type(1) {
        background-color: var(--color-purple);
    }
    &:nth-of-type(2) {
        background-color: var(--color-pink);
    }
    &:nth-of-type(4) {
        background-color: var(--color-blueish-light);
    }
`;
