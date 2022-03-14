import React,{useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {addLog} from '../../actions/logsActions';
import propTypes from 'prop-types';
import {connect} from 'react-redux';



const AddLogModal= ()=>{

     const [message,setMessage]=useState('');
     const [attention,setAttention]=useState('');
     const [developer,setDeveloper]=useState('');
     
const onSubmit=()=>{
     if(message==='' || developer===''){
     
     M.toast({html:'please enter values for message and developer'})
     }
     else
     {
     const newLog= {
            message,
            atttention,
            developer,
           date: new Date()
     
             }
             
         addLog(newLog) 
          M.toast({html:'Log added'})   
     
     setMessage('');
     setDeveloper('');
     setAttention(false)
     
     }
     }

        return(
        <div id='add-log-modal' className='modal'>
        <div className='modal-content'>
        <h4>Enter Developer Log </h4>
        <div className='row'>
        <div className='input-field'>
        <input type='text'
               name='message'
               value= {message}
               onChange={e=> setMessage(e.target.value)}  />
         <label htmlFor='message' className='active'>Developer Log </label>
         </div>
        </div>
        <div className='row'> 
        <div className='input-field'> 
        <select name='developer'
                value={developer}
                className='browser-default'
                onChange={e=> setDeveloper(e.target.value)}
        >
         <option value='' disabled>Select Developer </option>  
         <option value='Adil Altaf'>Select Developer </option> 
         <option value='Sijad Khan'>Select Developer </option>  
         </select>
        </div>
         </div>
         <div clasName='row'>
         <div className='input-field'>
         <p>
         <label>
         <input type='checkbox'
                className='filled-in'
                checked={attention}
                value= {attention}
                onChange={e=> setAttention(!attention)}
          />
          <span> needs Attention </span>
          </label>
          </p>
          <div>
          </div>
        </div>
        <div className='modal-footer'>
        <a href='#!' onClick={onSubmit} className='modal-close waves-effect waves-blue btn-flat'>Submit </a>
        </div>
        </div>
        </div>
        </div>
        
        )
        
        
                        }
                  
         addLOgModal.propTypes= {
         addLog: propTypes.func.isRequired 
         }
        
        export default connect(null,{addLog})(AddLogModal);



