import React from "react";

const Title = ({ title, subTiltle }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subTiltle}</span>
      </h2>
    </div>
  );
};

export default Title;
