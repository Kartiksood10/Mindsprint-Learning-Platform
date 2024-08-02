import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import '../App.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userid, setUserId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [failedMessage, setFailedMessage] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    fetch('http://localhost:8083/api/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, userid, password }),
    })
      .then((response) => {
        if (response.status === 200) {
           
            setSuccessMessage('User created successfully');
        }
        return response.json();
      })
      .then((data) => {
      
        console.log(data);
      })
      .catch((error) => {
        if(error.status ===!200){
            setFailedMessage('Something went wrong.. try again !')
        }
        console.error('Error:', error);
      });
  };


  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary p-2">
  <div class="container-fluid">
    <a class="navbar-brand" style={{color:'blue', fontWeight:'bold', fontSize:'x-large'}} href="/">Learning Academy</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" style={{marginLeft:'50px'}}>
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="LogIn">User LogIn</a>
        </li>
        <li class="nav-item" style={{marginLeft:'20px'}}>
          <a class="nav-link active" href="/SignUp">User SignUp</a>
        </li>
        <li class="nav-item" style={{marginLeft:'20px'}}>
          <a class="nav-link active" href="/adminPass">Admin LogIn</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex" role="search" style={{marginLeft:'190px'}}>
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit" style={{borderRadius:'50%'}}>Search</button>
    </form>
    </div>
  </div>
</nav>
      <h1 id='header' > Sign up to Learning Academy </h1>

    <div className="login-container" >
      <h2>Create Your Account</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name: <br />
          <input type="text" value={username} onChange={handleUsernameChange} required />
        </label>
        <br />
        <br />
        <label>
          Userid: <br />
          <input type="text" value={userid} onChange={handleUserIdChange} required />
        </label>
        <br />
        <br />
        <label>
          Password: <br />
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <br />
        <br />
        <div className="login-container-btn">
          <button className='btn bg-primary' type="submit">Sign Up</button> {/* Changed from 'Login' to 'Sign Up' */}
          <button className='btn' style={{backgroundColor:'rgba(143, 145, 136, 0.356)'}} type="button" onClick={() => navigate("/login")}>Go to Login</button> {/* Added button for redirecting to login */}
        </div>

        <br />
        <br />

        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {failedMessage && <p style={{ color: 'red' }}>{failedMessage}</p>}
      </form>
    </div>
    </div>
  );
};

export default SignUp;
