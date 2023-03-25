//import logo from './logo.svg';
//import {Route, Routes, Navigate, BrowserRouter} from "react-router-dom";
import './App.css';
//import { Button } from 'react-bootstrap';
import { PrimaryButton, TestButton } from './Components/Buttons';
import BasicExample from './Components/Forms';
import { Container } from 'react-bootstrap';
//import { FormExample} from './Components/Forms';
//import { TestButton } from './Components/Buttons';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicCardExample from './Components/Cards';
//import { MUIButton } from './Components/Buttons/mui-Buttons';
//import Homepage from './pages/homepage';

function App() {
  return (
  /*  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Homepage />} />
    </Routes>
    </BrowserRouter>
     <Button>Test Button</Button>
    <MUIButton></MUIButton>
*/
    <div className="App">
      <Container className='hello'>
      life is getting toughh
      <TestButton buttonname={"login"}/>
      <TestButton buttonname={"sign up"}/>
      <PrimaryButton></PrimaryButton>
      <BasicExample></BasicExample> 
       <h2 className='newTitle'>This is a card sample!</h2>
       <div className='d-flex justify-content-center'>
       <BasicCardExample></BasicCardExample>
       </div>
     
      </Container>
    </div>
    
//  );
  
  );
  }

export default App;
