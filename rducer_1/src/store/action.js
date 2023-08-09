import { INPUT_JOB,ADD_JOB } from "./Contant"

export const inputJob=(payload)=>{
    return {
        type:INPUT_JOB,
        payload // data
    }
}
export const addJob=(payload)=>{
    return {
        type:ADD_JOB,
        payload
    }
}