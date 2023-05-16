import styled from "styled-components";
import AboutImage from "/src/assets/about.svg";

export const StyledSection = styled.section`
  background-color: ${(props) => props.theme.aboutColor};
  display: flex;
  justify-content: start;
  min-height: 600px;
`;

export const StyledDiv = styled.div`
  width: 530px;
  padding-left: 90px;
  padding-top: 180px;
  padding-right: 550px;
`;

export const StyledParagraph = styled.p`
  position: relative;

  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 446px;
    height: 563px;
    bottom: -192px;
    right: -580px;
    background-image: url(${AboutImage});
  }
`;
