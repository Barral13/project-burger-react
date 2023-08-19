import styled from "styled-components"

export const Button = styled.button`
    margin: 32px 0;
    height: 53px;
    border-radius: 4px;
    background: ${props => props.isBack ? '#696969' : '#CD853F'};
    color: ${props => props.isBack ? '#000000' : '#f2f2f2'};

    border: none;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    transition: 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
        transform: scale(103%);
    };

    &:active {
        opacity: 0.3;
        transform: scale(95%);
    };
`;