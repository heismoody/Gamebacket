import React, { Dispatch } from "react";
import { TaskAction, item } from "../reducer/cartReducer";

interface itemContextType{
    items: item[];
    dispatch: Dispatch<TaskAction>;
}

const ItemContext = React.createContext<itemContextType>({} as itemContextType);

export default ItemContext;