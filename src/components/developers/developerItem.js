

import React from 'react';

const DeveloperItem= ({developer})=>{


<li className='collection-item'>
   
   
   {developer.firstName} {developer.lastName}
  <div>
  
  <a className='secondary-content'> 
  <i className='material-icons grey-text'> delete </i>
  </a>
   </div>


 </li>

}
