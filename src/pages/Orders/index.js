import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Logo2 from "../../assets/logo2.png"
import Trash from "../../assets/trash.png"

import { Container, Image, Label, Pedido, Cliente, BtnTrash, DadosPedido } from "./styles";
import H1 from "../../components/Title";
import Content from "../../components/Content";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

function Orders() {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get("http://localhost:3001/orders")
      setOrders(newOrders)
    }
    fetchOrders()
  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`)
    const newOrders = orders.filter(order => order.id !== orderId)
    setOrders(newOrders)
  }

  function goBackPage() {
    navigate('/')
  }

  return (

    <Container>
      <Content>
        <Image alt="logo-imagem" src={Logo2} />
        <ContainerItens>
          <H1>Pedidos</H1>

          {orders.map((order) => (
            <div key={order.id}>
              <Label>
                <DadosPedido>
                  <Pedido>{order.order}</Pedido>
                  <Cliente>{order.clientName}</Cliente>
                </DadosPedido>
                <BtnTrash onClick={() => deleteOrder(order.id)}>
                  <img src={Trash} alt="lata-de-lixo" />
                </BtnTrash>
              </Label>
            </div>
          ))}

          <Button isBack={true} onClick={goBackPage}>
            Voltar
          </Button>

        </ContainerItens>
      </Content>
    </Container>
  )
}

export default Orders



