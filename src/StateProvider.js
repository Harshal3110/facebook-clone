import React, { createContext, useContext, useReducer } from "react";

//preparing the data layer
export const StateContext = createContext();

// higher order component 
// use it to wrap our app and provides data layer functionality

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// to pull something from data layer
export const useStateValue = () => useContext(StateContext);