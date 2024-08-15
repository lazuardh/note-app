import React from "react";
import PropTypes from "prop-types";

function NoteInput({ state, onTitleInput, onBodyInput, initialBodyEdit }) {
  return (
    <div className="add-new-page__input">
      <input
        className="add-new-page__input__title"
        placeholder="Catatan rahasia"
        value={state.title}
        onChange={onTitleInput}
        spellCheck="false"
      />
      <div
        className="add-new-page__input__body"
        contentEditable="true"
        data-placeholder="Sebenarnya saya adalah ...."
        onInput={onBodyInput}
        spellCheck="false"
        suppressContentEditableWarning={true}
      >
        {initialBodyEdit !== undefined ? parser(initialBodyEdit) : ""}
      </div>
    </div>
  );
}

NoteInput.prototypes = {
  state: PropTypes.object.isRequired,
  onTitleInput: PropTypes.func.isRequired,
  onBodyInput: PropTypes.func.isRequired,
  initialBodyEdit: PropTypes.string.isRequired,
}

export default NoteInput;
