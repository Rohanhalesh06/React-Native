import { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext'
import { Context as TrackContext  } from '../context/TrackContext'
import { navigate } from '../navigationRef'


export default function(){
    const { createTracks } = useContext(TrackContext);
    const {state:{locations,name},Reset} = useContext(LocationContext);

    const saveTrack =   function(){
        console.log(name,locations)
         createTracks(name,locations);
         Reset();
         navigate('TrackList')
    }
   

    
    return [saveTrack];
};