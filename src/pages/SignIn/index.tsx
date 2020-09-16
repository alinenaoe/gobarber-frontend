import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <form>
          <h1>Sign in</h1>

          <Input
            name="email"
            icon={FiMail}
            type="email"
            placeholder="e-mail"
            aria-label="E-mail"
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="password"
            aria-label="Password"
          />
          <Button type="submit">Go!</Button>
          <a href="forgot">Forgot your password?</a>
        </form>

        <a href="register">
          <FiLogIn />
          Don&apos;t have an account? Sign up!
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
