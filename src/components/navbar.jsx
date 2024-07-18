function Navbar() {

    return (
      <>
      <nav class="navbar navbar-expand-lg" id="bg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="logo.png" alt="" id="logo"/></a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" href="#" id="location"><img src="location.png" alt=""id="locationimg"/><b id="loc">Location</b></a> <span id="karachi">Karachi</span>
          <a class="nav-link" href="#" id="kashif"><img src="profile.png" alt="" id="profileimg"/><b id="kas">Kashif</b><img src="arrow.png" alt="" id="profileimg"/></a>
          <a class="nav-link" href="#"><img src="language.png" alt="" /><b id="kas">EN</b><img src="arrow.png" alt="" id="profileimg"/></a>
          <a class="nav-link" href="#"><img src="heart.png" alt=""id="profileimg"/></a>
          <a class="nav-link" href="#"><img src="shop.png" alt="" id="profileimg"/></a>
        </div>
      </div>
    </div>
  </nav>
      </>
    )
  }
  
  export default Navbar;
  