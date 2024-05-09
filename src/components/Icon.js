import React, { Component } from "react";
import { FONTAWSOME_URL } from "./index";

// icon

const Icon = ({ nama }) => {
  return (
    <div>
      <link rel="stylesheet" href={FONTAWSOME_URL} />
      {nama === "Makanan" && <i className="fas fa-hamburger mr-2"></i>}
      {nama === "Minuman" && <i className="fas fa-coffee mr-2"></i>}
      {nama === "Cemilan" && <i className="fas fa-cookie-bite mr-2"></i>}
      {nama === "plus" && <i class="fa-solid fa-plus"></i>}
      {nama === "minus" && <i class="fa-solid fa-minus"></i>}
    </div>
  );
};

export default Icon;
