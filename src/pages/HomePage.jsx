import { Link, NavLink } from "react-router-dom";


export default function HomePage() {
    return (
        <div className="home">
            <NavLink to="/beers">
                <div>
                    <img src="../assets/beers.png" alt="all beers"/>
                    <h2>All Beers</h2>
                </div>
            </NavLink>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec sapien rhoncus, auctor dui et, convallis nibh. Curabitur mollis euismod nisl. Fusce iaculis tempus purus ut pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum, urna vel eleifend gravida, purus lacus aliquam velit, vitae efficitur sem dolor vitae elit. 
            </p>
            <NavLink to="/random-beer">
                <div>
                    <img src="../assets/random-beer.png" alt="random beer"/>
                    <h2>Random Beer</h2>
                </div>
            </NavLink>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec sapien rhoncus, auctor dui et, convallis nibh. Curabitur mollis euismod nisl. Fusce iaculis tempus purus ut pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum, urna vel eleifend gravida, purus lacus aliquam velit, vitae efficitur sem dolor vitae elit.
            </p>
            <NavLink to="new-beer">
                <div>
                    <img src="../assets/new-beer.png" alt="new beer"/>    
                    <h2>New Beer</h2>
                </div>
            </NavLink>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec sapien rhoncus, auctor dui et, convallis nibh. Curabitur mollis euismod nisl. Fusce iaculis tempus purus ut pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum, urna vel eleifend gravida, purus lacus aliquam velit, vitae efficitur sem dolor vitae elit.
            </p>
        </div>
    )
}