import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNote, deleteNote } from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import ButtonAction from "../components/ButtonAction";
import { FcFullTrash } from "react-icons/fc";
import PropTypes from "prop-types";

function DetailPageWrapper() {
  const { id } = useParams();

  const navigate = useNavigate();

  function removeNoteHandler() {
    deleteNote(id);
    navigate("/");
  }

  return <DetailPage id={id} onRemoveHandler={removeNoteHandler} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
  }

  onDeleteNoteHandler() {
    this.props.onRemoveHandler(this.state);
  }

  render() {
    if (this.state.note === undefined) {
      return <p>Note dengan ID "{this.props.id}" tidak tersedia.</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.note} />
        <ButtonAction
          title="Delete"
          icon={<FcFullTrash />}
          onClick={this.onDeleteNoteHandler}
        />
      </section>
    );
  }
}

DetailPage.prototypes = {
  id: PropTypes.string.isRequired,
  onRemoveHandler: PropTypes.func.isRequired,
}

export default DetailPageWrapper;
