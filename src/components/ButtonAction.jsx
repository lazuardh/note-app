import React from "react";
import PropTypes from "prop-types";

function ButtonAction({ title, onClick, icon}) {
    return (
        <div className="button-logout">
            <button type="action" title={title} onClick={onClick} >{ icon }</button>
        </div>
    );
}

ButtonAction.prototypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.object.isRequired,
}

export default ButtonAction;