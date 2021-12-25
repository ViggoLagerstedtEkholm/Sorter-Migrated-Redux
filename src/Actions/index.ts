export const start = () =>{
    return{
        type: 'START'
    };
}

export const stop = () =>{
    return{
        type: 'STOP'
    };
}

export const setActiveAlgorithm = (payload: any) =>{
    return{
        type: 'SELECT',
        payload: payload
    };
}