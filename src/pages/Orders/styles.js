import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(0deg,
        rgba(0,0,0,1) 0%,
        rgba(43,42,42,1) 100%);
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 300px;
    margin-top: 50px;
`;

export const Label = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    letter-spacing: 1px;
    padding: 15px;
    margin: 2px;
    
    background: #121212;
    height: 80px;
    border-radius: 7px;
`;

export const DadosPedido = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Pedido = styled.p `
    font-size: 12px;
        color: #f2f2f2;
`;

export const Cliente = styled.p`
    font-size: 15px;
`;

export const BtnTrash = styled.button`
    background: #121212;
    border: none;
    cursor: pointer;
`;
