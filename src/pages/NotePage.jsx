import React from "react";
import NoteList from "../components/NoteList";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ButtonAction from "../components/ButtonAction";
import { IoMdAdd } from "react-icons/io";
import PropTypes from "prop-types";
import {getActiveNotes} from "../utils/network-data";

function NotePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword: keyword });
  }

  const navigate = useNavigate();
  function addButtonHandler() {
    navigate("notes/add");
  }

  return (
    <NotePage
      change={changeSearchParams}
      defaultKeyword={keyword}
      onAddButtonHandler={addButtonHandler}
    />
  );
}

class NotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      keyword: props.defaultKeyword || "",
    };

    this.onSearch = this.onSearch.bind(this);
  }

  async componentDidMount() {
    const { data } = await getActiveNotes();

    this.setState(()=> {
      return {
        notes: data,
      }
    });
  }

  onSearch(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        keyword: value,
      };
    });
    this.props.change(value);
  }

  render() {
    const note = this.state.notes.filter(({ title }) =>
      title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );
    return (
      <div className="app-container">
        <h1 className="header">Aplikasi catatan</h1>
        <div className="main">
          <SearchBar keyword={this.props.keyword} change={this.onSearch} />
          <NoteList notes={note} />
        </div>
        <ButtonAction
          className="action"
          title="Tambah"
          icon={<IoMdAdd />}
          onClick={this.props.onAddButtonHandler}
        />
      </div>
    );
  }
}

NotePage.propTypes = {
  change:PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string.isRequired,
  onAddButtonHandler: PropTypes.func.isRequired,
}

export default NotePageWrapper;
