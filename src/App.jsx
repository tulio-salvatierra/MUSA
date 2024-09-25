import "./App.css";
import Logo from "./assets/musa-logo.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="items">
          <div className="banner">
            <img
              src={Logo}
              alt="Tulio Salvatierra profile"
              className="logo"
              style={{ borderRadius: "2rem" }}
            ></img>
            <p style={{ textAlign: "center" }}>
              ✨ DISCOVER ✨ CREATE ✨ TRANSFORM ✨
            </p>
            <p style={{ textAlign: "center" }}>📞 312 919 7823</p>
          </div>

          <div className="social-icons">
            <a href="https://github.com/T00lio" target="_blank">
              <i className="fa-solid fa-phone fa-1x"></i>
            </a>

            <a href="https://www.instagram.com/tulio_dev/" target="_blank">
              <i className="fa-brands fa-instagram fa-1x"></i>
            </a>

            <a href="https://twitter.com/user_name_tulio" target="_blank">
              <span className="fa-brands fa-square-twitter fa-1x"></span>
            </a>
          </div>

          <div className="link">
            <img
              className="thumbnail"
              src="https://media.istockphoto.com/id/1218636286/photo/manicure-process-in-the-professional-nail-salon.jpg?s=1024x1024&w=is&k=20&c=3-se_aPYhDms0O5J2bMtLZC7MLgzRiz4y-PHLBqtLek="
            />

            <a target="_blank" href="#">
              Our services
            </a>
          </div>

          <div className="link">
            <img
              className="thumbnail"
              src="https://media.istockphoto.com/id/1409304190/photo/embroidered-red-pins-on-a-calendar-event-planner-calendar-clock-to-set-timetable-organize.jpg?s=1024x1024&w=is&k=20&c=tLbse6o7HSD4yKukcPzzjzllgN4nuGgGaoUvb3gisAE="
            />

            <a target="_blank" href="#">
              Book an appointment now!
            </a>
          </div>

          <div className="link">
            <img
              className="thumbnail"
              src="https://media.istockphoto.com/id/1360092910/photo/words-with-about-us-web-concept-idea.jpg?s=1024x1024&w=is&k=20&c=A7p3J3uwa4_5wp9kOoMN4q02Ly05xE2hKRi9VwomSQ4="
            />

            <a target="_blank" href="#">
              About us!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
