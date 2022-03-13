

import { GET_LOGS, ADD_LOG,DELETE_LOG,SET_LOADING} from './types';


// getLogs function

export const getLogs= () => async dispatch => {
try{
   
const res = await fetch('http://localhost:8000/logs');
const data= await res.json();             
console.log(data)
dispatch({
type: GET_LOGS,
payload: data

});
}
catch (err){
  dispatch(
    {
      type: LOG_ERRROR
    }
  )
}


}

 // add log function

export const addLog= log => async dispatch => {

try {
  const res= await fetch('/logs',{
       method: POST,
       body: JSON.stringify(log),
       headers:{
         'Content-Type': 'apllication-json'
       }
       
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
 dispatch({
 type: LOG_ERROR,
 payload: err.response.data
 })
 }
}


export const deleteLog= id => async dispatch => {

   try {
     await fetch (`/logs/${id}`,{
     method: DELETE
     
               })
   
   }
   catch(err){
   dispatch({
   type: DELETE_LOG,
   payload: err.response
   
   })
   

  }}

  // loading action

 export const setLoading = () => dispatch => {
        
     dispatch({
      type: SET_LOADING,

     })


  }