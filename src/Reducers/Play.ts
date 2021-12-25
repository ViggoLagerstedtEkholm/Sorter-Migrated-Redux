interface Action{
    type: string
}

const playReducer = (state = false, action: Action) =>{
    switch(action.type){
        case 'START' :
            return state = true;
        case 'STOP' :
            return state = false;
        default:
            return state;
    }
}

export default playReducer;