import React, { createContext, useContext, useReducer } from "react";
import appReducer, { initialState } from "./reducer";

const AppContext = createContext();

export const useAppContext = () => {
  const { dispatch, store } = useContext(AppContext);
  return {
    dispatch,
    store,
  };
};

export default ({ component: Component }) => {
  const [store, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ dispatch, store }}>
      <Component />
    </AppContext.Provider>
  );
};
