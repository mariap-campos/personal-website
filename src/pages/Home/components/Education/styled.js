import styled from 'styled-components'

export const EducationContainer = styled.div`
    border-bottom: 3px solid var(--color-blueish);
    width: 60vw;

    @media screen and (max-width: 768px) {
        width: 90vw;
        margin: 0 auto;
        padding: 25px 0px;
    }
`;

export const EducationWrapper = styled.div`
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
export const CollegeWrapper = styled.div`
    display: flex;
    margin-top: 20px;
    
    @media screen and (max-width: 768px) {
       flex-direction: column;
    }
`;
export const NameWrapper = styled.div`
    font-size: 16px;
    flex: 2;

    span {
        color: #969696;
    }

    h2 {
        font-size: 18px;
    }

`;
export const AdditionalInfo = styled.div`
    text-align: end;
    flex:1;

    span {
        line-height: 4rem;
    }

    @media screen and (max-width: 768px) {
       text-align: unset;
    }
`;
