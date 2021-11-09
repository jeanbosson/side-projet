import React from "react";
import { NavLink } from "react-router-dom";

const Navigations = () => {
    return (
        <div>
        <div className="sideBar">
            <div className="id">
                <div className="IdContent">
                    <img src="./media/billGates.jpg" alt="gatefolio" />
                    <h4>Une vie</h4>
                </div>
            </div>
            <div className="navigations">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive" >
                        <i class="far fa-house"></i>
                         <span> Accueils</span>

                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/information" activeClassName="navActive" >
                        <i class="fad fa-address-book"></i> 
                         <span> Contact</span>

                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/competence" activeClassName="navActive" >
                            <i className="fas fa-home"> </i>
                            <span> Know</span>

                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/portefolio" activeClassName="navActive" >
                        <i class="fab fa-hotjar"></i>
                         <span> portefolio</span>

                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div className="socialNetWork">
            <ul>
                <li>
                    <a href="google.com" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin"></i>
                     </a>
                </li>
                <li>
                    <a href="google.com" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i>
                     </a>
                </li>
                <li>
                    <a href="google.com" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter"></i>
                     </a>
                </li>
                <li>
                    <a href="google.com" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-copen"></i>
                     </a>
                </li>
            </ul>
            <div className="signature">
                <p>
                    jeanBosson - 2020 
                </p>

            </div>

        </div>
    </div>
   
  );
};

export default Navigations;