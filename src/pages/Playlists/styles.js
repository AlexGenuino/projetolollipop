import styled from 'styled-components';

export const Container = styled.div`
        display: flex;
        width: 100%;
        background-color: #2D1457;
        flex-direction:column;
        align-items:center;
`;

export const StyleMenu = styled.div`
    width:100%;
    height:10%;
    display:flex;
    justify-content:flex-end;
`;

export const ContentInputPlaylist = styled.div`
        width:100%;
        height:30%;
        background-color: #2D1457;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction: column;
        margin-bottom:1rem;
        svg{
                color: #2D1457;
        }
`;

export const Tittle = styled.div`
        padding:2rem;
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 48px;
        text-align: center;
        color: #FFFFFF;
`;