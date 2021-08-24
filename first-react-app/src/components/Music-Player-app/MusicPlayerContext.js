import React, { createContext, useState } from 'react';
import Audio1 from "../songs/Audio1.mp3";
import Audio2 from "../songs/Audio2.mp3";

export const MusicPlayerContext = createContext;

export default function MusicPlayerProvider(props) {

    const[state , setState] = useState({
        audioPlayer: new Audio(),

        tracks: [

            {
                name:"Audio 1 " ,
                file: Audio1
            },


            {
                name:"Audio 2 " ,
                file: Audio2
            },
        ],

        currentTrackIndex: null,
        isPlaying: false
    })
    return (
        <div>

        <MusicPlayerProvider value={[state , setState]}>
            {props.children}
        </MusicPlayerProvider>

        HII
        
            
        </div>
    )
}
