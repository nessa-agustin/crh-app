import '../App.css';


function Login() {


    return (
        <div className="container">

            <form>
                <label>
                    Username:
                    <input type="text" name="name" placeholder='Username' />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" placeholder='Password' />
                </label>
                <br />
                <input type="submit" value="Login" />
            </form>



        </div>
    )
}


export default Login