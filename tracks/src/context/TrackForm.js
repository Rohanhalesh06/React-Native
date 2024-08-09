import React,{useContext} from "react";
import { Input,Button } from 'react-native-elements';
import Spacer from "../screens/components/spacer";
import { Context as LocationContext } from "./LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const {
        state:{name,recording,locations},
        startRecording,
        stopRecording,
        changeName
    } =  useContext(LocationContext)

    const [saveTrack] = useSaveTrack();
    //console.log(locations.length)

    return(
    <>    
        <Spacer>
            <Input
            onChangeText={changeName}
            placeholder="Enter name "/>
        </Spacer>

        

      
        {recording ? (

            <Spacer>
            <Button
                title="Stop Recording"
                value={name}
                onPress={function(){
                    stopRecording();
                }}/>
            </Spacer>

            ) : (
       
            <Spacer>
            <Button
                title="Start Recording"
                value={name}
                onPress={function(){
                startRecording();
                }}/>
            </Spacer>
            
            )
        }

        {
            !recording && locations.length
            ? <Button title="Save Recording" onPress={saveTrack}/>
            : null
        }
            
    </>
    )
}


export default TrackForm;
 