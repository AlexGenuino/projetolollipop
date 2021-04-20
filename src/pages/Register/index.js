import React from 'react';
import { Container, ContentLogo, ContentMenu, ContentForm, ButtonForm } from './styles';
import Logo from '../../components/icons/Logo';
import Menu from '../../components/Menu';
import Form from 'react-bootstrap/Form';

const Register = () => {
  return (
  
  <Container>
      <ContentMenu>
            <Menu>Entrar</Menu>
        </ContentMenu>
        <ContentLogo>
            <Logo/>
            <div style={{width:'30%'}}>
              <h1>Crie sua conta gratuitamente e crie suas próprias playlists!</h1>
            </div>
        </ContentLogo>
        <ContentForm>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Digite seu Email" />
            </Form.Group>
            <Form.Group controlId="formGroupName">
              <Form.Control type="name" placeholder="Digite seu Nome" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Digite sua Senha" />
            </Form.Group>
          </Form>
          <ButtonForm>
              <a>Registrar-se</a>
          </ButtonForm>
        </ContentForm>
  </Container>
  
  
  );
}

export default Register;