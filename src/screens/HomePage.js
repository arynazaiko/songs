import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSongs, postSong, deleteSong } from '../redux/actions'

class HomePage extends Component {
  state = {}
  formRef = React.createRef();
  fileRef = React.createRef();

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { title, author, time } = this.state;

    const file = this.fileRef.current.files[0];

    const song = { title, author, time };

    this.props.postSong(song, file);

    this.formRef.current.reset();
  }

  handleClick = (e) => {
    this.props.fetchSongs();
  }

  handleDelete = (id) => {
    console.log(id);
    this.props.deleteSong(id);
  }

  render() {
    const { songs } = this.props;

    return (
      <>
        <form className="form-inline mb-3" onSubmit={this.handleSubmit} ref={this.formRef}>
          <input placeholder="Название" name="title" className="form-control mr-2" onChange={this.handleChange} />
          <input placeholder="Автор" name="author" className="form-control mr-2" onChange={this.handleChange} />
          <input placeholder="Длительность" name="time" className="form-control mr-2" onChange={this.handleChange} />
          <input type="file" ref={this.fileRef} />
          <button className="btn btn-success">Отправить</button>
        </form>
        <button onClick={this.handleClick} className="btn btn-primary mb-3">Получить песни</button>
        <ul className="list-group">
          {songs.map(song => {
            return (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={song.id}>
                {song.title} {song.author}
                <span className="badge badge-primary badge-pill">{song.time}</span>
                <button onClick={(e) => this.handleDelete(song.id)} className="btn btn-danger mb-3">Удалить песню</button>
              </li>
            )
          })}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  }
}
export default connect(mapStateToProps, { fetchSongs, postSong, deleteSong })(HomePage);
