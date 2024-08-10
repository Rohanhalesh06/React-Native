import createdataContext from "./createdataContext";
import TrackerApi from  '../api/track'




const trackReducer = function(state,action){
    switch(action.type){

        case 'fetch_tracks':
        
            return action.payload


        default:
            return state;
    }
};



const fetchTracks = function(dispatch){
    return async function(){
        const response = await TrackerApi.get('/tracks');
        //console.log(response)
        dispatch({type:'fetch_tracks',payload:response.data})



    }

}

const createTracks = function(dispatch){
    
    return async function(name,locations){

        const response = await TrackerApi.post('/tracks',{name,locations})
      //  console.log("respnse",response)

    }


    }


export const {Provider, Context} = createdataContext(
    trackReducer,{fetchTracks,createTracks},[]
)