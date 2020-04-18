import React, { Fragment, useState, useEffect, useRef } from 'react';
import {Columns, Button} from 'react-bulma-components';

import RecentlyHeardsService from '../../services/recentrly_heards';
import Music from './music';

import styled from 'styled-components';
import RecentlyHeardsServices from '../../services/recentrly_heards';

const PlaySequenceButton = styled(Button)`
 margin-bottom: 30px;
`

const Musics = (props) => {

    const [songs, setSongs] = useState([]);
    const [playing, setPlaying] = useState([]);
    const AudioRef= useRef();
    const [playRadom, setPlayRandom] = useState(false);

    const nextSong = () => {
        if(playRadom){
            let index = Math.floor(Math.random()* props.songs.length);
            setPlaying(props.songs[index]);
        }else{
            setPlaying([]);
        }
    }

    const switchRandom = () => {
        if(playRadom){
            setPlayRandom(false);
            setPlaying([]);
        }else{
            setPlayRandom(true);
        }
    }

    useEffect(() => {
        if(playRadom)
        nextSong();
    }, [playRadom]);

    useEffect(() => {
        if (AudioRef.current !== null) {
          AudioRef.current.pause();
          AudioRef.current.load();
          if(playing.id) {
            AudioRef.current.play();
            RecentlyHeardsServices.create(playing.album_id)
          }
       }
    }, [playing]);

    useEffect(() => {
        setSongs(props.songs.map((song, key) => 
            <Music 
                song={song}
                playing={playing.id == song.id}
                setPlaying={setPlaying}
                key={key}
                artist_name={props.artist_name}
            />
        ));
    }, [props.songs, playing]);

    return (
        <Fragment>
            <Columns className='is-mobile is-centered'>
                <Columns.Column desktop={{size: 2}} mobile={{size: 12}} className='has-text-centered'>
                    <PlaySequenceButton
                    className='is-medium'
                    color='primary'
                    outlined
                    onClick={()=> switchRandom()}
                    >
                        {playRadom == true ? 'Parar de tocar' : 'Tocar aleatoriamente'}
                    </PlaySequenceButton>
                    <audio controls ref={AudioRef} onEnded={() => nextSong()} className='is-hidden'>
                        <source src={playing.file_url}/>
                    </audio>
                </Columns.Column>
            </Columns>
            {songs}
        </Fragment> 
    );
}

export default Musics;