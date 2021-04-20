import React from 'react';
import { Container, StyleMenu, ContentLogo } from './styles';
import Menu from '../../components/Menu'
import Logo from '../../components/icons/Logo'
import Playlist from '../../components/CardListPlaylist'
import { useHistory  } from "react-router-dom";

const MyPlaylists = () => {
    
    const history = useHistory()

  return (

    <Container>
        <StyleMenu><Menu>Olá Alex</Menu></StyleMenu>
        <ContentLogo>
            <Logo/>
            <div style={{width:'30%'}}>
              <h1>Olá Alex essas são as suas playlists</h1>
            </div>
        </ContentLogo>
        <Playlist nome={'Lollipop #1'} visualizacoes={158000} seguidores={582545} autor={'Alex'}></Playlist>
    </Container>

  );
}

export default MyPlaylists;