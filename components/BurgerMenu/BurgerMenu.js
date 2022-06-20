import ss from "./BurgerMenu.module.scss";

const BurgerMenu = (props) => {
	return (
		<>
			<header className={ss.toolbar}>
				<button
					className={ss.burgerIcon}
					onClick={props.drawerToggleClickHandler}
				>
					{burger}
				</button>
			</header>
		</>
	);
};

export default BurgerMenu;

const burger = (
	<svg viewBox="0 0 70 50" width="30" height="30">
		<rect width="70" height="7" fill="#ffffff"></rect>
		<rect y="20" width="70" height="7" fill="#ffffff"></rect>
		<rect y="40" width="70" height="7" fill="#ffffff"></rect>
	</svg>
);
