import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="abt_container">
      <center>
        <h1 className="abt_lineone">About</h1>
        <br />
        <div className="abt_page">
          <p className="para">
            I was born in Jalgaon, MH. Completed the primary and secondary
            education from Jalgaon,MH
          </p>
          <h3 className="abt_linetwo">Education</h3>
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
      </center>
    </div>
  );
};

export default About;
