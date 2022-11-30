// import '../App.css';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    let userInit = {username: "", password: ""};
    const [user, setUser] = useState(userInit);


    function submitForm(e){
       e.preventDefault();

        if(user.username === "testuser" && user.password === "password"){
            localStorage.setItem("auth", true);
            navigate('/list')
        }else{
            alert("Invalid credentials")
            setUser(userInit)
        }


    }

    function getChanges(field){
        return (e) => setUser((user) => ({...user, [field]: e.target.value}))
    }




    return (
        <div className="container">

            <form onSubmit={(e) => submitForm(e)}>
                <label>
                    Username:
                    <input type="text" value={user.username} placeholder='Username' onChange={getChanges('username')}/>
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={user.password} placeholder='Password' onChange={getChanges('password')}/>
                </label>
                <br />
                <input type="submit" value="Login" />
            </form>



        </div>
    )
}


export default Login