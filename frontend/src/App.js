import logo from './logo.svg';
import './App.css';
import { Personal } from './resume/personal';
import { Skills } from './resume/skills';
import { Events } from './events/events';
import { UseStateFunction } from './usestate & useeffect/usestate&useeffect';
import { Pro } from './usestate & useeffect/props';
import { SignIn } from './components/signin/signin/signin';
import { SignUp } from './components/signin/signup';
import { FormErrorMessage } from '@chakra-ui/react';
import { ForgotPassword } from './components/signin/forget password/forgetpassword';
import { api } from './components/signin/actions/api';
import {BrowserRouter,Routes,Route, NavLink} from 'react-router-dom';
import { Studentsdata } from './components/students/student';
function App() {
  const Sample=()=>{

  }
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/signin' element={<SignIn/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/student' element={<Studentsdata/>}/>
  <Route path='/forgetpassword' element={<ForgotPassword/>}/>
</Routes>
</BrowserRouter>
{/* <h1>Hi,I am Pramodhini</h1> */}
{/* <Personal/>
<Skills/>
<Events/>
<UseStateFunction/>
<Pro/> */}
<SignIn/>
<SignUp/>
<ForgotPassword/>
</>
  )
}

export default App;
