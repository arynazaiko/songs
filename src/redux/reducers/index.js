const initialState = {
  songs: [],
  users: [],
}

export default function reducer(state = initialState, action) {

  let songs;

  switch (action.type) {
    case "FETCH_SONGS_SUCCESS":
      return {
        ...state,
        songs: action.payload,
      }

    case "POST_SONG_SUCCESS":
      songs = [...state.songs, action.payload];

      return {
        ...state,
        songs: songs,
      }

    case "DELETE_SONG_SUCCESS":
      songs = [...state.songs];

      const songIndex = songs.findIndex((song) => {
        return action.payload.id === song.id;
      });
      songs.splice(songIndex, 1);

      return {
        ...state,
        songs: songs,
      }

    default:
      return state;
  }
}
