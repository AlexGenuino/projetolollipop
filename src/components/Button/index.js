import React from 'react';
import { ButtonStyle, TextStyle } from './styles';


function Button(props ) {
  return ( 
  <ButtonStyle {...props}>
      <TextStyle>
      {props.children}
      </TextStyle>
  </ButtonStyle>
  );
}

export default Button;