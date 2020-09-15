import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <form>
          <h1>Sign in</h1>
          <input type="email" placeholder="e-mail" aria-label="E-mail" />
          <input type="password" placeholder="password" aria-label="Password" />
          <button type="submit">Go!</button>
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
