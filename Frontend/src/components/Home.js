import React from 'react';
import './css/style.css';
import { useNavigate } from "react-router-dom";
import { CardFooter, Card, CardTitle, CardText, Button, CardBody, CardHeader } from 'reactstrap';



const Home = () => {

  const navigate = useNavigate();


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




      {/* <p className='b'>
        <span class="dropdown">
          <button class="btn01 btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Log In
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/adminLogin">Admin LogIn</a></li>
            <li><a class="dropdown-item" href="/LogIn">User LogIn</a></li>
          </ul>
        </span>

        <span className=" a bg-primary text-white">Welcome to Learning Academy </span>

      </p> */}


      {/* <div className=" desc01 bg-primary p-2 text-center text-white bg-opacity-50">
        <p className='desc'> It is collection of free courses from youtube collected in one site, which is very usefull for students !!
          An online learning platform is a digital environment where learners can access and engage with educational content. These platforms offer a variety of courses across different subjects and formats, catering to diverse learning needs.
          <br></br><br></br> Happy Learning !! :)
        </p>
      </div> */}



      <div className="container">
      <div className="text">
        <h1 >Welcome to <p style={{color:'blue'}}>Learning Academy</p></h1>
        <p className='pt-2'>It is collection of free courses from youtube collected in one site, which is very usefull for students !!
          An online learning platform is a digital environment where learners can access and engage with educational content. These platforms offer a variety of courses across different subjects and formats, catering to diverse learning needs.
          <br></br><br></br> <b style={{fontSize:'20px'}}>Happy Learning !! :)</b></p>
      </div>
      <div className="image">
        <img src="https://www.collegechalo.com/news/wp-content/uploads/2020/06/Students-learning.jpg" alt="Example" />
      </div>
    </div>





<p className='cc'>
<br></br>
      <p className='popular_header'><h2>Most Popular Courses</h2></p>
     
      <p className='d-flex flex-wrap align-items-center text-center ' >

        <Card
    className="my-2"
    // color="primary"
    inverse
    style={{
      width: '20rem',
      margin:'auto',
      // backgroundColor: 'rgb(139, 244, 244)'
     
    }}
  >
    <CardHeader tag="h4" style={{color:'black'}} >
      Intro to React JS
    </CardHeader>
    <CardBody>
      <CardText>
         <img className='img1' src='https://d31ezp3r8jwmks.cloudfront.net/nr9p5isqq3yn41tqrh1tr4lttr1v' />
     </CardText>
    </CardBody>
    <CardFooter tag="h6" style={{fontWeight: "normal",color:'black'}}>
        The Intro to React JS course is designed to provide introduction to React, a popular JavaScript library for building user interfaces.
    </CardFooter>
  </Card>



  <Card
    className="my-2"
    // color="primary"
    inverse
    style={{
      width: '20rem',
      margin:'auto',
      // backgroundColor: 'rgb(139, 244, 244)'
    }}
  >
    <CardHeader tag="h4"  style={{color:'black'}}>
      Java for Begineers
    </CardHeader>
    <CardBody>
      <CardText>
         <img className='img1' src='https://i.morioh.com/2020/04/09/44db1522cebb.jpg' />
     </CardText>
    </CardBody>
    <CardFooter tag="h6" style={{fontWeight: "normal",color:'black'}}>
    The Java for Beginners course is designed to introduce you to the fundamentals of Java programming and practical applications.
    </CardFooter>
  </Card>



  <Card
    className="my-2"
    // color="primary"
    inverse
    style={{
      width: '20rem',
      margin:'auto',
      // backgroundColor: 'rgb(139, 244, 244)'
    }}
  >
    <CardHeader tag="h4"  style={{color:'black'}}>
      SQL Full Course
    </CardHeader>
    <CardBody>
      <CardText>
         <img className='img1' src='https://tse4.mm.bing.net/th/id/OIP.FWIoGONsPZFaRJYZwfboVAHaD4?rs=1&pid=ImgDetMain' />
     </CardText>
    </CardBody>
    <CardFooter tag="h6" style={{fontWeight: "normal",color:'black'}}>
    This course is designed to introduce you to the fundamentals of SQL, which is essential for managing and manipulating databases.
     </CardFooter>
  </Card>
  </p>

  </p>  

    </>
  );
};

export default Home;
