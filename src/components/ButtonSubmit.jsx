import React from "react";
import Proptypes from "prop-types";

function ButtonSubmit({ title, onClick }) {
  return (
    <div className="input-login">
      <button type="submit" onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

ButtonSubmit.proptypes = {
  title: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
};

export default ButtonSubmit;
