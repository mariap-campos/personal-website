import styled from 'styled-components'

export const SkillsContainer = styled.div`
    background: #444452;
`;
export const SkillsWrapper = styled.div`
    padding: 55px 10px;
    width: 60vw;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 90vw;
        margin: 0 auto;
        padding: 25px 0px;
    }
`;

export const TitleWrapper = styled.h1`
    font-size: 5rem;
    margin-bottom: 20px;
    color: white;

    @media screen and (max-width: 768px) {
        margin-left: 10px;
    }


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
        font-size: 16px;
        text-align: center;
        margin-bottom: 16px;
        color: white;
    }

    @media screen and (max-width: 768px) {
       margin-bottom: 20px;
    }

`;
export const Card = styled.div`
    background-color: var(--color-blueish);
    padding: 18px;
    margin: 16px 0;
    width: 14vw;
    color: white;
    transition: all ease 0.3s;

    @media screen and (max-width: 768px) {
        width: 60vw;
        margin: 16px auto;
    }

    &:hover {
        transform: scale(1.05);
        transition: all ease 0.3s;
    }

    svg {
        margin-right: 11px;
    }

    &:nth-of-type(1) {
        background-color: var(--color-orange);
    }
    &:nth-of-type(2) {
        background-color: var(--color-yellow);
    }
    &:nth-of-type(4) {
        background-color: var(--color-blue);
    }
`;
