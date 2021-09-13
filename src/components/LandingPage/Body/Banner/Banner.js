import React from "react";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner wrapper">
      <p className="banner--name marginText">
        <p className="banner--the">The</p>
        <p className="banner--o">O</p>
        <p className="banner--kyo">KYO</p>
      </p>
      <p className="banner--slogan">"Ở đây có bán tấm lòng nè..."</p>
    </div>
  );
};

export default Banner;
