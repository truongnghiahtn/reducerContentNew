import Context from "./Context";
import { useReducer } from "react";
import reducer,{initState} from "./reducer";
import { bloger } from "./bloger";


function Provider({children}){

    const [state,dispath]= useReducer(bloger(reducer),initState)

    return(<Context.Provider  value={[state,dispath]}>
        {children}
    </Context.Provider>)
}

export default Provider;