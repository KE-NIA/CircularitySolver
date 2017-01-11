import {applyMiddleware, createStore, compose} from "redux";
import rootReducer from '../reducer/rootReducer';
import {sensorSocketMiddleware} from '../middleware/sensorSocketMW';
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
/**
 * Create the store.
 *
 * @param preloadedState
 * @returns {*}
 */
export default function configureStore(preloadedState) {

    const logger = (store) => (next) => (action) => {
        console.log("action fired", action);
        next(action);
    };

    const error = (store) => (next) => (action) => {
        try{
            next(action);
        } catch(e) {
            console.log("error", e);
            throw e;
        }
    };

    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
          applyMiddleware(thunkMiddleware,sensorSocketMiddleware,error,logger),
          window.devToolsExtension ? window.devToolsExtension() : f => f // for debugging in a browser
        )
    );
    store.subscribe(() =>{
      console.log("store changed", store.getState()) //everytime store changes, "store changed" will be shown on console
    })
    return store;

};
