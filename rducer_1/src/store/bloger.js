export const bloger=(reducer)=>{
    return((preState,action)=>{
        console.group(action.type);
        console.log('preState',preState);
        const nextState= reducer(preState,action);
        console.log('nextState',nextState);
        console.groupEnd();
        return nextState
    })
}