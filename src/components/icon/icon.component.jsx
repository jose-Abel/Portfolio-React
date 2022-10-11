import icons from "../../assets/images/sprite.svg";

const Icon = props => {
	const { name, propClass } = props;

	return (
		<svg className={propClass}>
			<use xlinkHref={`${icons}#${name}`} />
		</svg>
	)
}

export default Icon