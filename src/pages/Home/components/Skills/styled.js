import styled from 'styled-components'

export const SkillsContainer = styled.div`
    border-bottom: 3px solid var(--color-blueish);
`;
export const SkillsWrapper = styled.div`
    padding: 55px 10px;
`;

export const TitleWrapper = styled.h1`
    font-size: 4rem;
    margin-bottom: 10px;
`;

export const TabWrapper = styled.div`
  .react-tabs {
    &__tab-list{
        list-style: none;
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        font-size: 25px;
        font-family: 'Rokkitt';
        font-weight: 500;
        color: var(--color-text);
    }

    &__tab{
        transition: color 0.5s ease;
        &:hover {
            color: var(--color-blueish);
            transition: color 0.5s ease;
            cursor: pointer;
        }
    }


    &__tab--selected{
        color: var(--color-blueish);
        border-bottom: 2px solid;
    }    
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    background: linear-gradient(to bottom, #F9F9F9 65%, var(--color-blueish) 35%);
    margin-top: 30px;
    padding: 50px 60px 20px 60px;
    border-radius: 15px;
`;
export const CardItem = styled.div`
    text-align: center;
`;
export const ImagesWrapper = styled.div`
    img {
        width: 50px;
        margin-bottom: 20px;
    }

`;
export const TextWrapper = styled.div`
    color: white;
    `;
