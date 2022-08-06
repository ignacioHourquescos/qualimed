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
  const equipamiento = "equipamiento";
  const insumosMedicos = "insumosMedicos";
  const medicinaDeportiva = "medicinaDeportiva";

  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navBar}>
          {/* <Link href="/" passHref><img style={{ paddingLeft: "2rem" }} src="/QualimedAzulPNG.png"></img></Link> */}
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
                  <div className={styles.dropdownSubMenu}>
                    <Link  as={`/products/` + equipamiento}
                      href={`/products/` + equipamiento} passHref>
                      <a>
                        <img src="/ventilatorIcon.png" alt="insumos medicos" />
                        Equipamiento
                      </a>
                    </Link>

                    <Link
                      as={`/products/` + insumosMedicos}
                      href={`/products/` + insumosMedicos}
                      passHref
                    >
                      <a>
                        <img src="/maskIcon.png" alt="insumos medicos" />
                        Insumos médicos
                      </a>
                    </Link>

                    <Link
                      as={`/products/` + medicinaDeportiva}
                      href={`/products/` + medicinaDeportiva}
                      passHref
                    >
                      <a>
                        <img src="/bandageIcon.png" alt="medicina deportiva" />
                        Medicina Deportiva
                      </a>
                    </Link>
                  </div>

                  {/* <Link href="/products/marcas" passHref>
									<DropdownItem>
										<img src="/labelIcon.png" />
											<a>Marcas</a>
									</DropdownItem>
                  </Link> */}
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Link
                target="_blank"
                href={{ pathname: "https://qualimed2021.mercadoshops.com.ar/" }}
                passHref
              >
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
