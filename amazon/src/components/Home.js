function Home (){
    return(
        <div>
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="slide1.jpg" class="d-block w-100" alt="slide1.jpg"></img>
    </div>
    <div class="carousel-item">
      <img src="slide2.jpg" class="d-block w-100" alt="slide2.jpg"></img>
    </div>
    <div class="carousel-item">
    
      <img src="slide3.jpg" class="d-block w-100" alt="slide3.jpg"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
 export default Home