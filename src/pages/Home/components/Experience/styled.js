import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    border-bottom: 3px solid var(--color-blueish);
`;
export const ResumeWrapper = styled.div`
.svg-wrapper {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  width: 200px;  
}
.shape {
  stroke-dasharray: 140 540;
  stroke-dashoffset: -282;
  stroke-width: 8px;
  fill: transparent;
  stroke: var(--color-blueish);
  border-bottom: 5px solid black;
  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
}
.text {
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 6px;
  font-weight: 600;
  top: 40px;
  right: -38px;
  position: relative; 
  a {
      text-decoration: none;
      color: var(--color-blueish);
  }
}
.svg-wrapper:hover .shape {
  stroke-width: 2px;
  stroke-dashoffset: 0;
  stroke-dasharray: 760;
}
`;

export const ExperienceWrapper = styled.div`
    width: 60vw;
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
