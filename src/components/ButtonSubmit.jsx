import React from "react";
import PropTypes from "prop-types";

function ButtonSubmit({ title, onClick }) {
  return (
    <div className="input-login">
      <button type="submit" onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

ButtonSubmit.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonSubmit;
