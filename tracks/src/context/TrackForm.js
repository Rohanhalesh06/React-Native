import React,{useContext} from "react";
import { Input,Button } from 'react-native-elements';
import Spacer from "../screens/components/spacer";
import { Context as LocationContext } from "./LocationContext";

const TrackForm = () => {
    const {
        state:{name,recording,locations},
        startRecording,
        stopRecording,
        changeName
    } =  useContext(LocationContext)

    console.log(locations.length)

    return(
    <>    
        <Spacer>
            <Input
            onChangeText={changeName}
            placeholder="Enter name "/>
        </Spacer>

        

      
        {recording ? (
            <Button
                title="Stop Recording"
                value={name}
                onPress={function(){
                    stopRecording();
                }}/>
            ) : (
       
            <Button
                title="Start Recording"
                value={name}
                onPress={function(){
                startRecording();
                }}/>
            )
        }
            
    </>
    )
}


export default TrackForm;
 