import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100vh;
`;

export const PlaylistName = styled.div`
    width:100%;
    background-color:#2D1457;
    height:15%;
    display:flex;
    align-items:center;
    justify-content:center;
    h1{

        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 54px;
        color: #FFFFFF;
    }

`;

export const ContentMenu = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-end;
`;

export const ContentPlaylist = styled.div`
    width:100%;
    height:78%;
    background-color:#2D1457;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;

`;

export const Content = styled.div`
    width:30%;
    height:90%;
    background-color:#2D1457;
    display:flex;
    flex-direction:column;
    margin-left:2rem;
    svg{
        color:#2D1457;
        :hover{
        color: red;
        cursor: pointer;
    }
    }

`;

export const PlayListMusicas = styled.div`
    display:flex;
    
    justify-content:flex-start;
    flex-direction:column;

    h4{
        margin-top:1rem;
        margin-bottom:1rem;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 18px;
        color: #FFFFFF;
    }
`

export const Music = styled.div`
    display:flex;
    align-items:center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    color: #FFFFFF;
    svg{
        color:#FFFFFF;
        margin-right:0.5rem;
    }

`;

export const ButtonAddMusic = styled.div`
    width:8rem;
    height:2rem;
    background-color:#ffffff;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 36px;
    color: #2D1457;
    align-self:flex-start;
    border-radius:7px;
    align-items:center;
    text-align:center;
    margin-top:0.5rem;
    cursor: pointer;
    :hover{
        color: #b9b9b9;
    }
`;
export const ButtonsNextMusic = styled.div`

    width:100%;
    height:7%;
    display:flex;
    background-color:#2D1457;
    h4{
        margin-left:0.5rem;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color:#FFFFFF;
        line-height: 32px;
    }
    svg{
        color:#FFFFFF;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 32px;
        cursor: pointer;
        :hover{
            color: #b9b9b9;
        }
    }

`;

export const StyleTittle = styled.div`
    width:60%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    margin-top:2rem;


`;

export const ButtonFollow = styled.div`
    display:flex;
    svg{
        :hover{
            color:red;
        }
    }
`;
