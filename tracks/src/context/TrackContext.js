import createdataContext from "./createdataContext";
import TracerApi from  '../api/track'




const trackReducer = function(state,action){
    switch(action.type){
        default:
            return state;
    }
};



const fetchTracks = function(dispatch){

}

const createTracks = function(dispatch){
    
    return async function(name,locations){

        const response = await TracerApi.post('/tracks',{name,locations})
      //  console.log("respnse",response)

    }


    }


export const {Provider, Context} = createdataContext(
    trackReducer,{fetchTracks,createTracks},[]
)