import React from 'react'
import { Container, Form, FormButton, FormContent, FormLabel, FormWrap, Icon, Text, FormH1, FormInput } from './SigninElements'

function SignIn() {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Ego Oyibo</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel html='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel html='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn