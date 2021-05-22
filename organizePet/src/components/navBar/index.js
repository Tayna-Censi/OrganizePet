import React, { Component } from 'react';
import styled from 'styled-components'

const Itens = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #fff;
  display: block;
  padding: 12%;
  &:hover {
    color: #C4AA82;
    }
`

const ItemHome = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #396969;
  background-color: #fff;
  display: block;
  padding: 4%;  
  border-radius: 20px 0 0 20px;
`

const VerticalMenu = styled.div`
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #396969;
  overflow-x: hidden;
  padding-top: 20px;
  margin-top: 3.3%;
`

export function NavBar({ type, text }) {
  return (
    <VerticalMenu>
      <ItemHome href="/home"> Home </ItemHome>
      <Itens href="/vacina"> Vacinas </Itens>
      <Itens href="/exames"> Exames </Itens>
      <Itens href="/consulta"> Consultas </Itens>
      <Itens href="/dicas">Dicas e Curiosidades</Itens>
    </VerticalMenu>
  )
}
