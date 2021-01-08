import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    border-bottom: 3px solid var(--color-blueish);
`;
export const ResumeWrapper = styled.div`
    text-align: center;
    margin-bottom: 20px;
    .resume-link {
        color: var(--color-blueish);
        text-decoration: none;
        font-size: 20px;
        border: 3px solid;
        padding: 4px 14px;
        border-radius: 6px;
        transition: background 1s ease, border 1s ease;
    }

    .resume-link:hover {
        color: white;
        border: 3px solid var(--color-blueish);
        background-color: var(--color-blueish);
        transition: background 1s ease, border 1s ease;
    }
`;

export const ExperienceWrapper = styled.div`
    width: 60vw;
    padding: 55px 10px;
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
`;
export const NameWrapper = styled.div`
    font-size: 14px;
    flex: 1;
`;
export const AdditionalInfo = styled.div`
    text-align: end;
    flex:4;
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
