import styled from 'styled-components';

export const Container = styled.div`
    width:60%;
    height:6rem;
    background: linear-gradient(180deg, #941ABF 0%, rgba(82, 44, 147, 0) 100%), #2D1457;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    margin:0.5rem;
`;

export const NomePlaylist = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 42px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    :hover{
        color: rgba(207, 209, 210, 0.5);
    }
`;

export const ContentPlaylist = styled.div`
    display:flex;
    height:100%;
    flex-direction:column;
    justify-content:space-around;

`;

export const Visualizacoes= styled.div`

    display:flex;
    flex-direction:row;
    align-items:center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: #FFFFFF;
    svg{
        margin-right:0.5rem;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
        line-height: 35px;
        color: rgba(207, 209, 210, 0.5);
    }
`;

export const Seguidores= styled.div`

    display:flex;
    flex-direction:row;
    align-items:center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: #FFFFFF;
    svg{
        margin-right:0.5rem;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
        line-height: 35px;
        color: rgba(207, 209, 210, 0.5);
    }
`;

export const Autor= styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 10px;
    color: #FFFFFF;
`;
