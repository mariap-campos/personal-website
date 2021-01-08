import styled from 'styled-components'

export const ProfileWrapper = styled.div`
    width: 60vw;
    padding: 55px 10px;
    display: flex;
    border-bottom: 3px solid var(--color-blueish);

`;

export const ProfileImage = styled.div`
    img {
        width: 220px;
        border-radius: 15px;
    }
    animation-name: slide;
    animation-duration: 1.2s;
    animation-timing-function: ease;
`;
export const ProfileTextWrapper = styled.div`
    margin-left: 40px;
    color: var(--color-text);
    animation-name: slide;
    animation-duration: 1.2s;
    animation-timing-function: ease;
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
