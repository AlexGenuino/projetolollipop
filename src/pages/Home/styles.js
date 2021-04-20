import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    width: 100%;
    height:40%;
    background-color: #2D1457;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const ContentMenu = styled.div`
    flex:1;
    background-color: #2D1457;
    display:flex;
    justify-content:flex-end;
    height:10%;

`;

export const Container = styled.div`
    
    height: 200vh;
`;

export const StyleKeyBoard = styled.div`
    svg{
        font-style: normal;
        font-weight: normal;
        font-size: 72px;
        line-height: 72px;
        color: #FFFFFF;
        cursor: pointer;
    :hover{
        color: #b9b9b9
    }
    }
`;

export const StyleText = styled.div`
        h1{ 
            
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 33px;
            text-align: center;
            color: #FFFFFF;
        }
        width:30%;
        margin-top: 40px;
`;

export const ContentPlaylist = styled.div`
    width:100%;
    height:20%;
    background-color: #2D1457;
    display:flex;
    align-items: center;
    justify-content: center;
    h1{
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 48px;
        text-align: center;
        color: #FFFFFF;
    }
`;

export const ContentInputPlaylist = styled.div`
    width:100%;
    height:10%;
    background-color: #2D1457;
    display:flex;
    justify-content:center;
    svg{
        color: #2D1457;
    }
`;


export const StyleTextH4 = styled.div`
    display:flex;
    justify-content:flex-end;
    h4{
            margin-top:1rem;
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 27px;
            text-align: center;
            color: #FFFFFF;
        }
`;

export const ListPlaylists = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100%;
    height:20%;
    background-color: #2D1457;
`;