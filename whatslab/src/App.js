import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import React from 'react';
import EnviarMensagens from "./components/EnviarMensagem"

const MainContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:50vw;
border:1px solid black;
margin:auto;
background: lightgray;
`



class App extends React.Component {
  render () {
    return (
      <MainContainer>
       <EnviarMensagens/>
     
        </MainContainer>
    );
  }  
 
}

export default App;
