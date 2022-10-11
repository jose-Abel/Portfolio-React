import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
	return (
		<Fragment>
     <div className="navbar">
        <div className="navbar-name">
          <Link to="/"><p className="navbar-name-p">Jose Abel Ramirez Frontany</p></Link>
        </div>
        <nav>
          <ul className="navbar-ul" id="hamburger-menu">
            <li className="navbar-li-link"><Link to="#recent-works-id" className="navbar-a-link">Portfolio</Link></li>
            <li className="navbar-li-link"><Link to="#about-me-section-id" className="navbar-a-link">About</Link></li>
            <li className="navbar-li-link"><Link to="#contact-me-section-id" className="navbar-a-link">Contact <i className="far fa-envelope"></i></Link></li>
          </ul>
        </nav>
      </div>
			<Outlet/>
		</Fragment>
	);
}

export default Navigation;