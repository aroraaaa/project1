import React, { useRef } from 'react'
import './VideoPlayer.css'
import vid from "../../assets/intro.mp4";

const VideoPlayer = ({playstate,setplaystate}) => {
    const player = useRef(null);

    const closeplayer=(e)=>{
        if(e.target===player.current){
            setplaystate(false);
        }
    }

  return (
    <div className={`video-player ${playstate ? '' : 'hidee'}`}ref={player} onClick={closeplayer}>
        <video src={vid} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
