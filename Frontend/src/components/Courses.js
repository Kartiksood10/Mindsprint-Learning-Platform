import React, { useState, useEffect }  from "react";
import axios from 'axios';
import {
    Card, CardBody,CardTitle, CardSubtitle, CardText, CardFooter, Button, Container,} from 'reactstrap';


    const Course =()=>{

        const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:8083/course/getAll'); 
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);
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
    <div style={{backgroundColor: "white"}}>
      <h1 className="text-danger text-center" >
        List of available Courses for free
      </h1>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {videos.map((video, index) => (
          <Card key={index} className="m-3" style={{ width: '400px' }}>
            <CardBody className="p-3">
              <CardSubtitle tag="h5" className="font-weight-bold">{video.coursename}</CardSubtitle>
              <CardText>Course Author: {video.courseauthor}</CardText>
              <Container className="embed-responsive embed-responsive-16by9">
                <div className="embed-responsive-item">
                  <iframe
                    title={`Video ${index}`}
                    className="w-100"
                    src={`https://www.youtube.com/embed/${extractVideoId(video.url)}`}
                    allowFullScreen
                  ></iframe>
                </div>
              </Container>
              <Container className="d-flex justify-content-center">
                <Button color="danger" href={video.url} target="_blank" rel="noopener noreferrer">
                  View On Youtube
                </Button>
              </Container>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
    </>
  );
};

const extractVideoId = (url) => {
    const videoId = url.split('v=')[1];
    if (videoId) {
      const ampersandPosition = videoId.indexOf('&');
      if (ampersandPosition !== -1) {
        return videoId.substring(0, ampersandPosition);
      }
      return videoId;
    }
    return null;
  };
  

export default Course;