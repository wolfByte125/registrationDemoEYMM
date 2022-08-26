import './App.css';
import { useState } from 'react';

function App() {

// VARIABLE WITH HTML CONTENT
  const heading = <h3 id="title">REGISTRATION</h3>;
  
// USER STATE INITIALIZATION
  const [user, setUser] = useState({
    firstName: '',
    lastName: ''
  });

// HANDLES INPUT FIELD DATA
  const handleInput = (e) => {
    setUser({  ...user, [e.target.name]: e.target.value });
  }

// HANDLES SUBMISSION OF FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(user.firstName + " " + user.lastName + " has been registered successfully!");
    console.log(user.firstName + " " + user.lastName);
  }

  return (
    <div className="App">
      <div className="container">
        { heading }
        <form action="#" method="post" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" id="firstName" name="firstName" placeholder="First Name" onChange={handleInput} required />
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" onChange={handleInput} required />
          <button id="registerBtn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;
