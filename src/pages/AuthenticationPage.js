import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Signup, Signin } from "../components/Form";
import Figure from "../components/Figure";
import Loader from "../components/Loader";
// import { AuthContext } from "../../state/Store";

const Main = styled.div`
  min-height: 100vh;
  @media (min-width: 700px) {
    padding: 2rem 0;
  }
  background: rgb(248, 248, 248);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: white;
  border-radius: 1rem;
  justify-content: center;
  box-shadow: 0.3rem 0.3rem 0.5rem 0 rgb(200, 200, 200);
  flex-direction: ${props => (props.signinForm ? "column-reverse" : "column")};
  padding: 3rem 1rem;
  @media (min-width: 700px) {
    flex-direction: row;
    padding: 3rem 2rem;
    width: 40rem;
  }
  @media (min-width: 800px) {
    width: 45rem;
  }
  @media (min-width: 1000px) {
    padding: 3rem 5rem;
    width: 55rem;
  }
  @media (min-width: 1200px) {
    width: 60rem;
  }
  @media (min-width: 1400px) {
    width: 65rem;
  }
`
const FormContainer = styled.div`
  flex-grow: 1;
  padding-right: ${props => (!props.paddingLeft && "3rem") || "0"};
  padding-left: ${props => (props.paddingLeft && "3rem") || "0"};
  @media (max-width: 699px) {
    width: 100%;
    padding: 1rem;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
  @media (min-width: 1400px) {
    padding-right: ${props => (!props.paddingLeft && "6rem") || "0"};
    padding-left: ${props => (props.paddingLeft && "6rem") || "0"};
  }
`
const FigureContainer = styled.div`
  width: 100%;
  max-width: 25rem;
  height: 33rem;
  @media (min-width: 1000px) {
    height: 35rem;
  }
  padding-left: ${props => (!props.paddingRight && "2rem") || "0"};
  padding-right: ${props => (props.paddingRight && "2rem") || "0"};
  @media (max-width: 700px) {
    padding: 0;
  }
  @media (min-width: 700px) {
    width: 17rem;
  }
  @media (min-width: 1000px) {
    width: 25rem;
  }
`
const SocialIconContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  @media (min-width: 700px) {
    margin-top: 4rem;
  }
  span {
    margin-right: 1rem;
  }
`

const Icon = styled.i.attrs(props=> ({
  color: props.colorProps|| "#000000"
}))`
  font-size: 2rem;
  cursor: pointer;
  margin-right: 1rem;
`
export function SignupPage(props) {
  // const auth = useContext(AuthContext);
  // useEffect(() => {
  //     if (auth.state.userLoggingIn) document.querySelector('body').classList.add('clip-body');
  //     else document.querySelector('body').classList.remove('body');
  // }, [auth.state.userLoggingIn]);
  return (
    <React.Fragment>
      <Main>
        <Flex>
          <FormContainer>
            <Signup />
          </FormContainer>
          <FigureContainer>
            <Figure
              imgsrc="https://konfinity-assets.s3.ap-south-1.amazonaws.com/quiz/signup-image.jpg"
              figWidth="100%"
              figHeight="105%"
              imgHeight="29rem"
              linktext="I am already member"
              link="/signin"
            />
          </FigureContainer>
        </Flex>
      </Main>
    </React.Fragment>
  );
}

export function SigninPage(props) {
  // const auth = useContext(AuthContext);
  // useEffect(() => {
  //     if (auth.state.userLoggingIn) document.querySelector('body').classList.add('clip-body');
  //     else document.querySelector('body').classList.remove('body');
  // }, [auth.state.userLoggingIn]);
  return (
    <React.Fragment>
      <Main>
        <Flex signinForm>
          <FigureContainer paddingRight>
            <Figure
              imgsrc="https://konfinity-assets.s3.ap-south-1.amazonaws.com/quiz/signup-image.jpg"
              figWidth="100%"
              figHeight="100%"
              imgHeight="29rem"
              linktext="Create an account"
              link='/signup'
            />
          </FigureContainer>
          <FormContainer paddingLeft signinForm>
            <Signin />
            <SocialIconContainer>
              <span>Or begin with</span>
              <Icon className="fab fa-facebook-square" style={{color:"#3b5999"}}></Icon>
              <Icon className="fab fa-twitter-square" style={{color:"#50ABF1"}}></Icon>
              <Icon className="fab fa-google-plus-square" style={{color:"#DD4B39"}}></Icon>
            </SocialIconContainer>
          </FormContainer>
        </Flex>
      </Main>
    </React.Fragment>
  );
}
