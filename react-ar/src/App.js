import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import {Scene} from '@belivvr/aframe-react'

export default function App() {

  const [showAR, setShowAR] = useState(true)

  function changeScreen() {
    // setShowAR(!showAR);
    // let video = document.querySelector('video')
    // if (video) {
    //   video.remove()
    // }
  }

  return (
    <div>
      <nav style={{ position: "absolute", zIndex: 100, top: 0, left: 0 }}>
        <button onClick={() => changeScreen()}>Home</button>
      </nav>
      <Scene vrModeUI={{enabled: false}} >
        <a-entity
          gltf-model="foot.glb" 
          gps-projected-entity-place="latitude: 51.45109927924565; longitude: 5.453051080483449;" 
          scale="1 1 1">

        </a-entity>
        <a-camera
          look-controls-enabled="false"
          arjs-look-controls="smoothingFactor: 0.1"
          gps-projected-camera="gpsMinDistance: 5"
          rotation-reader
        >
        </a-camera>
        </Scene>
    </div>
  )

}