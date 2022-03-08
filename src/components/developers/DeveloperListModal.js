

import React,{useState,useEffect}  from 'react';


const {developers,SetDevelopers}= useState([]);
const {loading,setLoading}= useState(false);


   useEffect(()=>{

        getDevelopers();
    },[]);

const getDeveloper=async ()=>{
  
  
  
  setLoading(true);
  const res= await fetch(/developer);
  const data = await res.json();
  setDevelopers(data);
  setLoading(false);
  
}



  const DeveloperListModal= ()=>{

   return(
   <div id='developer-list-modal' className='modal'>
   <div className='modal-content'>
   <h4> classname='text-center'> Developer list </h4>
      <ul className='collection'>
        
     { !loading && 
     developers.map(developer=>(<DeveloperItem key={developer.id} developer={developer} />))
     
     }   
       
        
        </ul>
        </div>

</div>
)
}
export default DeveloperListModal;

