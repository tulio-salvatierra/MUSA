import "./App.css";

function App() {
  return (
    <>
      <div className="items">
        <div className="banner">
          <img
            src="./thumbnails/profile-pic.jpg"
            alt="Tulio Salvatierra profile"
            className="banner-image"
          ></img>
        </div>

        <h1 className="name">Tulio Salvatierra</h1>

        <div className="social-icons">
          <a href="https://github.com/T00lio" target="_blank">
            <i className="fa-brands fa-github fa-1x"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/tulio-salvatierra/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in fa-1x"></i>
          </a>

          <a href="https://www.instagram.com/tulio_dev/" target="_blank">
            <i className="fa-brands fa-instagram fa-1x"></i>
          </a>

          <a href="https://twitter.com/user_name_tulio" target="_blank">
            <span className="fa-brands fa-square-twitter fa-1x"></span>
          </a>
        </div>

        <div className="link">
          <img className="thumbnail" src="./thumbnails/image.png " />

          <a target="_blank" href="https://tuliosalvatierra.com">
            Web development portfolio
          </a>
        </div>

        <div className="link">
          <img className="thumbnail" src="./thumbnails/band thumb.png" />

          <a target="_blank" href="https://www.instagram.com/wratheonofficial/">
            Wratheon: Blackend Trash metal from Chicago, IL
          </a>
        </div>

        <div className="link">
          <img className="thumbnail" src="./thumbnails/up.png" />

          <a target="_blank" href="https://www.upwork.com/freelancers/tulio">
            A My freelancer website @ upwork.com
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
