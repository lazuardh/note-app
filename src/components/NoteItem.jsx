import React from "react";
import PropTypes from "prop-types";
import parser from 'html-react-parser';
import { Link } from "react-router-dom";

function NoteItem({ id, title, body, createdAt }) {
  return (
    <div className="note-item">
      <h2 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h2>
      <h5 className="note-item__createdAt">{createdAt}</h5>
      <p className="note-item__body">{parser(body)}</p>
    </div>
  );
}

NoteItem.prototypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
