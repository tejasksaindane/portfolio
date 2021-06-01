import React, { useEffect, useState } from "react";
import "../Styles/certifications.css";
import firebase from "firebase";
import db from "../firebase";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const Certifications = () => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    db.collection("Certificates").onSnapshot(snapshot => {
      // console.log(
      //   ">>>>>>>>>>>>>..",
      //   snapshot.docs.map(doc => doc.data())
      const tempArray = [];
      snapshot.docs.map(doc => tempArray.push(doc.data()));
      setRes(tempArray);

      // console.log(Result[1].git);
    });
  }, []);
  console.log(">>>.>>>>>>>>>>", res);
  return (
    <div className="wrapper">
      {res.map(data => (
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
