
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ActionButton } from '../../components/actionButton';
import { NavBar } from '../../components/navBar';
import { CustomDialog, useDialog } from 'react-st-modal';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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

const AddVacina = styled.button`
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

const DivPet = styled.div`
  float: left;
  width: 50%;
  margin-left: 215px; /* Same as the width of the sidenav */
`

const TitlePets = styled.p`
  margin: 1%;
  font-size: 22px;
  color: #396969;
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

const ImageAdd = styled.img`
padding: 12px;
`

const PEvent = styled.p`
    font-size: 18px;
    color: white;
    background: #396969;
    font-weight: 500;
    margin: 2%;
    float: left;
    border-radius: 50px;
    padding: 11px;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
`

const PVacina = styled.p`
    font-size: 18px;
    max-width: 90px;
    color: white;
    background: #DEC092;
    font-weight: 500;
    margin: 2%;
    float: left;
    border-radius: 50px;
    padding: 11px;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
`

const DivStatus = styled.div`
display: flow-root;
`

const DivVacina = styled.div`
display: grid;
`

const InputDate = styled.input `
    padding: 12px;
`

const DivEvent = styled.div`
    width: 142vh;
    height: 50%;
    background: #fff;
    margin-top: 14%;
    margin-left: 26%;
    border-radius: 30px;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
`

const PDiaVacina = styled.p`
    max-width: 150px;
`

const PText = styled.p`
    font-size: 28px;
    color: #396969;
    margin-top: 18%;
`

export function consulta(props) {


    const handleSubmit = (e) => {
        e.preventDefault();

    }


    function CustomDialogVacina() {
        const dialog = useDialog();

        const [value, setValue] = useState();

        return (
            <FormUser
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <divForm>
                    <Label htmlFor="dateP">
                        Aplicado Dia:
                    </Label>

                    <InputDate type="date" name="dateP"></InputDate>

                    <Label htmlFor="gender">
                        Tipo:
                    </Label>
                    <SelectGender>
                        <option value="A">V3</option>
                        <option value="B">V4</option>
                        <option value="B">V5</option>
                        <option value="B">Vermifugo</option>
                        <option value="B">Anti-pulga</option>
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
                    />
                    <Label>
                        Dono(a):
          </Label>
                    <StyledTextField
                        //username
                        id="outlined-size-normal"
                        name="username"
                        onBlur={() => { }}
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

            <PText> Em breve!!!</PText> 


        </Root>
    )
}

export default consulta