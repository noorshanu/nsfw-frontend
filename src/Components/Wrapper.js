import React, { useState } from "react";
import Modal from "./Modal/Modal";
import Home from "../Pages/Home";

const Wrapper = () => {
  let [showContent, setShowContent] = useState(false);

  {
    if (showContent) {
      return <Home />;
    } else {
      return (
        <Modal showContent={showContent} setShowContent={setShowContent} />
      );
    }
  }
};

export default Wrapper;
