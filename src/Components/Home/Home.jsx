import React from 'react';

//import About from '../About/About';

const Home = () => {
  return (
    <div className='container' id='Home'>
      

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/Img/Images/STEAM/xploris-new-home-about-section.png" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/Img/Images/STEAM/overview-enviro-img.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/Img/Images/STEAM/Group-284.png" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


    <div style={{textAlign:"center"}}>
        
        <h4 style={{color:"black"}}>“Organization working for education and agriculture transformation in India”</h4>

    </div>


    </div>
  )
}

export default Home;