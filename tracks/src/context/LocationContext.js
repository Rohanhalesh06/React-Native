import createdataContext from "./createdataContext";

const locationReducer = function(state,action) {
    switch(action.type){

        case 'Reset':
            return {...state,name:"",locations:[]}

        case 'changeName':
            {
            return {...state,name:action.payload}
            }

        case 'add_location':
            return {...state,locations:[...state.locations,action.payload]}

        case 'add_current_location':
            return {...state,currentLocation:action.payload};
        
        case 'start':
            return {...state,recording:true};
        
        case 'stop':
            return {...state,recording:false}

        default:
            return state;
    }
};

const Reset = function(dispatch){
    return function(){
        dispatch({type:'reset'})

    }
}


const changeName = function(dispatch){
    return function(name){
        dispatch({type:'changeName',payload:name})
    }
}


const startRecording = function(dispatch){
    return function(){
        dispatch({type:'start'})
    }
}

const stopRecording = function(dispatch){
    return function(){
        dispatch({type:'stop'})

    }
}

const addLocation = function(dispatch){
    return function(location,recording){
       // console.log("location : ",location)
        dispatch({type:'add_current_location',payload:location});
        if(recording){
            dispatch({type:'add_location',payload:location})
        }
    }
}


export const {Context,Provider} = createdataContext(locationReducer,
    {startRecording,stopRecording,addLocation,changeName,Reset},
    {name:'',recording:false,locations:[],currentLocation:null });