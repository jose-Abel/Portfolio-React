import { Fragment } from "react";
import Hero from "../../components/hero/hero.component";
import Figures from "../../components/figures/figures.component";
import RecentWorks from "../../components/recent-works/recent-works.component";
import "./home.styles.scss";

const Home = () => {
	return (
		<Fragment>
			<section className="hero-section">
				<Hero />
				<Figures />
			</section>
			
			<section className="recent-works" id="recent-works-id">
				<RecentWorks />
			</section>
		</Fragment>
	);
}

export default Home;