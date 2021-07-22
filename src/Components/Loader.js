import React from "react";
import { Preloader, TailSpin } from "react-preloader-icon";

const Loader = () => {
  return (
    <div>
      <Preloader
        use={TailSpin}
        size={40}
        strokeWidth={10}
        strokeColor="#3498db"
        duration={3000}
      />
    </div>
  );
};

export default Loader;
