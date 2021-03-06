import React from "react";
import "../Styles/Contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="Con_container"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="subContainer">
        <div className="title">
          <h1>Contact</h1>
        </div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.8,
            type: "spring",
            duration: 5,
            stiffness: 120,
          }}
          className="github"
        >
        
          <a
            className="contact_links"
            href=" https://github.com/tejasksaindane"
          >
            <span className="github_icon">
              <GitHubIcon className="con_icon" />
            </span>
            <span>Github</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: 1.2,
            type: "spring",
            duration: 5,
            stiffness: 120,
          }}
          className="LinkedIn"
        >
          <a
            className="contact_links"
            href="https://www.linkedin.com/in/tejas-saindane-7a37351b9/"
          >
            <span className="github_icon">
              <LinkedInIcon className="con_icon" id='linkedinIcon'/>
            </span>
            <span>LinkedIn</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: 1.6,
            type: "spring",
            duration: 5,
            stiffness: 120,
          }}
          className="facebook"
        >
          <a
            className="contact_links"
            href="https://www.facebook.com/tejas.saindane.142"
          >
            <span className="github_icon">
              <FacebookIcon className="con_icon" id='facebook_icon'/>
            </span>
            <span>Facebook</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 2, type: "spring", duration: 5, stiffness: 120 }}
          className="instagram"
        >
          <a
            className="contact_links"
            href="https://www.instagram.com/_saindane.tejas_/"
          >
            <span className="github_icon">
              <InstagramIcon className="con_icon" id='instagram_icon'/>
            </span>
            <span>Instagram</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 5 }}
          transition={{
            delay: 1,
            duration: 5,
            type: "spring",
            stiffness: 120,
          }}
          className="email"
        >
          <a className="contact_links" href="#">
            <span className="github_icon">
              <i className='bx bxl-twitter con_icon ' id='twitterIcon'></i>
            </span>
            <span>Email</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
