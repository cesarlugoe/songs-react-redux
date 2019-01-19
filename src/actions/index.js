//action creator

// named export:
export const selectSong = (song) => {
   // return actions
   return {
      type: 'SONG_SELECTED',
      payload: song,
   };
};



