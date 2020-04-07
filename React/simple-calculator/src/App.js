import React from 'react';
import { Container} from 'reactstrap';
//import Header from './components/header.component'
import Calculator from './components/Calculator.component';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Toast, ToastBody, ToastHeader } from 'reactstrap';

function App() {
  return (
    <Container>
    <div className="row text-center">
    <div className="col-md">
    {/*
      <Toast>
            <ToastHeader>
              Reactstrap
            </ToastHeader>
            <ToastBody>
              This is a toast on a white background — check it out!
            </ToastBody>
      </Toast>
      */
    }
    </div>
    </div>

    <div className="row text-center">
      <div className="col-md"><Calculator /></div>
    </div>
    
    </Container>
  );
  }



export default App;
