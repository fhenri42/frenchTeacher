import React, { Component, PropTypes } from 'react'
import { fromJS } from 'immutable'
import "./style.scss"

class Play extends Component {

  static propTypes = {}


   state = {
     text :  '',
   }


  playFile = ()  => {
    console.log("oeho");
  }



  render () {
    return (
      <div className="playPart">
      <audio controls
      className="audioPlayer">
      <source src="http://www.litteratureaudio.net/mp3/Prosper_Merimee_-_Dictee_Ecouter_le_texte.mp3" type="audio/mpeg" />
      </audio>
      </div>
    )
  }
}

export default Play
