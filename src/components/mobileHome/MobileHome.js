import React from "react";
import "./MobileHome.css";
import notes from "../../assets/notes.jpg";

const MobileHome = () => {
  return (
    <div
      className="mobile_home"
      style={{
        backgroundImage: `url(${notes})`,
      }}
    >
      Create Your First Note...
    </div>
  );
}

export default MobileHome;
