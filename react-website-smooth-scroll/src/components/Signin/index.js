import React from 'react';
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from "./SigninElements";

/*
export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
}

function handleSubmit(e) {
    e.preventDefault()
};
*/


const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">ares</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email"  required />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">Continue</FormButton>
                            <Text to="/">Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
};

export default SignIn;