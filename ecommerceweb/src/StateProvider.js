import React, { createContext, useContext, useReducer } from "react";

// datalayer
export const StateContext = createContext();

// provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull  Information from the data layer
export const useStateValue = () => useContext(StateContext);
