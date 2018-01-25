var playlist = { beyonce: "Crazy in Love" };

function updatePlaylist(obj, artist, song) {
  obj.artist = song;
  return obj;
}

function removeFromPlaylist(playlist, beyonce) {
  delete playlist.beyonce;
  }