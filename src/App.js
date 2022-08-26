import logo from './logo.svg';
import './App.css';

const handleSubmit = (e) => {
  e.preventDefault();
  alert('Registered Successfully!');
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3 id="title">REGISTRATION</h3>
        <form action="#" method="post" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="username">
            Username
          </label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">
            Password
          </label>
          <input type="password" id="password" name="password" />
          <button id="registerBtn">Register</button>
          </form>
        </div>
    </div>
  );
}

export default App;
