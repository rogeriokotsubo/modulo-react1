
import React, { useState } from 'react'; 
import {Modal} from "./modal";

export function Form () 
{
    const [modalOpened, setModalOpened] = useState(false);
    const [msg, setMsg] = useState('');

    async function submitForm (event : React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const body = Object.fromEntries(formData.entries());
        console.log(body);
        setModalOpened(true);
  
        try {
            const res = await fetch('http://192.168.15.15:8000/account/', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)});
            if (res.ok === true){
                console.log(`Res: `, res);
                setMsg('Deu bom');
            }
        }catch (err){
            console.log(err)
            setMsg('Deu ruim');
        };
    }

    return (
        <>
            <Modal opened={modalOpened} msg={msg} handleCloseModal={setModalOpened} />
            <form onSubmit={submitForm}>
                <input name="email" type="email" required placeholder="Email"/> 
                <input name="name" required placeholder="Name" pattern="^[A-Z][a-z]{1,}( [A-Z][a-z]{1,}){0,}$"/>
                <input name="password" type="password" required placeholder="Password" />         
                <button>Cadastrar</button>
            </form>
        </>
    )
}
