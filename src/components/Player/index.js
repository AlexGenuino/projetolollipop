import React, { useState } from 'react';
import YouTube from 'react-youtube';

export default function PlayerYotube({videoCompleto}){

    const [currentVideo, setVideo] = useState(videoCompleto);

    const opts = {
        height: '400',
        width: '700',
        playerVars: {
        autoplay: 1,
      },
    };
    return (
        <YouTube videoId={videoCompleto}  opts={opts}  />
    )
    
}
