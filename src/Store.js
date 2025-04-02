import { combineReducers } from "redux";
import {legacy_createStore as createStore } from "redux";

const emailReducer=(state={email:""},action)=>{
   switch (action.type){
    case "emailUpdate":{
       return {email:action.payload};
    }
    default:{ return state}
   }
}

const nameReducer=(state={name:""},action)=>{
    switch (action.type){
        case "nameUpdate":{
         return  {name:action.payload};
        }
        default:{ return state}
       }
}

const rootReducer=combineReducers({name:nameReducer,email:emailReducer})

const Store=createStore(rootReducer)


export default Store;