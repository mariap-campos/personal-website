import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 65vw;
    padding-top: 65px;
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Title = styled.div`
    font-family: 'Rokkitt';
    font-size: 7rem;
    font-weight: 700;
    color: var(--color-text);
    line-height: 46px;
    align-self: center;
`;
export const Logo = styled.div`
 img {
    height: 150px;
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


