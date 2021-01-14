import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 60vw;
    padding-top: 65px;
    animation-name: slide;
    animation-duration: 1s;
    animation-timing-function: ease;

    @media screen and (max-width: 768px) {
        width: 100vw;
    }
`;

export const TitleWrapper = styled.div`
    margin-bottom: 20px;
    width: 60vw;
    display: flex;
    /* background: linear-gradient(to right, 
        var(--color-purple) 0%,
        var(--color-purple) 21%,
        var(--color-pink) 21%,
        var(--color-pink) 42%,
        var(--color-blueish) 42%,
        var(--color-blueish) 70%,
        var(--color-blueish-light) 70%,
        var(--color-blueish-light) 70%); */

    @media screen and (max-width: 768px) {
        width: 100vw;
        flex-direction: column;
    }
`;
export const Title = styled.div`
  font-family: 'Rokkitt';
    font-size: 53px;
    font-weight: 800;
    border-bottom: 3px solid var(--color-blueish);
    letter-spacing: 6px;
    color: #313131;
`;

export const NavWrapper = styled.div`
    flex: 1;
    align-self: center;

`;
export const NavItems = styled.ul`
    list-style: none;
    display: flex;
    margin-top: 25px;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
        width: 100vw;
        justify-content: flex-end
    }

`;
export const NavItem = styled.li`
    width: 64px;
    text-align: center;
    padding: 4px;

    &:nth-of-type(1){
        background-color: var(--color-purple)
    }
    &:nth-of-type(2){
        background-color: var(--color-pink)
    }
    &:nth-of-type(3){
        background-color: var(--color-blueish)
    }
    &:nth-of-type(4){
        background-color: var(--color-blueish-light)
    }
    svg {
        font-size: 28px;
        color: white;
    }
    svg:hover{
        color: var(--color-text)!important;
        transition: color 0.2s;
    }
`;

