import React, { useContext } from "react";
import styled from "styled-components";
import Title from "./Title";
import { LinkButton, AccentButton } from "./Button";
import ProgressBar from "./ProgressBar";
import { FlexBox } from "../utils/Flexbox";
import { accent } from "../utils/constant";
// import { AuthContext } from "../state/Store";
// import { logOut } from "../state/auth/authActions";

const NavContainer = styled.div`
    padding:0.5rem 1rem;
    @media (min-width:700px){
      padding:0.5rem 2rem;
    }
    @media (min-width:1000px){
      padding:0.8rem 3rem;
    }
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content: space-between;
`
const ProgressBarWrapper = styled.div`
    padding:0;
    display:flex;
    align-items:flex-start;
    flex-direction:column;
`
const ButtonWrapper = styled(FlexBox)`
    justify-content:space-between;
    @media (max-width:926px){
        width:100%
    }
`;
const UserWrapper = styled.div`
    margin: 0 0 0 1rem;
    padding: 0.3rem 1rem;
    cursor: pointer;
    height: 2.3rem;
    border: 2px solid ${accent};
    position: relative;
`
const Popover = styled.div`
    opacity:0;
    visibility:hidden;
    position:absolute;
    bottom:-2rem;
    right: 0;
    background:${accent};
    color:white;
    cursor:pointer;
    padding:0.2rem 1rem;
    transform:translateY(2rem);
    transition:transform 0.2s;
    &[aria-hidden="false"] {
      opacity:1;
      visibility:visible;
      transform:translateY(0);
    }
`
export function Navbar(props) {
  // const auth = useContext(AuthContext);
  let { min, sec } = props;

  const userName = "Ritesh Raj"

  function getTimeString(min, sec) {
    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    return min + ":" + sec;
  }

  let currentTimeString = getTimeString(min, sec);

  // Optimise it using negation of boolean value
  function showPopover() {
    const ariaHidden = document.querySelector(".profile-popover").getAttribute("aria-hidden");
    if (ariaHidden == "true") document.querySelector(".profile-popover").setAttribute("aria-hidden", "false");
    else document.querySelector(".profile-popover").setAttribute("aria-hidden", "true");
  }

  function handleLogOut() {
    console.log("Logged Out !");
  }

  return (
    <React.Fragment>
      <NavContainer>
        <div>
          <Title Title={props.title} />
          <LinkButton>Instructions</LinkButton>
        </div>
        <ProgressBarWrapper>
          <ProgressBar label="Time" currentValue={currentTimeString} maxValue={props.maxTime} timer />
          <ProgressBar label="Ques" currentValue={props.questions} maxValue={props.totalNumberOfQuestions} />
        </ProgressBarWrapper>
        <ButtonWrapper>
          <LinkButton padding="1.4rem">Need Help?</LinkButton>
          <AccentButton aria-controls="submit" onClick={props.handleSubmit}>Submit Test</AccentButton>
        </ButtonWrapper>
      </NavContainer>
    </React.Fragment>
  );
}
