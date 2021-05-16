import React from "react";
import styled from "styled-components";
import { pure } from "../utils/constant";
// import { loginUser, signupUser } from '../state/auth/authActions';
import { useLabledIconInput, CheckboxInput } from "./Input";
import { AccentButton } from './Button';
import Title from './Title';
const Form = styled.form`
  padding: 1rem;
  margin: 0;
  width: 100%;
  background:${pure};
`;
const FormField = styled.div`
  margin: 3rem 0;
`;
const ButtonContainer = styled.div`
    margin:1rem 0;
`
export function Signup(props) {
    const [name, nameInput] = useLabledIconInput({ type: "text", name: "signup_name", placeholder: "Your name", icon: "fa-user" });
    const [email, emailInput] = useLabledIconInput({ type: "email", name: "signup_email", placeholder: "Your Email", icon: "fa-envelope" });
    const [password, passwordInput] = useLabledIconInput({ type: "password", name: "signup_password", placeholder: "Password", icon: "fa-lock" });
    const [repeatedPassword, repeatPasswordInput] = useLabledIconInput({ type: "password", name: "signup_repeatPassword", placeholder: "Repeat your password", icon: "fa-lock" });
    function handleSubmit(e) {
        e.preventDefault();
        if (name && email && password && repeatedPassword) {
            if (password === repeatedPassword) {
                console.log("TODO: Execute signUp function");
                // signupUser(props.dispatch, { name, email, password, repeatedPassword });
            } else
                console.log('password do not match');
        }
        else {
            console.log('please fill in all the fields');
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Title Title="Sign Up" style={{fontSize:"2.2rem"}}/>
            <FormField>{nameInput}</FormField>
            <FormField>{emailInput}</FormField>
            <FormField>{passwordInput}</FormField>
            <FormField>{repeatPasswordInput}</FormField>
            <CheckboxInput name="signup_term">
                I agree all statements in <a>Terms of service</a>
            </CheckboxInput>
            <ButtonContainer>
                <AccentButton>Register</AccentButton>
            </ButtonContainer>
        </Form>
    );
}
export function Signin(props) {
    const [email, emailInput] = useLabledIconInput({ type: "email", name: "signin_email", placeholder: "Your Name", icon: "fa-user" });
    const [password, passwordInput] = useLabledIconInput({ type: "password", name: "signin_email", placeholder: "Password", icon: "fa-lock" });
    function handleSubmit(e) {
        e.preventDefault();
        if (email && password) {
            // loginUser(props.dispatch, { email, password });
            console.log(email, password);
        }
        else {
            console.log('please fill in all the fields');
        }
    }
    const fontStyle = {
        fontSize:"2.3rem",
        fontWeight:600
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Title Title="Sign In" fontStyle={fontStyle} />
            <FormField>{emailInput}</FormField>
            <FormField>{passwordInput}</FormField>
            <CheckboxInput name="signup_term">
                Remember me
            </CheckboxInput>
            <ButtonContainer>
                <AccentButton>Log in</AccentButton>
            </ButtonContainer>
        </Form>
    );
}
