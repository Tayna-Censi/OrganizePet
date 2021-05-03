
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ActionButton } from '../../components/actionButton';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";


const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;

`
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

const NavHorizontal = styled.div`
    width: 100vw;
    height: 9vh; 
    background-color: #396969;
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

const PerfilButton = styled.button`
  width: 45px;
  height:0;
  padding-bottom: 41px;
  border-radius: 50%;
  border:1px solid #C4AA82;
  overflow:hidden;
  float: right;
  margin: 1%;
        
  background: #DEC092; 
  box-shadow: 0 0 3px gray;
`

const PerfilPetButton = styled.button`
  width: 75px;
  height:0;
  padding-bottom: 70px;
  border-radius: 50%;
  border:1px solid #C4AA82;
  overflow:hidden;
  margin: 3%;
        
  background: #DEC092; 
  box-shadow: 0 0 3px gray;
`

const PerfilNome = styled.p`
  float: right;
  color: #fff;
  margin-top: 1.5%;
  font-size: 20px;

`
const TitlePets = styled.p`
  margin: 1%;
  font-size: 22px;
  color: #396969
`

const DivPet = styled.div`
  float: left;
  width: 50%;
  margin-left: 215px; /* Same as the width of the sidenav */
`

export function User(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <Root>
            <NavHorizontal>
                <PerfilButton></PerfilButton>
                <PerfilNome> Tayná Censi </PerfilNome>

            </NavHorizontal>
            <VerticalMenu>
                <ItemHome href="#"> Home </ItemHome>
                <Itens href="#"> Vacinas </Itens>
                <Itens href="#"> Exames </Itens>
                <Itens href="#"> Consultas </Itens>
                <Itens href="#">Dicas e Curiosidades</Itens>
            </VerticalMenu>

            <DivPet>
                <TitlePets> Seus Pets </TitlePets>
                <PerfilPetButton></PerfilPetButton>
                <PerfilPetButton></PerfilPetButton>
                <PerfilPetButton></PerfilPetButton>
                <PerfilPetButton></PerfilPetButton>
            </DivPet>

        </Root>
    )
}

export default User