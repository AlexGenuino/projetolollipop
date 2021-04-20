import styled from 'styled-components';

export const Container = styled.div`
    width: 12rem;
    height: 8rem;
    padding:1rem;
    
`;

export const Card = styled.div`
    width: 10rem;
    height: 6rem;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 7px;
    border-color: #FFFFFF;
    cursor: pointer;
    :hover{
        color: #b9b9b9;
    }
    
`;

export const CardContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    cursor: pointer;
    :hover{
        color: #b9b9b9;
    }
    

`;

export const NomePlaylist = styled.h5`
    padding-top:0.5rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    color: #FFFFFF;
    :hover{
        color: #b9b9b9;
    }
`;

export const Seguidores = styled.h6`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
    cursor: pointer;
    :hover{
        color: #b9b9b9;
    }
`;
