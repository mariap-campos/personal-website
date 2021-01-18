import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    border-bottom: 3px solid var(--color-blueish);
    width: 60vw;

    @media screen and (max-width: 768px) {
        width: 90vw;
        margin: 0 auto;
        padding: 25px 0px;
    }
`;
export const ResumeWrapper = styled.div`
    text-align: center;
    margin-bottom: 20px;

    a {
        text-decoration: none;
        font-size: 18px;
        color: var(--color-blueish);
        border: 2px solid var(--color-blueish);
        padding: 4px 16px;
        transition: background-color 0.6s ease, color 1s ease;
    }

    a:hover {
        background-color: var(--color-blueish);
        color: white;
        transition: background-color 0.6s ease, color 1s ease;
    }


`;

export const ExperienceWrapper = styled.div`
    padding: 55px 10px;
    line-height: 3rem;
    animation-name: slide;
    animation-duration: 1.2s;
    animation-timing-function: ease;
`;
export const TitleWrapper = styled.h1`
    font-size: 4rem;
    margin-bottom: 10px;
`;
export const CompanyWrapper = styled.div`
    display: flex;
    
    @media screen and (max-width: 768px) {
       flex-direction: column;
    }
`;
export const NameWrapper = styled.div`
    font-size: 14px;
    flex: 1;

    span {
        color: var(--color-text-light);
    }
    @media screen and (max-width: 768px) {
       display: flex;

       span {
        line-height: 4rem;
        margin-left: 10px;
       }
    }
`;
export const AdditionalInfo = styled.div`
    text-align: end;
    flex:4;

    @media screen and (max-width: 768px) {
       text-align: unset;
    }
`;
export const Location = styled.div`
    margin-top: 10px;
    font-weight: 500;
    color: var(--color-purple);

    svg {
        margin-right: 5px;
    }

    a {
        color: var(--color-pink);
        text-decoration: none;
        transition: color 0.5s ease;
    }
    a:hover {
        color: var(--color-text);
        transition: color 0.5s ease;
    }
`;
