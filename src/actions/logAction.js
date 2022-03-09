

import { GET_LOGS, ADD_LOG,DELETE_LOG,UPDATE_LOG } from './types';


// getLogs function

export const getLogs= () => async dispatch => {

   
const res = await fetch('/logs');
const data= await res.json();             

dispatch({
type: GET_LOGS,
payload: data

});


}

 // add log function

export const addLog= log => async dispatch => {

try {
  const res= await fetch(`/logs,{
       method: POST,
       body: JSON.stringify(log),
       
  })
  
  dispatch({
  type : ADD_LOG,
  payload: res
  
  })
  
  }
  
  catch(err){
  
  dispatch (
  {
  type : LOG_ERROR,
  payload: err.response
  
  }
  )
  
  }

}



export const updateLog= id => async dispatch =>{

try {

const res = await fetch(`/logs/${id}`,{
    method : UPDATE,
    body :  id

})

const data = await res.json();

}
 catch (err){
 dispatch(
 type: LOG_ERROR,
 payload: err.response
 )
 }
}


export const deleteLog= id => async dispatch => {

   try {
     await fetch (`/logs/${id}`,{
     method: DELETE,
     
     })
   
   }
   catch(err){
   dispatch({
   type: DELETE_LOG,
   payload: err.response
   
   })
   }
}
