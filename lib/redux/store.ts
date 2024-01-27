/* Core */
import {
    configureStore,
    type ThunkAction,
    type Action,
  } from "@reduxjs/toolkit";
  import {
    useSelector as useReduxSelector,
    useDispatch as useReduxDispatch,
    type TypedUseSelectorHook,
  } from "react-redux";
  
  /* Instruments */
  import { reducer } from "./rootReducer";
  
  export const reduxStore = () => {
    return configureStore({
      reducer,
      middleware: (getDefaultMiddleware) => {return getDefaultMiddleware();},
    });
  }
  export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
  export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;
  
  /* Types */
  export type ReduxStore = ReturnType<typeof reduxStore>;
  export type ReduxState = ReturnType<ReduxStore['getState']>;
  export type ReduxDispatch =  ReduxStore['dispatch'];
  export type ReduxThunkAction<ReturnType = void> = ThunkAction<
    ReturnType,
    ReduxState,
    unknown,
    Action
  >;