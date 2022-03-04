import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="nav">
                <NavLink to="/">
                    <img src="../69940.png" alt="home" className="house"/>
                </NavLink>
                <NavLink to="/beers" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
                    <div>
                        <h2>All Beers</h2>
                    </div>
                </NavLink>
                <NavLink to="/beers/random-beer" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
                    <div>
                        <h2>Random Beer</h2>
                    </div>
                </NavLink>
                <NavLink to="/beers/new-beer" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
                    <div>
                        <h2>New Beer</h2>
                    </div>
                </NavLink>
            
        </div>
    )
}