import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light top">
        <a className="navbar-brand logo" href="#">
          <img src="site-img/carousel1.jpg" width="30" height="30" className="d-inline-block align-top" alt="" />
          COKER OFFICES
        </a>
        <ul className="link">
          <li>About us</li>
        </ul>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner car">
              <div className="carousel-item active">
                <img src="site-img/carousel4.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="site-img/carousel2.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="site-img/carousel4.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container tnail">
        <div className="row">
          <h2>Plans</h2>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src="site-img/off-space1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h4>VERTICAL OFFICES</h4>
                <p className="card-text th-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="site-img/off-space2.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h4>CUSTOMIZED OFFICES</h4>
                <p className="card-text th-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="site-img/off-space3.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h4>SERVICED OFFICES</h4>
                <p className="card-text th-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="site-img/off-space5.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h4>MEETING ROOMS</h4>
                <p className="card-text th-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer">
        <div className="row empty"></div>
        <div className="row">
          <div className="col-md-4 foot">
            <h3>VISIT US IN KENYA</h3>
            <h4>Nairobi, Kenya</h4>
            <p>Belgravia Centre, 14 Riverside drive, <br />4th floor, Off
              Riverside Drive<br /> Hannover Centre, 14 Riverside Drive,<br />
              6th floor, Off Riverside Drive
            </p>
          </div>
          <div className="col-md-4 foot">
            <h3>VISIT US IN GHANA</h3>
            <h4>Accra, Ghana</h4>
            <p>One Airport Square, Airport City 8th Floor</p>
          </div>
          <div className="col-md-4 foot">
            <h3>VISIT US IN NIGERIA</h3>
            <h4>Lagos, Nigeria</h4>
            <p>Sterling Bank Building</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
