
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function Acceuil() {
 

 

  return (
    <div className='Acc'>
       
      <div className='bg1'>
      </div>
     
      <div className='titleDesc'>
        <div  className='desc'>Welcome to The new shop “Alger19”</div>
        <div  className='title'><img src='./images/icon.svg' alt='' /></div>
      </div>
      <div className='btn'>
      <Link to="/Menu"><button >START</button></Link>
      </div>

    </div>
  );
}

export default Acceuil;
