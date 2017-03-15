import React, { Component } from 'react'

const Playlist = (props) => {
    return(
      <li className={props.selected} onClick={props.handlePlaylistSelect}>
        {props.name}
      </li>
    )
  }

export default Playlist
