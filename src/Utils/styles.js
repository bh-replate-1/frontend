import React from 'react'
import styled from 'styled-components'
import '../../src/App.css'


export const StyledButton = styled.button`
color:ivory;
font-family: 'Heebo', sans-serif;
background-color:#ff5e00;
border:none;
padding:15px;
margin:20px auto;
width:200px;
`

export const StyledInput = styled.input`
width:190px;`

export const CenterDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
background-color:white;
width:30%;
margin:20px auto;
border:3px #ff5e00 solid;
padding:10px;

a {
    text-decoration:none;
    color:black;
    text-align:center;
}
`

export const RedSpan = styled.span`
color: red;
`

export const Details = styled.header`

background-color:#ff5e00;
color:white;
min-height:10vh;
display:flex;
justify-content:space-around;
align-items:center;

a {
  text-decoration:none;
  color:ivory;
}
`

export const StyledFooter = styled.footer`
background-color:#ff5e00;
color:white;
min-height:10vh;
display:flex;
justify-content:space-around;
align-items:center;

a {
  text-decoration:none;
  color:ivory;
}

`