import React from "react";

const Button = ({ type = "button", name, onClick }) => {
  return (
    <button
      type={type}
      className="btn btn-primary mt-2"
      onClick={type === "reset" ? onClick : undefined}
    >
      {name}
    </button>
  );
};

export default Button;