import logo from './logo.svg';
import {Route, Routes, Navigate, BrowserRouter} from "react-router-dom";
import './App.css';
import { Button } from 'react-bootstrap';
import { TestButton } from './Components/Buttons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MUIButton } from './Components/Buttons/mui-Buttons';
import Homepage from './pages/homepage';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Homepage />} />
    </Routes>
    </BrowserRouter>

   /* <div className="App">
    React App Demo

    <Button>Test Button</Button>

    <TestButton buttonname={"login"}/>
    <TestButton buttonname={"sign up"}/>
    <MUIButton></MUIButton>
    </div>
    
  );
  */
  )
  };

export default App;
