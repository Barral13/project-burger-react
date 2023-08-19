import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Logo from "../../assets/logo.png"

import { Container, Image, LabelInput, Input, AreaBtn, BtnOrder } from "./styles";
import H1 from "../../components/Title";
import Content from "../../components/Content";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

function Home() {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()
  const inputOrder = useRef()
  const inputClientName = useRef()

  async function addNewOrder() {

    const orderValue = inputOrder.current.value.trim();
    const clientNameValue = inputClientName.current.value.trim();

    if (!orderValue || !clientNameValue) {
      alert("Por favor, preencha corretamente todos os campos.");
      return;
    }

    const { data: newOrder } = await axios.post("http://localhost:3001/orders",
      {
        order: inputOrder.current.value,
        clientName: inputClientName.current.value
      })

    setOrders([...orders, newOrder])

    inputOrder.current.value = "";
    inputClientName.current.value = "";

    navigate('pedidos')
  }

  function nextPage() {
    navigate('/pedidos')
  }

  return (
    <Container>
      <Content>

        <Image alt="logo-imagem" src={Logo} />
        <ContainerItens>

          <H1>Faça seu pedido!</H1>

          <LabelInput>Pedido</LabelInput>
          <Input ref={inputOrder} placeholder="Insira o pedido" />

          <LabelInput>Nome do cliente</LabelInput>
          <Input ref={inputClientName} placeholder="Informe seu nome" />

          <Button onClick={addNewOrder}>
            Novo Pedido
          </Button>

          <AreaBtn>
            <BtnOrder onClick={nextPage}>Pedidos</BtnOrder>
          </AreaBtn>

        </ContainerItens>
      </Content>
    </Container>
  )
};

export default Home;