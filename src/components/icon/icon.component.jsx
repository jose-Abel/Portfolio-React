import icons from "../../assets/images/sprite.svg";
import "../figures/figures.styles.scss";

const Icon = props => {
	const { name, propClass } = props;

	return (
		<svg className={propClass}>
			<use xlinkHref={`${icons}#${name}`} />
		</svg>
	)
}

export default Icon