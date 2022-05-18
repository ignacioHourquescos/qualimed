import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import classes from './SideBar.module.scss';
import "animate.css/animate.min.css";
import Header from '../Header/Header';
import 'antd/dist/antd.css';
import { Collapse, styled } from 'antd';
const { Panel } = Collapse;


// import useAppContext from '../../Context/UseAppContext';


   
const SideBar = (props) => {
   // const {lang} = useAppContext();
   const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const [state, setState] = useState(false);

   function callback(key) {
    console.log(key);
    setSideDrawerOpen(!sideDrawerOpen);
   }
   function colorice(key1) {
    console.log(key1);
    setState(!state);

   }

   const text = 'aaaaaaaaaa';
   

    

    return(<>
        {
            props.show
            ?
            
            <nav className={classes.side_drawer_open}>
                <div>
                 <Header/>
                </div>
                <div className={classes.close} onClick={props.click}>{closeIcon}</div>
                    
                  <ul className={classes.ul}>
                        <li className={classes.liTop} onClick={props.click}><Link href="/">Inicio</Link></li>
                        <div className={classes.collapse}>
                        <Collapse onChange={callback} className={classes.collapse}  >
                                <Panel header={<a  style={{ color: sideDrawerOpen ? '#3E4095' : '#595858', fontWeight: sideDrawerOpen ? '700' : '400' }}  >Productos</a>} showArrow={false} key="1" className={classes.panel}  >
                                    <input type='text'
                                            placeholder='    Buscar Producto'
                                    ></input>
                                    <hr/>
                                        <Collapse onChange={colorice} defaultActiveKey="1"  accordion={true} className={classes.collapse2}>
                                            <Panel key="1" showArrow={false} className={classes.items} header={<><img src='/ventilatorIcon.png' /><a style={{ color: state ? '#595858' : '#3E4095' }}>Equipamientos</a></>}>
                                                <li className={classes.liBott}><Link href="/products/insumosMedicos"><a>Equipos</a></Link></li>
                                                <li className={classes.liBott}><Link href="/products/insumosDeportivos"><a>Alquileres</a></Link></li>
                                                <li className={classes.liBott}><Link href="/products/insumosMedicos"><a>Servicio Tecnico</a></Link></li>
                                            </Panel>
                                                <li className={classes.items2}><img src='/maskIcon.png' /><Link href="/products/insumosMedicos"><a>Insumos médicos</a></Link></li>
                                                <li className={classes.items2}><img src='/bandageIcon.png' /><Link href="/products/medicinaDeportiva"><a>Medicina Deportiva</a></Link></li>
                                                <Panel showArrow={false} key="4" header={<><img src='/labelIcon.png' /><Link href="/products/marcas"><a>Marcas</a></Link></>}className={classes.items}></Panel>
                                        </Collapse>
                                    
                                </Panel> 
                                    
                            </Collapse>
                            </div>
                        <li className={classes.liTop}><Link href="/"><a >Tienda Minorista</a></Link></li>
                        <li className={classes.liTop}><Link href="/about"><a >Quienes Somos</a></Link></li>
                        <li className={classes.liTop}><Link href="/contact"><a >Contacto</a></Link></li>
                  </ul>
                 

            </nav>
            :
            <nav className={classes.side_drawer} onClick={props.click}/>
        }
</>
    )

}

export default SideBar;

const closeIcon= 
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.600586" y="18.2778" width="25" height="3" transform="rotate(-45 0.600586 18.2778)" fill="#595858"/>
<rect x="2.98438" y="1.13428" width="25" height="3" transform="rotate(45 2.98438 1.13428)" fill="#595858"/>
</svg>