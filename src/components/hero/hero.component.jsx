import './hero.styles.scss';

const Hero = () => {
	return (
    <div className="hero-section-box">
			<div className="social-media-icons">
				<ul className="social-media-ul">
					<li className="social-media-li">
						<a href="https://github.com/jose-Abel" className="social-media-links">
						<i className="fab fa-github"></i></a>
					</li>
					<li className="social-media-li">
						<a href="https://www.linkedin.com/in/joseabelramirezfrontany/" className="social-media-links"><i className="fab fa-linkedin"></i></a>
					</li>
					<li className="social-media-li">
						<a href="https://www.facebook.com/profile.php?id=100008206235156" className="social-media-links"><i className="fab fa-facebook"></i></a>
					</li>
				</ul>
			</div>
			<div className="hero-text-box">
				<h1 className="hero-text-h1">Hey There. <span className="hero-main-text-name">I'm Jose Abel</span></h1>
				<h2 className="hero-text-title">I'm a Full Stack Web Developer</h2>
				<p className="hero-text-p">I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
			</div>
		</div>
	);
}

export default Hero;