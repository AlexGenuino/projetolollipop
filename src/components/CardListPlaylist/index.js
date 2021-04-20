import React from 'react';
import { Container, NomePlaylist, ContentPlaylist, Visualizacoes, Seguidores, Autor  } from './styles';
import { BiShow, BiHeart } from "react-icons/bi"
import { useHistory  } from "react-router-dom";
const CardListPlaylist = ({nome, visualizacoes, seguidores, autor}) => {
  const history = useHistory()
  return (

    <Container>
        <div style={{width:'50%'}}>
        <NomePlaylist onClick={() => history.push('/playersong')}>{nome}</NomePlaylist>
        </div>
        <ContentPlaylist>
            <Visualizacoes><BiShow/>{visualizacoes}</Visualizacoes>
            <Seguidores><BiHeart/>{seguidores} Seguidores</Seguidores>
            <Autor>Author: {autor}</Autor>
        </ContentPlaylist>
    </Container>

  );
}

export default CardListPlaylist;