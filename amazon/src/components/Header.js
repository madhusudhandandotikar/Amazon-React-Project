function Header (){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Amazon</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Today's Deals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Costomer Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Registry</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Gift Cards</a>
          <li class="nav-item">
          <a class="nav-link" href="#">Sell</a>
        </li>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
 export default Header

