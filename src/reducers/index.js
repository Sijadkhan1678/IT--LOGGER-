
import {combineReducers} from 'redux';
import logReducer from './logReducer';

export const combineReducer= combineReducers(

{
       log : logReducer 
}
)
export default combineReducer;
