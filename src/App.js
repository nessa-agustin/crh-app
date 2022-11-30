// import logo from './logo.svg';
import './App.css';

function App() {



  return (
    <div className="container">

      <form className=''>
        <label>
          Username:
          <input type="text" name="name" placeholder='Username'/>
        </label>
        <br/>
        <label>
          Password:
          <input type="password" name="password" placeholder='Password'/>
        </label>
        <br/>
        <input type="submit" value="Login" />
      </form>



    </div>
  );
}

export default App;
