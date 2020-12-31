import React from "react";
import Pigeon from "../../images/dove4.svg";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormInputA,
  Text,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            <img src={Pigeon} alt="gołąb" />
          </Icon>
          <FormContent>
            <Form>
              <FormH1>Napisz do nas!</FormH1>
              <FormLabel htmlFor="name">Imię i nazwisko</FormLabel>
              <FormInput
                type="name"
                required
                placeholder="Twoje imię nazwisko ..."
              />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required placeholder="Twój email" />
              <FormLabel htmlFor="message">Wiadomość</FormLabel>
              <FormInput type="textarea" placeholder="wiadomość" required />
              <FormButton type="submit" value="mailto:puaro@vp.pl">
                Wyślij
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
