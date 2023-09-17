import React, {useState, useCallback} from "react";
import "./App.css";

import Playlist from "../Playlist/Playlist";
import Searchbar from "../Searchbar/Searchbar";
import Searchresult from "../Searchresult/Searchresult";
import Spotify from "../../util/Spotify";

const App = () => {
    const [searchresults, setSearchresults] = useState([]);
    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [playlistTracks, setPlaylistTracks] = useState([]);
  
    const search = useCallback((term) => {
      Spotify.search(term).then(setSearchresults);
    }, []);
  
    const addTrack = useCallback(
      (track) => {
        if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
          return;
  
        setPlaylistTracks((prevTracks) => [...prevTracks, track]);
      },
      [playlistTracks]
    );
  
    const removeTrack = useCallback((track) => {
      setPlaylistTracks((prevTracks) =>
        prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
      );
    }, []);
  
    const updatePlaylistName = useCallback((name) => {
      setPlaylistName(name);
    }, []);
  
    const savePlaylist = useCallback(() => {
      const trackUris = playlistTracks.map((track) => track.uri);
      Spotify.savePlaylist(playlistName, trackUris).then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
      });
    }, [playlistName, playlistTracks]);
  
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <Searchbar onSearch={search} />
          <div className="App-playlist">
            <Searchresult searchresults={searchresults} onAdd={addTrack} />
            <Playlist
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onNameChange={updatePlaylistName}
              onRemove={removeTrack}
              onSave={savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default App;
  