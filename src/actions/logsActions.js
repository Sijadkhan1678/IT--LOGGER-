

import { GET_LOGS, ADD_LOG,DELETE_LOG,SET_LOADING,LOG_ERROR,SET_CURRENT,CLEAR_CURRENT} from './types';


// getLogs function

export const getLogs= () => async dispatch => {

try{
   
const res = await fetch('http://localhost:8000/logs');

     const data= await res.json();             
     
    dispatch({
    
            type: GET_LOGS,
            payload: data

           });
}
catch (err){
  dispatch(
    {
      type: LOG_ERROR
    }
  )
}


}

 // add log function

export const addLog= log => async dispatch => {

try {
  const res= await fetch('http://localhost:8000/logs',{
       method: 'POST',
       body: JSON.stringify(log),
       headers:{
         'Content-Type': 'application-json'
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

const res = await fetch(`http://localhost:8000/logs/${id}`,{
    method : 'UPDATE',
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

// set current Function

export  const setCurrent = log => {
  return{
    type: SET_CURRENT,
    payload: log
  }
}

// clear Current 

export const clearCurrent = () =>{

  return  {type: CLEAR_CURRENT}
  
}


export const deleteLog= id => async dispatch => {

   try {
     await fetch (`http://localhost:8000/logs/${id}`,{
     method: 'DELETE'
     
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
