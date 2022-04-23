import React, {useState} from 'react'
import styles from './Header.module.scss';
import Link from 'next/link'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {  
    const [dropdown, setDropdown] = useState(false);

    const abrirCerrarDropdown=()=>{
      setDropdown(!dropdown);
    }
  return (
    <>

    <div className={styles.container}>
      <div className={styles.navBar}>
        <img src='/logoChico.png'></img>
          <ul className={styles.links}>
            <li><Link href="/"><a>Inicio</a></Link></li>
            <li><Link href="/about"><a>Quienes Somos</a></Link></li>
            <li><Dropdown isOpen={dropdown} 
                  toggle={abrirCerrarDropdown} 
                  onMouseEnter={abrirCerrarDropdown} 
                  onMouseLeave={abrirCerrarDropdown}
                  >
                  <DropdownToggle caret className={styles.dropdown}>
                    Productos
                  </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem><Link href="/products/equipamiento"><a>Equipamientos</a></Link></DropdownItem>
                        <DropdownItem><Link href="/products/insumosMedicos"><a>Insumos Medicos</a></Link></DropdownItem>
                        <DropdownItem><Link href="/products/insumosDeportivos"><a>Insumos Deportivos</a></Link></DropdownItem>
                      </DropdownMenu>
                </Dropdown>
              </li>
            <li><Link href="/"><a>Tienda Minorista</a></Link></li>
            <li><Link href="/contact"><a>Contacto</a></Link></li>
        </ul>
      </div>
     </div>
  </>
  )
}

export default Header