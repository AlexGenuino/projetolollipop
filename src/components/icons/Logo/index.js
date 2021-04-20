import React from 'react';
import LogoPNG from '../../../assets/Lollipop-logo.png';
import { useHistory  } from "react-router-dom";

function Logo () {
    const history = useHistory()
    return (
        <div>
            <img style={{cursor:'pointer'}}onClick={() => history.push('/')} src={LogoPNG}></img>
        </div>
    )
}

export default Logo