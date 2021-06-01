import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonIcon from "@material-ui/icons/Person";
import StarsIcon from "@material-ui/icons/Stars";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { IconButton } from "@material-ui/core";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="container">
        <ul className="bc" onClick={toggle}>
          <div className="icon">
            <Link to="/">
              <HomeIcon className="lighteffects" />
            </Link>
          </div>
          {open && (
            <div className="icon_name">
              <li className="home">
                <span className="text">
                  <Link to="/" className="name">
                    Home
                  </Link>
                </span>
              </li>
            </div>
          )}
        </ul>

        <ul onClick={toggle}>
          <div className="icon">
            <Link to="/portfolio">
              <WorkIcon className="lighteffects" />
            </Link>
          </div>
          {open && (
            <div className="icon_name">
              <li className="portfolio">
                <span className="text">
                  <Link to="/portfolio" className="name">
                    Portfolio
                  </Link>
                </span>
              </li>
            </div>
          )}
        </ul>

        <ul onClick={toggle}>
          <div className="icon">
            <Link to="/about">
              <PersonIcon className="lighteffects" />
            </Link>
          </div>
          {open && (
            <div className="icon_name">
              <li className="about">
                <span className="text">
                  <Link to="/about" className="name">
                    About
                  </Link>
                </span>
              </li>
            </div>
          )}
        </ul>

        <ul onClick={toggle}>
          <div className="icon">
            <Link to="/certifications">
              <StarsIcon className="lighteffects" />
            </Link>
          </div>
          {open && (
            <div className="icon_name">
              <li className="certifications">
                <span className="text">
                  <Link to="/certifications" className="name">
                    Certifications
                  </Link>
                </span>
              </li>
            </div>
          )}
        </ul>

        <ul onClick={toggle}>
          <div className="icon">
            <Link to="/contact">
              <PhoneIcon className="lighteffects" />
            </Link>
          </div>
          {open && (
            <div className="icon_name">
              <li className="contact">
                <span className="text">
                  <Link to="/contact" className="name">
                    Contact
                  </Link>
                </span>
              </li>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
