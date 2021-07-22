import React from "react";
import "../Styles/About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="abt_container">
      <center>
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: 1,
            type: "spring",
            stiffness: 100,
            duration: 5,
          }}
          className="abt_lineone"
        >
          About
        </motion.h1>
        <br />
        <div className="abt_page">
          <p className="para">
            I was born in Jalgaon, MH. Completed the primary and secondary
            education from Jalgaon,MH
          </p>
          <motion.h3
            className="abt_linetwo"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{
              delay: 0.5,
              type: "spring",
              duration: 5,
              stiffness: 100,
            }}
          >
            Education
          </motion.h3>
          <div className="para2">
            <p className="line3">
              I completed My 10th from St.Teresa's Convent Eng Med School,
              Jalgaon, MH in 2016. I studied science at The K.C.E Society's
              Swami Vivekanand Junior College, in Jalgaon, MH for two years
              before moving to Kaviyitri Bahinabai Chaudhari North Maharashtra
              University , MH for completeing graduation.{" "}
            </p>
          </div>
        </div>
        {/* <div className="resume">
          <a href="#">
            <img src="" alt="" />
          </a>
        </div> */}
      </center>
    </div>
  );
};

export default About;
