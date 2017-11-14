import { createStore, applyMiddleware } from 'redux';
import state from '../state';
import reducer from '../reducers';
import {idGenerator} from "./middlewares/idGenerator";

const store = createStore(reducer, state, applyMiddleware(idGenerator));

export default store;