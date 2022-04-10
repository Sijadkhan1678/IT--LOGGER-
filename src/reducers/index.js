
import {combineReducers} from 'redux';
import authReducer from './authReducer';

export const combineReducer= combineRducers(

{
       auth : authReducer 
}
)
