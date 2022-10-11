import Hero from "../../components/hero/hero.component";
import Figures from "../../components/figures/figures.component";
import "./home.styles.scss";

const Home = () => {
	return (
		<section className="hero-section">
			<Hero />
			<Figures />
		</section>
	);
}

export default Home;