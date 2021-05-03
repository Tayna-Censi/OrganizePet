import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ActionButton } from '../../components/actionButton';
import { ActionButtonSecundary } from '../../components/actionButton';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import fundo from "/OrganizePet/OrganizePet/organizePet/src/img/Welcome.png"

import patinhas from "/OrganizePet/OrganizePet/organizePet/src/img/patinhas1.png"

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
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
  background: #396969;
`
const Label = styled.p`
    //font-family: roboto Condensed;
    font-size: 18px;
    float: left;
    margin-left: 15%;
    margin-bottom: auto;
    color: #fff;
`

const DivButton = styled.div`
  margin-top: 27%;
  text-align: center;
`

const FormUser = styled.form`
  margin-top: 33%;
  text-align: center;
`

const StyledTextField = styled.input`
    border: none;
    border-bottom: ${props => props.error ? "1px solid #a50000;" : "1px solid #e7e7e7"};
    background-color: ${props => props.error ? "#faf0f0;" : "#396969"};
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
                <Link to="/">
                    <ActionButtonSecundary onClick={() => ""} type="" text="Voltar"></ActionButtonSecundary>
                </Link>
                <FormUser
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <divForm>
                        <Label>
                         e-mail&nbsp;&nbsp;&nbsp;
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
                
                    </divForm>
                    <DivButton>
                        <ActionButton type="submit" text="Enviar" />
                    </DivButton>
                </FormUser>
            </Box>
        </Root>
    )
}

export default User