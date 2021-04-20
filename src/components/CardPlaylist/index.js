import React from 'react';
import { Container, Card, CardContent, NomePlaylist,  Seguidores} from './styles';
import { AiFillPlaySquare } from "react-icons/ai";


const CardPlaylist = ({imagen, nome, seguidores}) => {
  return (
    <Container>
        <Card>
            <img src={imagen} style={{
                width: '10rem',
                height: '6rem',
                borderRadius: '7px',
            }}/>
        </Card>
        <CardContent>
            <NomePlaylist>{nome}</NomePlaylist>
            <Seguidores>Seguidores: {seguidores}</Seguidores>
        </CardContent>

    </Container>
  );
}

export default CardPlaylist;