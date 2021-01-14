import styled from 'styled-components'

export const ProfileWrapper = styled.div`
    width: 60vw;
    padding: 55px 10px;
    display: flex;
    border-bottom: 3px solid var(--color-blueish);

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 90vw;
        margin: 0 auto;
        padding: 25px 0px;
    }

`;

export const ProfileImage = styled.div`
    img {
        width: 220px;
        border-radius: 15px;
    }
    animation-name: slide;
    animation-duration: 1.2s;
    animation-timing-function: ease;

    @media screen and (max-width: 768px) {
        margin: 10px auto;
    }
`;
export const ProfileTextWrapper = styled.div`
    margin-left: 40px;
    color: var(--color-text);
    animation-name: slide;
    animation-duration: 1.2s;
    animation-timing-function: ease;

    @media screen and (max-width: 768px) {
        margin-left: 0px;
    }
`;
export const ProfileText = styled.div`
    line-height: 3rem;
    margin-top: 20px;
    text-align: justify;
`;
export const Title = styled.h1`

`;
export const AditionalInfo = styled.div`
    margin-top: 16px;
    font-family: 'Rokkitt';
    font-size: 2rem;
    color: var(--color-pink);

    strong {
        color: var(--color-purple);
    }
`;
