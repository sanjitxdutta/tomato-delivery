import { createContext } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {



    const contextValue = {
        food_list
    }
    return (
        <StoreContextProvider value={contextValue}>
            {props.childern}
        </StoreContextProvider>
    )
}

export default StoreContextProvider;