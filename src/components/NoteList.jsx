import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteList({ notes }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <div className="notes-list-empty">
          <p>Catatan tidak ditemukan</p>
        </div>
      ) : (
        notes.map(({ id, title, body, createdAt }) => (
          <NoteItem
            key={id}
            id={id}
            title={title}
            body={body}
            createdAt={createdAt}
          />
        ))
      )}
    </div>
  );
}

NoteList.prototypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
