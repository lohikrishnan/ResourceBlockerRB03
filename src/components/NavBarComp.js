import React from 'react'
import {Link} from 'react-router-dom';

function NavBarComp() {
  const navStyle = {
    color: 'white'
  };
  return (
    <div>
        <nav>
          <Link style={navStyle} to="/">
            <h3 className='proj-name'>Resource Blocker</h3>
          </Link>
            <ul className="nav-links">
              <Link style={navStyle} to="/login">
                <li>Login</li>
              </Link>
            </ul>
            
        </nav>
    </div>
  )
}

export default NavBarComp;