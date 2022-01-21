import styled from 'styled-components'

export const SocialMediaWrapper = styled.div`
    position: fixed;
    width: fit-content;
    right: 0px;
    bottom: 8px;
    z-index: 2;
    width: fit-content;
    padding: 16px;
    transition: all 0.3s ease;
    opacity: 0;
    border-radius: 8px;
    background: white;
    box-shadow: 6px 4px 14px 4px rgb(193 196 199 / 50%);


    &.active {
        opacity: 1;
    }

    @media screen and (max-width: 768px) {
        opacity: 1;
        width: 100vw;
        bottom: 0;
    }
`;

export const NavItems = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
        justify-content: space-around;
        flex-direction: row;
    }

`;
export const NavItem = styled.li`
    text-align: center;
    width: 38px;
    height: 38px;
    transition: height 0.5s ease;

    @media screen and (max-width: 768px) {
        margin-right: 0px;
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
        color: var(--color-text);
        transition: all 0.3s ease;
    }
`;

