import React from 'react';
import { Container, StyleText, StyleKeyBoard, Content, ContentMenu, ContentPlaylist, ContentInputPlaylist, StyleTextH4, ListPlaylists} from './styles';
import Logo from '../../components/icons/Logo';
import Button from '../../components/Button';
import { BsChevronCompactDown } from "react-icons/bs";
import Menu from '../../components/Menu';
import { useHistory  } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { AiOutlineSearch } from "react-icons/ai";
import CardPlaylist from '../../components/CardPlaylist';
import image1 from '../../assets/favicon.png'
import image2 from '../../assets/image1.jpg'
import image3 from '../../assets/image33.jpg'
import image4 from '../../assets/image44.jpg'

function Home() {
  var Scroll = require('react-scroll');
  var scroll = Scroll.animateScroll;

  const history = useHistory()
  return (
      <Container>
          <ContentMenu>
            <Menu>Entrar</Menu>
          </ContentMenu>
          <Content>
          <Logo></Logo>
          <StyleText>
              <h1>Aqui você gerencia e encontra as melhores playlists</h1>
          </StyleText>
          <Button onClick={() => history.push('/login')}style={{margin:40}}>Criar playlist</Button>
          <StyleKeyBoard>
              <BsChevronCompactDown onClick={() => scroll.scrollToBottom('100vh')}/>
          </StyleKeyBoard>
          </Content>
          <ContentPlaylist>
              <div style={{width:'50%'}}><h1>Lollipop, aqui você gerencia e encontra as melhores playlists</h1></div>
          </ContentPlaylist>
          <ContentInputPlaylist>
            <div style={{width:'50%'}}>
              <InputGroup size="sm" className="mb-1">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm"><AiOutlineSearch/></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Pesquise uma playlist" />
              </InputGroup>
              <StyleTextH4><h4>Playlists mais visitadas</h4></StyleTextH4>
            </div>
          </ContentInputPlaylist>
          <ListPlaylists>
            <CardPlaylist imagen={image2} nome={'Festival Eletro'} seguidores={'57487878'}></CardPlaylist>
            <CardPlaylist imagen={image1} nome={'Lollipop #1'} seguidores={'1087878'}></CardPlaylist>
            <CardPlaylist imagen={image3} nome={'Sertanejo 2021'} seguidores={'52555'}></CardPlaylist>
            <CardPlaylist imagen={image4} nome={'Deep House'} seguidores={'30001'}></CardPlaylist>
          </ListPlaylists>
      </Container>
  )}

export default Home;