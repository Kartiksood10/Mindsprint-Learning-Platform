import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
import Home from './Home';
import { Button } from 'reactstrap';
import { Container, Form, FormGroup, Label, Input} from 'reactstrap';

const AdminPass = () => {
  const [password, setPassword] = useState('');
  const [userid, setUserId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [failedMessage, setFailedMessage] = useState('');

//   const navigate = useNavigate();

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    fetch('http://localhost:8083/api/logIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userid, password }),
    })
      .then((response) => {
        if (response.status === 200) {
        
          setSuccessMessage('Login successful');
          navigate("/managecourse");
        }
        return response.json();
      })
      .then((data) => {
     
        console.log(data);
      })
      .catch((error) => {
        if (error.status !== 200) {
          setFailedMessage('Something went wrong... try again!');
        }
        console.error('Error:', error);
      });
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(''); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleGenerateOtp = () => {
   
    const generatedOtp = Math.floor(100000 + Math.random() * 900000);

  
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        showNotification(generatedOtp);
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            showNotification(generatedOtp);
          }
        });
      }
    }

    setGeneratedOtp(generatedOtp.toString()); 
  };

  const showNotification = (otp) => {
    const notification = new Notification('Generated OTP', {
      body: `Your OTP is ${otp}`,
    });
  };

  const handleLogin = () => {
    if (otp === generatedOtp) {
      setIsLoggedIn(true);

    //   navigate('/managecourse');
    } else {
      alert('Invalid OTP. Please try again.');
    }
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

<h1 id='header' style={{paddingLeft: '120px'}}>Admin LogIn</h1>
    <div className="login-container">
      <h2>Login to Your Account</h2>

      <form onSubmit={handleSubmit}>
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


    {!isLoggedIn ? (
        <Form>
          {/* <FormGroup>
            <Label for="phoneNumber">Enter Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </FormGroup> */}
          <Button color="primary" className="mb-3" onClick={handleGenerateOtp}>
            Generate OTP
          </Button>
          <FormGroup>
            <Label for="otp">Enter OTP</Label>
            <Input
              type="text"
              name="otp"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </FormGroup>
          <Button color="success" onClick={handleLogin}>
            Validate OTP
          </Button>
          <br></br>
        </Form>
      ) : (
        <p className="text-center mt-3">OTP Validated Successfully !</p>
        
        
      )}

<br></br>
        <div className="login-container-btn">
          <Button type="submit" color='primary text-black'>LogIn</Button>
          <Button type="button" style={{backgroundColor:'rgba(143, 145, 136, 0.356)',color:'black'}} onClick={() => navigate("/signup")}>Go to Signup</Button>
        </div>

        <br />
        <br />

        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {failedMessage && <p style={{ color: 'red' }}>{failedMessage}</p>}

      </form>
    </div>

    {/* <Container className="login-container" style={{width:'400px'}}>
      <h2 className="text-center mb-4">Login</h2>
      {!isLoggedIn ? (
        <Form>
          <FormGroup>
            <Label for="phoneNumber">Enter Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </FormGroup>
          <Button color="primary" className="mb-3" onClick={handleGenerateOtp}>
            Generate OTP
          </Button>
          <FormGroup>
            <Label for="otp">Enter OTP</Label>
            <Input
              type="text"
              name="otp"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </FormGroup>
          <Button color="success" onClick={handleLogin}>
            Login
          </Button>
        </Form>
      ) : (
        <p className="text-center mt-3">You are logged in!</p>
        
        
      )}
    </Container> */}

    </div>
  );
};

export default AdminPass;
