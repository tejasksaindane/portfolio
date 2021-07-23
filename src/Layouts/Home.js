import React from "react";
import "../Styles/Home.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Lottie from "react-lottie";
import animationData from "../lotties/developer.json";
import { motion } from "framer-motion";
// import InstagramIcon from "@material-ui/icons/Instagram";

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
    // <>
    //   <motion.div
    //     className="homeContainer"
    //     initial={{ y: -250, opacity: 0 }}
    //     animate={{ y: 0, opacity: 1 }}
    //     transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 320 }}
    //   >
    //     <div className="lottie">
    //       <Lottie options={defaultOptions} />
    //     </div>
    //     <div>
    //       <h1 className="introduction">
    //         <span className="lineone">Hello , I am </span>
    //         <br />

    //         <span className="linetwo">Tejas.K.Saindane</span>
    //         <br />
    //         <span className="linethree">Front-end Developer</span>
    //       </h1>
    //     </div>
    //   </motion.div>
    //   <div className="skills">
    //     <h3 className="skills_title">Skill's</h3>
    //   </div>
    //   <div className="skill_container">
    //     <div className="skill_item"> C</div>
    //     <div className="skill_item"> C++</div>
    //     <div className="skill_item"> Python</div>
    //     <div className="skill_item">Html</div>
    //     <div className="skill_item"> Css</div>
    //     <div className="skill_item"> Javascript</div>
    //     <div className="skill_item"> ReactJs</div>
    //     <div className="skill_item"> MySql</div>
    //     <div className="skill_item"> Mern</div>
    //     <div className="skill_item"> Firebase</div>
    //   </div>
    // </>

    <>
      <div className="home__Container">
        <motion.div
          className="lottie"
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "spring",
            stiffness: 320,
          }}
        >
          <Lottie options={defaultOptions} />
        </motion.div>
        <div className="home__introduction">
          <h1 className="home__title">
            <span className="lineone">Hello , I am </span>
            <br />

            <span className="linetwo">Tejas .K. Saindane</span>
            <br />
            <span className="linethree">Front-end Developer</span>
          </h1>
        </div>
        <div className="skills">
          <h3 className="skills_title">Skill's</h3>
        </div>
        <div className="skill_container">
          <div className="skill_item"> C++</div>
          <div className="skill_item"> Python</div>
          <div className="skill_item"> C</div>
          <div className="skill_item">Html</div>
          <div className="skill_item"> Css</div>
          <div className="skill_item"> Javascript</div>
          <div className="skill_item"> ReactJs</div>
          <div className="skill_item"> MySql</div>
          <div className="skill_item"> Mern</div>
          <div className="skill_item"> Firebase</div>
        </div>
      </div>
    </>
  );
};

export default Home;
