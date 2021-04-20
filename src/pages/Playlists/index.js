import React from 'react';

import { AiOutlineSearch } from "react-icons/ai";
import { Container, ContentInputPlaylist, Tittle, StyleMenu } from './styles';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import CardListPlaylist from '../../components/CardListPlaylist'
import Menu from '../../components/Menu';

function Playlists() {
    return (
        <Container>
            <StyleMenu><Menu>Olá Alex</Menu></StyleMenu>
            <ContentInputPlaylist>
            <Tittle>As Melhores PlayLists</Tittle>
                <div style={{width:'50%'}}>
                <InputGroup size="sm" className="mb-1">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm"><AiOutlineSearch/></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Pesquise uma playlist" />
                </InputGroup>
                </div>
            </ContentInputPlaylist>
          <CardListPlaylist nome={'Festival Eletro'} visualizacoes={154785} seguidores={57487878} autor={'Alex'}></CardListPlaylist>
          <CardListPlaylist nome={'Lollipop'} visualizacoes={154785} seguidores={57487878} autor={'Alex'}></CardListPlaylist>
          <CardListPlaylist nome={'Sertanejo 2021'} visualizacoes={154785} seguidores={57487878} autor={'Alex'}></CardListPlaylist>
          <CardListPlaylist nome={'Deep House'} visualizacoes={154785} seguidores={57487878} autor={'Alex'}></CardListPlaylist>
          <CardListPlaylist nome={'Deep House'} visualizacoes={154785} seguidores={57487878} autor={'Alex'}></CardListPlaylist>
        </Container>
    )}
  
  export default Playlists;