import React, { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
	const [dropdown, setDropdown] = useState(false);

	const abrirCerrarDropdown = () => {
		setDropdown(!dropdown);
	};
	return (
		<>
			<div className={styles.container}>
				<div className={styles.navBar}>
					<Link href="/" passHref><img style={{ paddingLeft: "2rem" }} src="/QualimedAzulPNG.png"></img></Link>
					<ul className={styles.links}>
						<li>
							<Link href="/" passHref>
								<a>Inicio</a>
							</Link>
						</li>
						<li>
							<Dropdown
								isOpen={dropdown}
								toggle={abrirCerrarDropdown}
								onMouseEnter={abrirCerrarDropdown}
								onMouseLeave={abrirCerrarDropdown}
							>
								<DropdownToggle caret className={styles.dropdown}>
									Productos
								</DropdownToggle>
								<DropdownMenu tag="div" className={styles.dropdownMenu}>
									<DropdownItem>
										<img src="/bandageIcon.png" />
										<Link href="/products/equipamiento" passHref>
											<a>Equipamientos</a>
										</Link>
									</DropdownItem>
									<DropdownItem>
										<img src="/maskIcon.png" />
										<Link href="/products/insumosMedicos" passHref>
											<a>Insumos médicos</a>
										</Link>
									</DropdownItem>
									<DropdownItem>
										<img src="/ventilatorIcon.png" />
										<Link href="/products/medicinaDeportiva" passHref>
											<a>Medicina Deportiva</a>
										</Link>
									</DropdownItem>
									<DropdownItem>
										<img src="/labelIcon.png" />
										<Link href="/products/marcas" passHref>
											<a>Marcas</a>
										</Link>
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</li>
						<li>
							<Link target="_blank" href={{pathname:"https://qualimed2021.mercadoshops.com.ar/"}} passHref>
								<a>Tienda Minorista</a>
							</Link>
						</li>
						<li>
							<Link href="/about" passHref>
								<a>Quienes Somos</a>
							</Link>
						</li>
						<li>
							<Link href="/contact" passHref>
								<a>Contacto</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
