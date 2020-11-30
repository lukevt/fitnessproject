import { REGISTER_SUCCESS } from "../actions/types"


const initialState = {
    user: {}
}
   
export default function(state = initialState, action) {
    switch(action.type) {
        
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            console.log("reducer"); 
            return {
                ...state,
                
            };
        
        
        
        default:
            return state;
    }
}
