import React,{useState} from 'react';
import M from 'materialize-css/dist/js/materialize/min.js';



const EditLogModal= () => {

     const [message,setMessage]=useState('');
     const [attention,setAttention]=useState('');
     const [developer,setDeveloper]=useState('');
     
     const onSubmit=()=>{
     if(message==='' && developer===''){
     
     M.toast({html:'Updated Log'})
     }
     else{
     
     console.log(message,attention,developer);
     setMessage('');
     setDeveloper('');
     setAttention(false)

              }
         }

        return(

        <div id='edit-log-modal' className='modal'>
        <div className='modal-content'>
        <h4>Edit Developer Log </h4>
        <div className='row'>
        <div className='input-field'>
        <input type='text'
               name='message'
               value= {message}
               onChange={e=> setMessage(e.target.value)}  />
         <label htmFor='message' className='active'>Developer Log </label>
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
        
        export default EditLogModal;
