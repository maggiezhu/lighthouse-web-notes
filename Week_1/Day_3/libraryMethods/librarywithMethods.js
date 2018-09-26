var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function(){
    for(var playlist in this.playlists){
      var trackamount = this.playlists[playlist].tracks.length;
      console.log(playlist + ': ' + this.playlists[playlist].name + ' - ' + trackamount + ' tracks');
    }
  },
  printTracks: function(){
    i = 0;
    for(var track in this.tracks){
      console.log(track + ': ' + this.tracks[track].name + ' by ' + this.tracks[track].artist+ ' (' + this.tracks[track].album + ')');
      i++;
  }
  },
  printPlaylist: function(playlistId){
    var trackamount = this.playlists[playlistId].tracks.length;
    console.log(playlistId + ': ' + this.playlists[playlistId].name + ' - ' + trackamount + ' tracks');
    for (var track of this.playlists[playlistId].tracks){ //use of bc here is in an array not object
     console.log(track + ': ' + this.tracks[track].name + ' by ' + this.tracks[track].artist+ ' (' + this.tracks[track].album + ')');

  }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },
  uid : function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},

addTrack: function (name, artist, album) {
  var idvalue = this.uid();
  this.tracks[idvalue]={
    'id':idvalue,
    'name':name,
    artist:artist,
    album:album
  };
},
  addPlaylist: function (name) {
  var idvalue = this.uid();
  this.playlists[idvalue]={
    id : idvalue,
    name:name
  };
},

printSearchResults: function(query) {
  var result = [];
  for (var track in this.tracks){
    trackKeys = Object.keys(this.tracks[track]);
    console.log(trackKeys);
    for(var item of trackKeys){
    if(this.tracks[track][item].search(query)!== -1){
      if(result.indexOf(track) > -1){
    }else{result.push(track);}
  }
  }
  }
  return(result);
},
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
library.printPlaylists();


//printPlaylists(library);

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

library.printPlaylist('p01');

// adds an existing track to an existing playlist


library.addTrackToPlaylist('t01', 'p02');
console.log(library.playlists.p02);


// generates a unique id
// (use this for addTrack and addPlaylist)


//console.log(uid());

// adds a track to the library


library.addTrack('a','b','c');
console.log(library.tracks);


// adds a playlist to the library

library.addPlaylist('BTS');
console.log(library.playlists);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search


console.log(library.printSearchResults('John'));




