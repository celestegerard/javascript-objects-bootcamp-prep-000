var playlist = { artist: "song" };

function updatePlaylist (playlist, artist, song) {
  return Object.assign({}, playlist, { [artist]: song});
}

function removeFromPlaylist(playlist, beyonce) {
  delete playlist.beyonce;
  playlist;
  }