import React from 'react';
import { Container, StyleMenu, Content, ContentForm, ButtonForm, ContentLogo } from './styles';
import Menu from '../../components/Menu'
import Logo from '../../components/icons/Logo'
import Form from 'react-bootstrap/Form';

const NewPlaylist = () => {
  return (
    <Container>
        <StyleMenu><Menu>Olá Alex</Menu></StyleMenu>
        <Content>
        <ContentLogo>
            <Logo/>
            <div style={{width:'30%'}}>
              <h1>Criar Nova Playlist</h1>
            </div>
        </ContentLogo>
        <ContentForm>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control placeholder="Digite o nome da playlist" />
            </Form.Group>
            <h1>Escolha a capa da sua Playlist!</h1>
            <Form.Group>
                <Form.File id="exampleFormControlFile1"/>
            </Form.Group>
          </Form>
          <ButtonForm>
              <a>Criar</a>
          </ButtonForm>
        </ContentForm>
        </Content>
    </Container>
  );
}

export default NewPlaylist;