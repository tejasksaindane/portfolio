import React from "react";
import "../Styles/Contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";

const Contact = () => {
  return (
    <div className="Con_container">
      <div className="subContainer">
        <div className="title">
          <h1>Contact</h1>
        </div>
        <div className="github">
          <a
            className="contact_links"
            href=" https://github.com/tejasksaindane"
          >
            <span className="github_icon">
              <GitHubIcon className="con_icon" />
            </span>
            <span>Github</span>
          </a>
        </div>

        <div className="LinkedIn">
          <a
            className="contact_links"
            href="https://www.linkedin.com/in/tejas-saindane-7a37351b9/"
          >
            <span className="github_icon">
              <LinkedInIcon className="con_icon" />
            </span>
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="facebook">
          <a
            className="contact_links"
            href="https://www.facebook.com/tejas.saindane.142"
          >
            <span className="github_icon">
              <FacebookIcon className="con_icon" />
            </span>
            <span>Facebook</span>
          </a>
        </div>

        <div className="instagram">
          <a
            className="contact_links"
            href="https://www.instagram.com/_saindane.tejas_/"
          >
            <span className="github_icon">
              <InstagramIcon className="con_icon" />
            </span>
            <span>Instagram</span>
          </a>
        </div>

        <div className="email">
          <a className="contact_links" href="#">
            <span className="github_icon">
              <EmailIcon className="con_icon" />
            </span>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
