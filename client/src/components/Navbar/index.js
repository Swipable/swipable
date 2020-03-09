import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import UserContext from '../../context/UserContext';


function Navbar(props) {

  const { isLoggedIn } = useContext(UserContext);
  console.log({isLoggedIn})
  return (
     <>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

    <a className="navbar-brand" href="#">
    <img src="https://github.com/Swipable/swipable/blob/development/client/src/components/Navbar/logo.png?raw=true" width="130" alt="cravings"/>
    </a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/search" className="nav-link"> Search <span class="sr-only">(current)</span></Link>
            </li>
            {/*TERNARY OPERATOR TO SHOW NAV LINKS ONLY IF A USER IS LOGGED IN -- NO ACCESSING PROFILE/TEAM IF NOT LOGGED IN*/}
            {isLoggedIn === true ? ([
          <>
            <li className="nav-item active">
                <Link to="/profile" className="nav-link"> Profile <span class="sr-only">(current)</span></Link>
                  </li>  
            <li className="nav-item active">
              <Link to="/favorites" className="nav-link"> Favorites <span class="sr-only">(current)</span></Link>
                  </li>
            <li className="nav-item active">
              <Link to="/newsfeed" class="nav-link" > Newsfeed <span class="sr-only">(current)</span></Link>
                  </li>
            <li className="nav-item active">
              <Link to="/team" className="nav-link"> Team <span class="sr-only">(current)</span></Link>
                  </li> 
          </>    
        ]) : (null) }     


    </ul>
    
            <form className="form-inline my-2 my-lg-0">
            { isLoggedIn === true ? ( 
              <Link to="/logout"><button className="btn btn-outline-light my-2 my-sm-0" >Logout</button></Link>
            ) : (
              <>
                <Link to='/signup'><button className='btn btn-outline-light my-2 my-sm-0'>Sign Up</button></Link>
                <Link to='/login'><button className='btn btn-outline-light my-2 my-sm-0'>Login</button></Link>
              </>
              )}
      </form>
     
  </div>
</nav>

</>

  );

}

export default Navbar;

