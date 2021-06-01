import React, { useEffect, useState } from "react";
import "../Styles/certifications.css";
import firebase from "firebase";
import db from "../firebase";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import "../Styles/Portfolio.css";

const Certifications = () => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    db.collection("Projects").onSnapshot(snapshot => {
      // console.log(
      //   ">>>>>>>>>>>>>..",
      //   snapshot.docs.map(doc => doc.data())
      const tempArray = [];
      snapshot.docs.map(doc => tempArray.push(doc.data()));
      setRes(tempArray);

      // console.log(Result[1].git);
    });
  }, []);

  return (
    <div className="wrapper">
      {res.map(data => (
        <div className="card">
          <img src={data?.image} alt="" />
          <div className="info">
            <h1>{data?.name}</h1>
            <a className="anc" href={data?.git}>
              GITHUB
            </a>
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

// <div className="portContainer">
//   {res.map(data => (
//     <div className="port_container">
//       <div className="port_card">
//         <div className="imgBx">
//           <img
//             src={data?.image}
//             loading="lazy"
//             alt=""
//             // style={{ width: "100%", height: "100%" }}
//           />
//         </div>
//         <div className="content">
//           <div className="contentBx">
//             <h3>{data?.name || "Project Name"}</h3>
//           </div>
//           <div>
//             <button className="btn">
//               <a className="link" href={data?.git}>
//                 GITHUB
//               </a>
//             </button>
//             <button className="btn">
//               <a className="link" href={data?.url}>
//                 VISIT
//               </a>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
