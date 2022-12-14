import { useNavigate } from 'react-router-dom';

export function Update () 
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
                <input name="name" required placeholder="Name" pattern="^[A-Z][a-z]{1,}( [A-Z][a-z]{1,}){0,}$"/>
                <input name="password" type="password" required placeholder="Password" />         
                <button type="button">Alterar</button>
                <button type="button" onClick={() => navigate('/')}>Go Login</button>
                <button type="button" onClick={() => navigate('/register')}>Go Register</button>
            </form>
        </>
    )
}
