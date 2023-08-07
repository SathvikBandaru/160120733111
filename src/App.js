import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from "./components/Home";
import {Train} from "./components/Train";
function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/train" element={<Train></Train>}/>

      
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
