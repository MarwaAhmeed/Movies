import { NavLink } from "react-router-dom";
export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient sticky-top ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"}>NETFLIX</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page"  activeClassName="activeRoute"
           activeStyle={{ color: 'red' }} to={"/"} exact={true}>Movies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/favorites"} activeClassName="activeRoute"
           activeStyle={{ color: 'red' }} >Favorites</NavLink></li>
                <li className="nav-item">
                <NavLink className="nav-link order-3" to={"/register"} activeClassName="activeRoute"
           activeStyle={{ color: 'red' }}>Register</NavLink></li>
                <li className="nav-item">
                <NavLink className="nav-link" to={"/login"} activeClassName="activeRoute"
           activeStyle={{ color: 'red' }}>Login</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}