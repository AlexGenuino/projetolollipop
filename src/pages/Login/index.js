import React from 'react';
import { Container, ContentLogo, ContentMenu, ContentForm, ButtonForm } from './styles';
import Logo from '../../components/icons/Logo';
import Menu from '../../components/Menu';
import Form from 'react-bootstrap/Form';
import { useHistory  } from "react-router-dom";


const Login = () => {
  const history = useHistory()
  return (

    <Container>
        <ContentMenu>
            <Menu>Entrar</Menu>
        </ContentMenu>
        <ContentLogo>
            <Logo/>
            <div style={{width:'30%'}}>
              <h1>Entre e navegue em playlists ou crie a sua própria playlist!</h1>
            </div>
        </ContentLogo>
        <ContentForm>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Digite seu Email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Digite sua Senha" />
            </Form.Group>
          </Form>
          <ButtonForm>
              <a>Entrar</a>
          </ButtonForm>
          <div>
            <h5 onClick={() => history.push('/register')}>Não possui conta?</h5>
            <h5 onClick={() => history.push('/register')}>Clique aqui para criar!</h5>
          </div>
        </ContentForm>
    </Container>
  )
}

export default Login;