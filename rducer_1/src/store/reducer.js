import { INPUT_JOB, ADD_JOB } from "./Contant";

const initState = {
    inputJob: '',
    listJobs: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case INPUT_JOB:
            return { ...state, inputJob: action.payload }
        case ADD_JOB:
            return { ...state, listJobs:[...state.listJobs,action.payload] }

        default:
            break;
    }
}

export { initState };
export default reducer;