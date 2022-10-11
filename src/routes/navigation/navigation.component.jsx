import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
	return (
		<Fragment>
     <div className="navbar">
        <div className="navbar-name">
          <a href="https://github.com/jose-Abel"><p className="navbar-name-p">Jose Abel Ramirez Frontany</p></a>
        </div>
        <nav>
          <ul className="navbar-ul" id="hamburger-menu">
            <li className="navbar-li-link"><a href="#recent-works-id" className="navbar-a-link">Portfolio</a></li>
            <li className="navbar-li-link"><a href="#about-me-section-id" className="navbar-a-link">About</a></li>
            <li className="navbar-li-link"><a href="#contact-me-section-id" className="navbar-a-link">Contact <i className="far fa-envelope"></i></a></li>
          </ul>
        </nav>
      </div>
			<Outlet/>
		</Fragment>
	);
}

export default Navigation;