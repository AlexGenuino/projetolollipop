import styled from 'styled-components';

export const Container = styled.div`
    width: 156px;
    background-color:#ffff;
    border-radius:0px 0px 7px 7px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-right:2rem;
    text-decoration:none;
    position:fixed;
    svg{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 16px;
        color: #2D1457;
    }
`;

export const Menua = styled.div`
        height: 3rem;
        display:flex;
        align-items:center;
`;

export const BtnClick = styled.a`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #2D1457;
    padding:1rem;
    text-decoration:none;
    cursor: pointer;
    :hover{
        color: #b9b9b9;
        text-decoration:none;
    }

`;

export const MenuItens = styled.div`
    width: 156px;
    height: 100px;
    background-color:#ffff;
    border-radius:0px 0px 7px 7px;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;

`;

export const Item = styled.a`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #2D1457;
    text-decoration:none;
    cursor: pointer;
    :hover{
        color: #b9b9b9;
        text-decoration:none;
    }

`;
