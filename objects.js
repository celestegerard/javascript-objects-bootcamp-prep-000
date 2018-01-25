var playlist = { beyonce: "Crazy in Love" };

function updatePlaylist(obj, artistName, song) {
  obj.artistName = song;
  return obj;
}

function removeFromPlaylist(playlist, beyonce) {
  delete playlist.beyonce;
  }