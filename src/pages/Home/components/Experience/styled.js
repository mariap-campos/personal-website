import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    width: 60vw;
    margin: 30px auto;

    @media screen and (max-width: 768px) {
        width: 90vw;
        margin: 0 auto;
        padding: 25px 0px;
    }
`;
export const ResumeWrapper = styled.div`
    text-align: center;
    margin-bottom: 50px;

    a {

        background: var(--color-text);
        text-decoration: none;
        font-size: 18px;
        color: white;
        border: 2px solid transparent;
        padding: 8px 16px;
        transition: all 0.6s ease;
        border-radius: 14px;
        margin-right: 20px;

        &:hover {

        padding: 12px 28px;
        transition: all 0.6s ease;
    }
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
    font-size: 5rem;
    margin-bottom: 40px;
`;
export const CompanyWrapper = styled.div`
    display: flex;
    margin-bottom: 40px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 6px 4px 14px 4px rgb(193 196 199 / 18%);
    transition: all ease 0.5s;

    &:hover {
        transform: scale(1.05);
        transition: all ease 0.5s;
    }
}
    
    @media screen and (max-width: 768px) {
       flex-direction: column;
    }
`;
export const NameWrapper = styled.div`
    font-size: 14px;
    flex: 1;

    h2 {
        color: var(--color-text);
    }

    span {
        color: var(--color-text-light);
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
    color: var(--color-blueish);

    svg {
        margin-right: 5px;
    }

    a {
        font-weight: 500;
        color: var(--color-yellow-light);
        text-decoration: none;
        transition: color 0.5s ease;
    }
    a:hover {
        color: var(--color-yellow);
        transition: color 0.5s ease;
    }
`;
