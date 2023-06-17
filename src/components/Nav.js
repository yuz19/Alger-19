import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav id='first'>
     <Link to="/Menu"><img src='../images/icon.svg' alt='' width={200} />
     </Link>
    <ul>
      <li>Homme</li>
      <li>Femme</li>
      <li>Collections</li>
    </ul>
   </nav>
  )
}

export default Nav