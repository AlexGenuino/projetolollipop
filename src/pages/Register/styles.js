import styled from 'styled-components';

export const Container = styled.div`

    background-color: #2D1457;
    height: 100vh;
    width:100%;
`;

export const ButtonForm = styled.div`
    width:10rem;
    height:2.5rem;
    background: #FFFFFF;
    border-radius: 7px;
    display: flex;
    align-items:center;
    justify-content: center;
    margin-top:3rem;
    color: #2D1457;
    :hover{
        color: #b9b9b9
    }
    a{
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
        text-decoration:none;
        cursor: pointer;
    }
`;

export const ContentMenu = styled.div`
    flex:1;
    background-color: #2D1457;
    display:flex;
    justify-content:flex-end;
    height:20%;

`;

export const ContentForm = styled.div`

    display:flex;
    justify-content:center;
    width:100%;
    height:50%;
    align-items:center;
    flex-direction: column;

`;

export const ContentLogo = styled.div`

    width:100%;
    height:30%;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    
    h1{ 
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 33px;
            text-align: center;
            color: #FFFFFF;
            margin-top:2.5rem;   
        }
`;

