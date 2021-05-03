import React, { Component } from 'react';
import styled from 'styled-components'

const ButtonPrimary = styled.button`
    width: 269px;
    height: 60px;

    background: #396969;
    color: #fff;
    font-family: Roboto Condensed;
    font-size: 24px;
    border: 0.5px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 30px;
    &:hover {
        background: #2E5252;
    }
`


const ButtonSecundary = styled.button`
  background: #fff;
  border-radius: 4px;
  color: #2E5252;
  margin-left: 2%;
  font-size: 16px;
  font-weight: bold;
  border:none;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16);
  line-height: 24px;
  text-align: center;
  outline:none;
  padding: 1vh 4vh;
  &:hover {
    background: #ccc;
    color: #fff;
  };
  float: left
`

export function ActionButton({ type, text }) {
  return (
      <ButtonPrimary type={type}> {text} </ButtonPrimary>
  )
}

export function ActionButtonSecundary({ type, text, onClick }) {
    return (
        <ButtonSecundary onClick={() => { onClick() }} type={type}> {text} </ButtonSecundary>
    )
  }