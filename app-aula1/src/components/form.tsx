
import React, { useState } from 'react'; 
import {Modal} from "./modal";
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { User, UserUser } from './userdata';

export function Form () 
{
    const {userData, setUserData} = UserUser();

    const [modalOpened, setModalOpened] = useState(false);
    const [msg, setMsg] = useState('');
    const Formulario = styled.form`
        border : 1px solid #0000ff;
        padding : 4px;
        font-size : 23px;
    `
    async function submitForm (event : React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const body = Object.fromEntries(formData.entries());
        console.log(body);
        setModalOpened(true);
  

        // Estou sem o back aqui em SJC. O fetch está montado mas não estou usando

        // try {
        //     const res = await fetch('http://192.168.15.15:8000/account/', {
        //         method: 'POST',
        //         headers: { 'Content-type': 'application/json' },
        //         body: JSON.stringify(body)});
        //     if (res.ok === true){
        //         console.log(`Res: `, res);
        //         setMsg('Deu bom');
        //     }
        // }catch (err){
        //     console.log(err)
        //     setMsg('Deu ruim');
        // };

        setUserData({username: 'rogerio',
                    id:'1',
                    token:'ccccc'});


    }

    return (
        <>
            <Modal opened={modalOpened} msg={userData.username} handleCloseModal={setModalOpened} />
            <Formulario onSubmit={submitForm}>
                <input name="email" type="email" required placeholder="Email"/> 
                <input name="name" required placeholder="Name" pattern="^[A-Z][a-z]{1,}( [A-Z][a-z]{1,}){0,}$"/>
                <input name="password" type="password" required placeholder="Password" />         
                <Button type="submit" variant="contained">Cadastrar</Button>
            </Formulario>
        </>
    )
}
