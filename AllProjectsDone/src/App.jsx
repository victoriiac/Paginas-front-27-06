import { Cadastro } from "./Cadastro/Cadastro";
import { ProjetoEdit } from "./Editar Projeto/EditProjeto";
import { Home } from "./Home";
import { Login } from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    
    <>
    {/* <BrowserRouter> */}
         <Navbar />

     {/* <Routes> */}
     <Home/>
     {/* <Cadastro/> */}

     {/* <ProjetoEdit/> */}

     {/* <Login/> */}

     {/* </Routes>
     </BrowserRouter> */}
     </>
  )
}

export default App;
