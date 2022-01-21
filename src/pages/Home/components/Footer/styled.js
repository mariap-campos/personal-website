import styled from 'styled-components'

export const FooterContainer = styled.div`
    padding: 25px;
    text-align: center;
    color: white;
    font-size: 24px;
    font-family: 'Rokkitt';

    background: linear-gradient(-45deg, var(--color-red), var(--color-orange), var(--color-yellow),  var(--color-green), var(--color-blueish), var(--color-blue));
	background-size: 500% 500%;
	animation: gradient 16s ease infinite;

    @media screen and (max-width: 768px) {
        margin-bottom: 80px;
    }
`;

