import styled  from "styled-components";

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
    margin-right: 15px;
    margin-top: 50px;
`;

export const LabelInput = styled.p`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    letter-spacing: 1px;
    padding-left: 3px;
`;

export const Input = styled.input`
    height: 43px;
    border-radius: 4px;
    border: none;
    width: 100%;
    padding-left: 20px;
    margin-bottom: 23px;
    background: #696969;
    color: #FFFFFF;
    font-size: 13px;
    letter-spacing: 1px;

    &::placeholder {
        color: #363636;
    };
`;

export const AreaBtn = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
`

export const BtnOrder = styled.button`
    color: coral;
    background: black;
    width: 100px;
    border-radius: 4px;
    border: 0.5px solid coral;
    cursor: pointer;
    font-size: 17px;
    letter-spacing: 1px;
    transition: ease-in-out 0.4s;

    &:hover {
        transform: scale(103%);
        opacity: 0.5;
    }
`

