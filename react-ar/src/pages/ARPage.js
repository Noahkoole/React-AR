import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';

    ReactDOM.render(
        <AR />,
        document.querySelector("body")
    );

function AR() {

  function changeScreen() {
      console.log("Leave");
    const video = document.querySelector("video");
    video.remove()
  }

  useEffect(() => {
    return () => {
      changeScreen()
    }
  }, [])
  

  return (
    <>
      <nav style={{ position: "absolute", zIndex: 100, top: 0, left: 0 }}>
        <button>Home</button>
      </nav>
      <a-scene vr-mode-ui="enabled: false" embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-camera
          look-controls-enabled="false"
          arjs-look-controls="smoothingFactor: 0.1"
          gps-projected-camera="gpsMinDistance: 5"
          rotation-reader
        >
        </a-camera>
        <a-entity
          gltf-model="foot.glb" 
          gps-projected-entity-place="latitude: 51.45000498326459; longitude: 5.455568849895146;" 
          scale="1 1 1">

        </a-entity>
        </a-scene>
    </>
  )

}