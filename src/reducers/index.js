import { combineReducers } from 'redux';
import {coinsList} from './coinsList';

export default combineReducers({
    coinsList: coinsList
});