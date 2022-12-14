import { useNavigate } from 'react-router-dom';

export function Login () 
{
    const navigate = useNavigate();    
    async function submitForm (event : React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const body = Object.fromEntries(formData.entries());
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <input name="email" type="email" required placeholder="Email"/> 
                <input name="password" type="password" required placeholder="Password" />         
                <button type="button" >Login</button>
                <button type="button" onClick={() => navigate('/register')}>Go Register</button>
                <button type="button" onClick={() => navigate('/update')}>Go Update</button>
            </form>
        </>
    )
}
