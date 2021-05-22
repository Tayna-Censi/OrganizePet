
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ActionButton } from '../../components/actionButton';
import { NavBar } from '../../components/navBar';
import { CustomDialog, useDialog } from 'react-st-modal';

import addImg from "/OrganizePet/OrganizePet/organizePet/src/img/add.png"


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
const TitlePets = styled.p`
  margin: 1%;
  font-size: 22px;
  color: #396969;
`

const NavHorizontal = styled.div`
    width: 100vw;
    height: 9vh; 
    background-color: #396969;
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
const PerfilNome = styled.p`
  float: right;
  color: #fff;
  margin-top: 1.5%;
  font-size: 20px;

`

const FormUser = styled.form`
  margin-top: 3%;
  text-align: center;
`

const DivPet = styled.div`
  float: left;
  width: 50%;
  margin-left: 215px; /* Same as the width of the sidenav */
`

const StyledTextField = styled.input`
    border: none;
    border-bottom: ${props => props.error ? "1px solid #a50000;" : "1px solid #e7e7e7"};
    background-color: ${props => props.error ? "#faf0f0;" : "white"};
    pointer-events: ${props => props.edit ? "none" : "true"};
    height: 40px;
    color: rgb(148, 148, 148);
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 2%;
    width: 300px;
    padding-left: 12px;
    &:focus {
        outline-color: transparent;
        border-bottom: 1px solid #C4AA82;
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        color: rgb(148, 148, 148);
        font-size: 14px;
        font-weight: normal;
        height: 20px;
        line-height: 20px;
        width: 248px;
    }
`;

const Label = styled.p`
    //font-family: roboto Condensed;
    font-size: 18px;
    float: left;
    margin-left: 15%;
    margin-bottom: auto;
    color: #396969;
`
const DivButton = styled.div`
  margin-top: 9%;
  text-align: center;
`

const ButtonSend = styled.button`

  width: 100%;
  margin-top: 6%;
  height: 50px;
  background: #DEC092;
  color: white;
  font-size: 18px;
  border: none;
  outline: none;

`

const SelectGender = styled.select`
padding: 11px;
margin: 1%;
font-size: 13px;
border: 1px solid #385959;
float: left;
margin-left: 11%;
`

const DivEvent = styled.div`
  width: 126vh;
  height: 50vh;
  height: 25%;
  background: #DEC092;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px 30px 30px 15px;  margin-top: 14%;
  margin-left: 26%; 
`

const ImageAdd = styled.img `
padding: 12px;
`

const PEvent = styled.p`
  font-size: 18px;
  color: white;
  font-weight: 500;
  margin: 2%;
  float: left;
`

const PAvisos = styled.p`
    font-size: 18px;
    color: red;
    margin: 2%;
    float: left;
    margin-left: 26.5%;
`

export function Home(props) {

  const [name, setUsername] = useState("")
  const [cpf, setCPF] = useState("")
  const [isCheck, setCheck] = useState("")
  const [email, setEmail] = useState("")
  const [errorName, setErrorName] = useState("")
  const [errorCpf, setErrorCpf] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [edit, setEdit] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  function CustomDialogContent() {
    const dialog = useDialog();

    const [value, setValue] = useState();

    return (
      <FormUser
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <divForm>
          <Label>
            Nome do Pet:
          </Label>

          <StyledTextField
            //User
            id="outlined-size-normal"
            name="text"
            onBlur={() => { }}
            onChange={(event) => { setUsername(event.target.value) }}
            value={name}
            error={errorName}
          />
          <Label>
            Dono(a):
          </Label>
          <StyledTextField
            //username
            id="outlined-size-normal"
            name="username"
            onBlur={() => { }}
            onChange={(event) => { setCPF(event.target.value) }}
            value={cpf}
            error={errorCpf}
            edit={edit}
          />
          <Label htmlFor="gender">
            Genero:
          </Label>
          <SelectGender>
            <option value="A">Cachorro</option>
            <option value="B">Gato</option>
          </SelectGender>
        </divForm>
        <DivButton>
          <ButtonSend onClick={() => {
            // Сlose the dialog and return the value
            dialog.close(value);
          }}
          >
            Enviar </ButtonSend>
        </DivButton>
      </FormUser>
    );
  }


  return (

    <Root>
      <NavHorizontal>
        <PerfilButton></PerfilButton>
        <PerfilNome> Tayná Censi </PerfilNome>
      </NavHorizontal>

      <NavBar />

      <DivPet>
        <TitlePets> Seus Pets </TitlePets>

        <PerfilPetButton onClick={async () => {
          const result = await CustomDialog(<CustomDialogContent />, {
            title: 'Cadastrar Animal',
            showCloseIcon: true,
          });
        }}> <ImageAdd src={addImg}/> </PerfilPetButton>
      </DivPet>

      <DivEvent> 
        <PEvent> Eventos Futuros:</PEvent>
      </DivEvent>

      <PAvisos> Avisos:</PAvisos>

    </Root>
  )
}

export default Home