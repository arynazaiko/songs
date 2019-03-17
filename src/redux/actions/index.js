import axios from 'axios';

// action creator
export const actionCreator = data => ({ type: "TEST_ACTION", payload: data })

// async action
export const postSong = (song, file) => dispatch => {
  const currentSong = new FormData();
  currentSong.append('title', song.title);
  currentSong.append('author', song.author);
  currentSong.append('time', song.time);
  currentSong.append('file', file, file.name);

  axios.post('http://localhost:3010/api/songs', currentSong)
    .then(({ data }) => dispatch(postSongSuccess(data)))
    .catch(error => dispatch(postSongError(error)));
}

export const fetchSongs = () => dispatch => {
  axios.get('http://localhost:3010/api/songs')
    .then(({ data }) => dispatch(fetchSongsSuccess(data)))
    .catch(error => dispatch(fetchSongsError(error)));
}

export const deleteSong = (id) => dispatch => {
  axios.delete(`http://localhost:3010/api/songs/${id}`)
    .then(() => dispatch(deleteSongSuccess(id)))
    .catch((error) => dispatch(deleteSongError(error)))
}

const postSongSuccess = song => ({ type: "POST_SONG_SUCCESS", payload: song });
const postSongError = error => ({ type: "POST_SONG_ERROR", payload: error });
const fetchSongsSuccess = songs => ({ type: "FETCH_SONGS_SUCCESS", payload: songs });
const fetchSongsError = error => ({ type: "FETCH_SONGS_ERROR", payload: error });
const deleteSongSuccess = id => ({ type: "DELETE_SONG_SUCCESS", payload: id });
const deleteSongError = error => ({ type: "DELETE_SONG_ERROR", payload: error });
