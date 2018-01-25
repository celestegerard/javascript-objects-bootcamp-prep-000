var playlist = { beyonce: "Crazy in Love" };

function updatePlaylist (playlist, artistName, song) {
  return Object.assign({}, playlist, { [artist]: song});
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName;
}