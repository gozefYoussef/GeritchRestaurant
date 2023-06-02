import React from 'react';
import { meal } from '../../constants';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import './Intro.css';

const Intro = () => {
  const [playVideo, setplayVideo] = React.useState(false)
  const VidRef = React.useRef();
  const handleVideo = () => {
    setplayVideo((prev) => !prev)
    if(playVideo){
      VidRef.current.pause();
    } else {
      VidRef.current.play();
    }
  }

  return (
  <div className='app__video'> 
    <video 
      src={meal}
      ref={VidRef}
      type="video/mp4"
      loop
      controls={false}
      muted
    />
    <div className='app__video-overlay flex__center'>
      <div className='app__video-overlay_circle flex__center'
            onClick={handleVideo}
      >
       {playVideo 
        ? <BsPauseFill color='#fff' fontSize={30}/>
        : <BsFillPlayFill color='#fff' fontSize={30}/>} 
      </div>
    </div>
  </div>
)};

export default Intro;
