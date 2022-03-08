
import {ADD_LOG,GET_LOGS,DELETE_LOG,UPDATE_LOG,SET_CURRENT,CLEAR_CURRENT,LOADING,LOGS_ERROR} form '../../types'

const initialState ={
   logs: null,
   current: null, 
   loading: false,
   Error: null
   

}

export default logReducer = (state=initialState,action)=>{
   
   
   switch (action){
    
    case GET_LOGS:
    return {
    ...state,
    logs: action.payload,
    loading : false
    
    }
   case ADD_LOG:
   return {
   
        ...state,
        logs: [...state.logs,action.payload]
   
   }
   case UPDATE_LOG:
   return {
       
       ...state,
       return {
       ...state,
       logs:  state.logs.id=== paload.id ? (action.payload) : (logs)
       
       
       }
      case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log=> log.id !== action.payload.id)
      
      
      }
      case SET_CURRENT :
      return {
      ...state,
      current: action.payload
      
      }
      case CLEAR_CURRENT:
      return {
        ...state,
        current:null
      }
       
       case LOADING:
       return {
       ...state,
       loading: true
       
       }
        
   
   }
   
   }

}



