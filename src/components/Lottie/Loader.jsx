import React from 'react'
import Player from 'react-lottie-player'
import loader from '../../assets/loader.json'

export default function Rocket() {
  return (
   
        <Player
        loop
        animationData={loader}
        play
        style={{width:1450, height:350, }}
        />

  )
}