import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100vw;
    border-bottom: 2px solid white;
    padding: 20px;
    transition: all 0.3s ease;


    &.active {
        opacity: 0;
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

    @media screen and (max-width: 768px) {
        font-size: 32px;
        line-height: 32px;
        margin-bottom: 6px;
    }
`;

export const NavWrapper = styled.div`
    flex: 1;
    margin-top: 12px; 

        @media screen and (max-width: 768px) {
        display: none;
    }

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
    transition: height 0.5s ease;

    @media screen and (max-width: 768px) {
        margin-right: 0px;
        width: 25vw;
    }


    &:hover {
        transition: all 0.3s ease;
        svg {
            transform: scale(1.3);
            transition: all 0.3s ease;
        }
    }

    svg {
        font-size: 26px;
        color: white;
        transition: all 0.3s ease;
    }
`;

