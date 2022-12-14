import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/login';
import { Register } from '../components/register';
import { Update } from '../components/update';

export const Router = () => {
    return <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='/register' element={<Register/>}/> 
        <Route path='/update' element={<Update/>}/> 
       
    </Routes> 
}