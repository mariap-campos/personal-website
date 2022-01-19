import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100vw;
    border-bottom: 2px solid white;
    padding: 20px;
    transition: padding 0.5s ease;

    &.active {
        padding: 10px;
        background: linear-gradient(-45deg, var(--color-red), var(--color-orange), var(--color-yellow),  var(--color-green), var(--color-blueish), var(--color-blue));
        background-size: 500% 500%;
        animation: gradient 16s ease infinite;
        transition: padding 0.5s ease;
    }

    @media screen and (max-width: 768px) {
    }
`;

export const TitleWrapper = styled.div`
    width: 90vw;
    display: flex;
    margin: 0 auto;

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
  color: white;
  transition: font-size 0.5s ease;

  &.active {
    font-size: 46px;
        transition: font-size 0.5s ease;
    }

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


    &:hover {
        transition: all 0.3s ease;
        svg {
            font-size: 32px;
            transition: all 0.3s ease;
        }
    }

    svg {
        font-size: 28px;
        color: white;
        transition: all 0.3s ease;
    }
`;

