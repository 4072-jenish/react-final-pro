import { applyMiddleware, createStore } from "redux";


const Provider = createStore(rootReducer, applyMiddleware(thunk));

export default Provider;
