import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AdminLogin = () => {
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
      navigate('/managecourse');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <>
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
    
    <Container className="login-container" style={{width:'400px'}}>
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
    </Container>
    </>
  );
};

export default AdminLogin;
