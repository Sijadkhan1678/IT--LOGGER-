import React,{useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';


const AddDeveloperModal= ()=>{

     const [firstName,setFirstName]=useState('');
     const [lastName,setLastName]=useState('');
     
     
const onSubmit=()=>{
     if(firstName==='' || lastName===''){
     
     M.toast({html:'please enter values for message and developer'})
     }
     else
     {
     
     console.log(message,attention,developer);
     setFirstName('');
     setLastName('');
     
     }
     }

        return(
        <div id='developer-modal' className='modal'>
        <div className='modal-content'>
        <h4>New Developer </h4>
        <div className='row'>
        <div className='input-field'>
        <input type='text'
               name='firstName'
               value= {firstName}
               onChange={e=> setFirstName(e.target.value)}  />
         <label htmFor='firstName' className='active'>First Name</label>
         </div>
        </div>
        
         <div className='row'>
        <div className='input-field'>
        <input type='text'
               name='lastName'
               value= {lastName}
               onChange={e=> setLastName(e.target.value)}  />
         <label htmFor='LastName' className='active'>Last Name</label>
         </div>
        </div>
       
        
        
        <div className='modal-footer'>
        <a href='#!' onClick={onSubmit} className='modal-close waves-effect waves-blue btn-flat'>Submit </a>
        </div>
        </div>
        
        )
        
        }
        
        export default AddDeveloperModal;
}


