/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Required field'),
        email: Yup.string()
          .required('Required field')
          .email('Invalid e-mail, please type again'),
        password: Yup.string().min(
          6,
          'Password must contain at least six characters',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Sign up</h1>

          <Input
            name="name"
            icon={FiUser}
            type="text"
            placeholder="Name"
            aria-label="Name"
          />
          <Input
            name="email"
            icon={FiMail}
            type="email"
            placeholder="E-mail"
            aria-label="E-mail"
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
            aria-label="Password"
          />
          <Button type="submit">Register</Button>
        </Form>

        <a href="signin">
          <FiArrowLeft />
          Back to login page
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
