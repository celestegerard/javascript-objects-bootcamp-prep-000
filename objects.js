var playlist = { beyonce: "Crazy in Love" };

function updatePlaylist(obj, artist, song) {
  return Object.assign({}, obj, { [artist]: song});
}

function removeFromPlaylist(playlist, beyonce) {
  delete playlist.beyonce;
  }