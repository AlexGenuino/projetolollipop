import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100vh;
    background-color: #2D1457;
`;

export const StyleMenu = styled.div`
    width:100%;
    height:10%;
    display:flex;
    justify-content:flex-end;
`;

export const Content = styled.div`
    width:100%;
    height:90%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`

export const ContentForm = styled.div`

    display:flex;
    justify-content:center;
    width:100%;
    align-items:center;
    flex-direction: column;
    h1{ 
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 33px;
            text-align: center;
            color: #FFFFFF;
            margin-top:2rem;
            margin-bottom:2rem;
            
        }

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

export const ContentLogo = styled.div`

    width:100%;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    :hover{
                color: #b9b9b9
            }
    h1{ 
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 33px;
            text-align: center;
            color: #FFFFFF;
            margin-top:2rem;
            margin-bottom:2rem;
            
        }
`;