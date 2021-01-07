import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 60vw;
    padding-top: 65px;
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Title = styled.div`
    font-family: 'Rokkitt', sans-serif;
    font-size: 7rem;
    font-weight: 700;
    color: var(--color-text);
    line-height: 46px;
    align-self: center;
    animation-name: fade-in;
    animation-duration: 1.2s;
    animation-timing-function: ease;

    @keyframes fade-in {
                 0% {  opacity: 0; }
                 100% { opacity: 1; }
            }
`;
export const Logo = styled.div`
 img {
    height: 150px;
    animation-name: slide;
    animation-duration: 1.2s;
    animation-timing-function: ease;
 }

 @keyframes slide {
                 0% { transform: translateX(-300px); opacity: 0; }
                 50% { transform: translateX(-170px); opacity: 0; }
                 100% { transform: translateX(0px); opacity: 1; }
            }
`;

export const NavWrapper = styled.div`
`;
export const NavItems = styled.ul`
    list-style: none;
    display: flex;
    width: 35vw;
    border-top: 3px solid var(--color-blueish);
    padding: 10px 0px;
    animation-name: fade-in;
    animation-duration: 1.2s;
    animation-timing-function: ease;
`;
export const NavItem = styled.li`
    svg {
        font-size: 3.2rem;
        margin-right: 20px;
    }
    svg:hover{
        color: var(--color-text)!important;
        transition: color 0.2s;
    }
    svg.icon-envelope{color: var(--color-purple);transition: color 0.5s;}
    svg.icon-github{color: var(--color-pink);transition: color 0.5s;}
    svg.icon-linkedin{color: var(--color-blueish);transition: color 0.5s;}
    svg.icon-codepen{color: var(--color-blueish);transition: color 0.5s;}   
`;


