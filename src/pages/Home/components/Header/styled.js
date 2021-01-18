import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 60vw;
    padding-top: 65px;
    border-bottom: 3px solid var(--color-blueish);
    animation-name: slide;
    animation-duration: 1s;
    animation-timing-function: ease;

    @media screen and (max-width: 768px) {
        width: 100vw;
        padding-top: 34px;
        border-bottom: none;
    }
`;

export const TitleWrapper = styled.div`
    height: 100px;
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
        height: unset;
        flex-direction: column;
    }
`;
export const Title = styled.div`
  font-family: 'Rokkitt';
  font-size: 54px;
  font-weight: 800;
  letter-spacing: 6px;
    @media screen and (max-width: 768px) {
        font-size: 66px;
        margin-left: 16px;
        line-height: 46px;
        margin-bottom: 10px;
    }
`;

export const NavWrapper = styled.div`
    flex: 1;
    margin-top: 12px; 

`;
export const NavItems = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
        justify-content: center
    }

`;
export const NavItem = styled.li`
    text-align: center;
    margin-right: 14px;
    width: 38px;
    height: 38px;
    padding-top: 5px;
    transition: height 0.5s ease;

    @media screen and (max-width: 768px) {
        margin-right: 0px;
        width: 25vw;
    }

    &.email { background-color: var(--color-purple); }
    &.github {background-color: var(--color-pink);}
    &.linkedin {background-color: var(--color-blueish);}
    &.codepen {background-color: var(--color-blueish-light);}

    &:hover {
        height: 68px;
        transition: height 0.5s ease;
        svg {
            margin-top: 24px;
            transition: margin-top 0.5s ease;
        }
    }

    svg {
        font-size: 28px;
        color: white;
        transition: margin-top 0.5s ease;
    }
`;

