import Image from "react-bootstrap/Image";

const Home = () => (
  <div className="App-page App-homepage">
    <h1 className="App-main-title animate__animated animate__zoomIn animate__slow">
      Software Engineer
    </h1>
    <p className="animate__animated animate__fadeIn animate__delay-2s">
      Joeffison Silvério de Andrade
    </p>
    <Image className="home-image"
      src="callmejoey/images/profile/profile-vr.png"
    />
  </div>
);

export default Home;
