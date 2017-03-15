import React, { Component } from 'react';

const Song = (props) => {
  return(
    <li className={props.selected} onClick={props.handleSongSelect}>
      {props.name} - {props.artist}
    </li>
  )
}

export default Song
