import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
	return (
		<Fragment>
     <div class="navbar">
        <div class="navbar-name">
          <a href="https://github.com/jose-Abel"><p class="navbar-name-p">Jose Abel Ramirez Frontany</p></a>
        </div>
        <nav>
          <ul class="navbar-ul" id="hamburger-menu">
            <li class="navbar-li-link"><a href="#recent-works-id" class="navbar-a-link">Portfolio</a></li>
            <li class="navbar-li-link"><a href="#about-me-section-id" class="navbar-a-link">About</a></li>
            <li class="navbar-li-link"><a href="#contact-me-section-id" class="navbar-a-link">Contact <i class="far fa-envelope"></i></a></li>
          </ul>
        </nav>
      </div>
			<Outlet/>
		</Fragment>
	);
}

export default Navigation;