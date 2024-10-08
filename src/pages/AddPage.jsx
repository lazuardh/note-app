import React from "react";
import NoteInput from "../components/NoteInput";
import ButtonAction from "../components/ButtonAction"
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";
import { FiCheck } from "react-icons/fi";
import PropTypes from "prop-types";

function AddPageWrapper() {
  const navigate = useNavigate();

  async function saveNoteHandler(note) {
    await addNote(note);
    navigate('/');
  }

  return <AddPage onSaveNoteHandler={saveNoteHandler} />
}

class AddPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      initialinitialBodyEdit: "",  
    };

    this.onTitleInputHandler = this.onTitleInputHandler.bind(this);
    this.onBodyInputHandler = this.onBodyInputHandler.bind(this);
    this.onSaveHandler = this.onSaveHandler.bind(this);
  }

  onTitleInputHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onBodyInputHandler(event) {
    this.setState({
      body: event.target.innerHTML,
    });
  }

  onSaveHandler(){
    this.props.onSaveNoteHandler(this.state);
  }

  render() {
    return (
      <section className="add-new-page">
        <NoteInput
          state={this.state}
          onTitleInput={this.onTitleInputHandler}
          onBodyInput={this.onBodyInputHandler}
          initialBodyEdit={this.state.initialinitialBodyEdit}
        />
        <ButtonAction
          className="action"
          title="save"
          icon={<FiCheck />}
          onClick={this.onSaveHandler}
        />
      </section>
    );
  }
}

AddPage.propTypes = {
  onSaveNoteHandler: PropTypes.func.isRequired,
}

export default AddPageWrapper;
