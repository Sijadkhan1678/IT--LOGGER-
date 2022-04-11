
import {ADD_LOG,GET_LOGS,DELETE_LOG,UPDATE_LOG,SET_CURRENT,CLEAR_CURRENT,SET_LOADING,LOGS_ERROR} from '../actions/types'

const initialState ={
   logs: null,
   current: null, 
   loading: false,
   Error: null
   

}

export default  (state=initialState,action)=>{
   
   
   switch (action.type){
    
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
       logs:  state.logs.map(log => state.log.id === action.payload.id ? (action.payload) : (log))
       
       }
      case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log=> log.id !== action.payload.id)
      
      
      }
      case SET_CURRENT:
      return {
      ...state,
      current: action.payload
      
      }
      case CLEAR_CURRENT:
      return {
        ...state,
        current:null
      }
       
       case  SET_LOADING:
       return {
       ...state,
       loading: true
       
       }
        
    default:
      return state
   
   
      

}
}


