import './App.css';
import React, { Component } from 'react';
import './App.css';
import QrContainer from './components/QrReader.js'
import { Container, Row } from 'react-bootstrap';


class App extends Component{

  render(){
    return(
    <Container className="my-5">
      <Row><h1 class="text-center text-white">QR Lector</h1></Row>
      <Row><h4 class="text-center text-white my-3">This is my own QR lector</h4></Row>
      <Row><QrContainer></QrContainer></Row>
    </Container>
    );
  }
}
export default App;
