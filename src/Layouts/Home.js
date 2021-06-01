import React from "react";
import "../Styles/Home.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Lottie from "react-lottie";
import animationData from "../lotties/developer.json";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    <div className="homeContainer">
      <div className="lottie">
        <Lottie options={defaultOptions} />
      </div>
      <div>
        <h1 className="introduction">
          <span className="lineone">Hello , I am </span>
          <br />
          <br />
          <span className="linetwo">Tejas.K.Saindane</span>
          <br />
          <span className="linethree">Front-end Developer</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
{
  /* <div className="homeContainer">
        {/* <div className="sticker"> 
        <Lottie options={defaultOptions} height={250} width={250} />
        {/* </div> 
        <div className="intro">
          <center>
            <h1 className="lineone">
              Hello , I am <br />
              <br />
              <span className="linetwo">Tejas . K . Saindane</span>
              <br />
              <span className="linethree">Front-end Developer.</span>
            </h1>
          </center>
        </div>
      </div>
    </>  */
}
