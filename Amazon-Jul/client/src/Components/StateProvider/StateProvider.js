// import the necessary functions from React:
import React, {createContext, useContext, useReducer} from 'react';

//Prepare the datalayer
// Declare and export a new context object using createContext():
export const StateContext = createContext();


// Wrap our app and provide the Data Layer
// Define a provider component, let's name it StateProvider, that wraps your entire application and provides the data layer:

//The StateProvider component takes three props: reducer, initialState, and children. The reducer is a function that specifies how state updates should be performed, initialState is the initial value of the state, and children represents the child components that will be wrapped by this provider.
export const StateProvider = ({reducer, initialState, children}) => (
<StateContext.Provider value={useReducer(reducer, initialState)} >
    {children}
</StateContext.Provider>
);

//pull and push information from the data layer

// create a custom hook called useStateValue that allows components to pull and push information from the data layer:
export const useStateValue = () => useContext(StateContext)


