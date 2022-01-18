import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 95Vh;
    display: flex;
    background: linear-gradient(-45deg, var(--color-red), var(--color-orange), var(--color-yellow),  var(--color-green), var(--color-blueish), var(--color-blue));
	background-size: 500% 500%;
	animation: gradient 16s ease infinite;
    position: relative;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin: 0 auto;
        padding: 25px 0px;
    }

    .rocket {
        position: absolute;
        width: 50vw;
        bottom: 0;

    @media screen and (max-width: 768px) {
        width: 160vw;
    }
    }

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}


`;

export const ProfileWrapper = styled.div`
    width: 50vw;
    height: fit-content;
    margin: 16% auto;
    display: flex;
`;

export const ProfileImage = styled.div`
    position: relative;
    img {
        width: 220px;
        border-radius: 50%;

    }
    .circle {
        border-radius: 50%;
        position: absolute;
        width: 240px;
        height: 240px;
        top: -10px;
        left: -10px;
        border: 2px solid white;
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
    color: white;
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

color: white;

`;
export const AditionalInfo = styled.div`
    margin-top: 16px;
    font-family: 'Rokkitt';
    font-size: 2.25rem;
    color: var(--color-pink);

    strong {
        color: var(--color-purple);
    }
`;
