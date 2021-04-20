import React, { useState } from 'react';
import { Container, BtnClick, Item, MenuItens, Menua } from './styles';
import { BsChevronCompactDown } from "react-icons/bs";
import { useHistory  } from "react-router-dom";

const Menu = (props) => {
  const history = useHistory()

  const [value, setValue] = useState('none');

  const handlerMenuOpen = () => {
      if(value == 'none'){
        setValue('flex')
      }else{
        setValue('none')
      }
  }

  return (
    <Container>
        <Menua>
        <BtnClick onClick={() => history.push('/login')}>{props.children}</BtnClick>
        <BsChevronCompactDown onClick={handlerMenuOpen} ></BsChevronCompactDown>
        </Menua>
        <MenuItens style={{display:`${value}`}}>
            <Item onClick={() => history.push('/newplaylist')}>Nova Playlist</Item>
            <Item onClick={() => history.push('/mylistplaylist')}>Minhas Playlists</Item>
            <Item onClick={() => history.push('/playlists')}>Playlists Publicas</Item>
        </MenuItens>
    </Container>
  )
}

export default Menu;