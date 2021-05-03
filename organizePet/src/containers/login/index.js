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

import usernameImg from "/OrganizePet/OrganizePet/organizePet/src/img/play-with-pet.png"

import passwordImg from "/OrganizePet/OrganizePet/organizePet/src/img/padlock.png"

import fundo from "/OrganizePet/OrganizePet/organizePet/src/img/Welcome.png"

import patinhas from "/OrganizePet/OrganizePet/organizePet/src/img/patinhas1.png"

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background: #396969;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  width: 35%;
  height: 80%;
  padding: 5vh;
  border-radius: 15px;
  background: #fff;
`
const Label = styled.p`
    //font-family: roboto Condensed;
    font-size: 18px;
    float: left;
    margin-left: 15%;
    margin-bottom: auto;
    color: #396969;
`

const DivButton = styled.div`
  margin-top: 27%;
  text-align: center;
`

const FormUser = styled.form`
  margin-top: 7%;
  text-align: center;
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
    margin-bottom: 3%;
    width: 400px;
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

const Text = styled.p`
    /* Esqueci minha senha */

    font-size: 20px;
    text-decoration:none;

    color: #C4AA82;

`

export function User(props) {

    const [name, setUsername] = useState("")
    const [cpf, setCPF] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [errorName, setErrorName] = useState("")
    const [errorCpf, setErrorCpf] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [edit, setEdit] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

    }


    return (
        <Root>
            <header>
                <img src={fundo} style={{position: 'absolute', top: '9%', left: '2%'}}/>
                <img src={patinhas} style={{position: 'absolute', top: '7%', left: '69%'}}/>
            </header>
            
            <Box>

                <FormUser
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <divForm>
                        <Label>
                            <img src={usernameImg} />
                        &nbsp;&nbsp; Username
                        </Label>
                        <StyledTextField
                            //User
                            id="outlined-size-normal"
                            name="name"
                            onBlur={() => { }}
                            onChange={(event) => { setUsername(event.target.value) }}
                            value={name}
                            error={errorName}
                        />
                        <Label>
                            <img src={passwordImg} />
                        &nbsp;&nbsp;  Password
                        </Label>
                        <StyledTextField
                            //Password
                            id="outlined-size-normal"
                            name="cpf"
                            onBlur={() => { }}
                            onChange={(event) => { setCPF(event.target.value) }}
                            value={cpf}
                            error={errorCpf}
                            edit={edit}
                        />
                        <Link to="/password-send" style={{ textDecoration: 'none' }}>
                            <Text onClick={() => ""} type="" style={{ float: 'left', margin: '0 13%' }} > Esqueci minha senha</Text>
                        </Link>
                    </divForm>

                    <DivButton>
                        <ActionButton type="submit" text="Salvar" />
                    </DivButton>

                    <Link to="/create-account" style={{ textDecoration: 'none' }}>
                        <Text onClick={() => ""} type="" text="Voltar"> Não tem cadastro? Se cadastre aqui!</Text>
                    </Link>
                </FormUser>
            </Box>
        </Root>
    )
}

export default User