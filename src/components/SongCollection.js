import React, {Component} from 'react';
import Song from './Song'

class SongCollection extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    let songs = this.props.songs.map((song) => {
      const { id, name, artist, album } = song;
      let className;
      if (this.props.selectedSongId === id) {
        className = "selected";
      } 

      let handleSongSelect = () => this.props.handleSongSelect(id)

      return (
        <Song
          key = {id}
          name = {name}
          artist = {artist}
          album = {album}
          selected = {className}
          handleSongSelect = {handleSongSelect}
        />
      )
    })

    return(
      <ul>
        {songs}
      </ul>
    )
  }
}

export default SongCollection;
