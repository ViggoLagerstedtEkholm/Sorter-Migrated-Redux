import {BUBBLE_SORT} from "../Components/Algorithms/Algorithms";

interface Action{
    type: string;
    payload: string;
}

const algorithmReducer = (state = BUBBLE_SORT, action: Action) =>{
    switch(action.type){
        case 'SELECT' :
            return state = action.payload;
        default:
            return state;
    }
}

export default algorithmReducer;