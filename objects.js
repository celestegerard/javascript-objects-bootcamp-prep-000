var playlist = { beyonce: "Crazy in Love" };

function updatePlaylist (playlist, artist, song) {
  return Object.assign({}, playlist, { [artist]: song});
}

function removeFromPlaylist(playlist, beyonce) {
  delete playlist.beyonce;
  playlist;
  }