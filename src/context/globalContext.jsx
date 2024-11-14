import { useContext } from "react";
import { AppContext } from "./context.jsx";

// custom hook is mandatory to start with the use keyword
function useGlobalContext(){
    return useContext(AppContext);
}

export default useGlobalContext;