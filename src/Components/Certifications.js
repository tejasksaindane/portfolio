import React, { useEffect, useState } from "react";
import "../Styles/certifications.css";
import firebase from "firebase";
import db from "../firebase";
// import Loader from "../Components/Loader";
import { Preloader, TailSpin } from "react-preloader-icon";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Loader from "./Loader";

const Certifications = () => {
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(false);

  const Loader = () => (
    <Preloader
      use={TailSpin}
      size={40}
      strokeWidth={10}
      strokeColor="#3498db"
      duration={2000}
    />
  );

  useEffect(() => {
    db.collection("Certificates").onSnapshot((snapshot) => {
      const tempArray = [];
      setLoading(true);
      snapshot.docs.map((doc) => tempArray.push(doc.data()));
      setRes(tempArray);
    });
  }, []);
  console.log(">>>.>>>>>>>>>>", res);

  return (
    <>
      {loading ? (
        <div className="wrapper">
          {res.map((data) => (
            <div className="card">
              <img src={data?.images} alt="" />
              <div className="info">
                <a className="anc" href={data?.url}>
                  VISIT
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        Loader()
      )}
    </>
  );
};

export default Certifications;

{
  /* <>
  <div className="certContainer">
        {res.map(data => (
          <div className="cer_container">
            <div className="cer_card">
              <div className="imgBx">
                <a href=>
                  <img
                    src={data?.images}
                    loading="lazy"
                    alt=""
                   
                  />
                </a>
              </div>
              <div className="content">
                <div className="contentBx">
                  <h3>Front-End Bootcamp</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>  */
}
