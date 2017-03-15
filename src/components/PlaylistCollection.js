import React, { Component } from 'react';
import Playlist from './Playlist'

class PlaylistCollection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let playlists = this.props.playlists.map((playlist) => {
      const{ id, name, songs } = playlist;
      let className;
      if (this.props.selectedPlaylistId === id) {
        className = "selected";
      }

      let handlePlaylistSelect = () => this.props.handlePlaylistSelect(id);

      return(
        <Playlist
          key={id}
          name={name}
          songs={songs}
          selected = {className}
          handlePlaylistSelect={handlePlaylistSelect}
        />
      )
    })

    return(
      <ul>
        {playlists}
      </ul>
    )
  }
}

export default PlaylistCollection;
