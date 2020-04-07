import React from 'react';
import { Container, Row, Col } from 'reactstrap';
//import Header from './components/header.component'
import Calculator from './components/Calculator.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
    <div className="row text-center">
      <div className="col-md"><Calculator /></div>
    </div>
    </Container>
  );
  }

  function App_bk() {
    return (
      <Container>
      <div className="row text-center">
        <div className="col-md">.col</div>
      </div>
      </Container>
    );
    }

export default App;
