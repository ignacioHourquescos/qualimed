import "../styles/globals.css";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import SideBar from "../components/BurgerMenu/SideBar";
import { useState } from "react";
import Wpp from "../components/Wpp/Wpp";

function MyApp({ Component, pageProps }) {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

	const drawerToggleClickHandler = () => {
		setSideDrawerOpen((prevState) => {
			setSideDrawerOpen(!prevState.sideDrawerOpen);
		});
	};

	const closeMenu = () => {
		setSideDrawerOpen(false);
	};

	return (
		<>
			<BurgerMenu drawerToggleClickHandler={drawerToggleClickHandler} />
			<SideBar click={closeMenu} show={sideDrawerOpen} />
			<Component {...pageProps} />
			<Wpp number="+54 9 11 2537-9689" message={"hello "} />
		</>
	);
}

export default MyApp;
