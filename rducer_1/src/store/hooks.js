import { useContext } from "react";
import Context from './Context';


export const useStore =()=>{
    return useContext(Context);// nhận dự liệu từ useCOntext
} 