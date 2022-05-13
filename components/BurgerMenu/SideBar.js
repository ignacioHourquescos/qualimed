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

   const drawerToggleClickHandler = () =>{
    setSideDrawerOpen((prevState)=>{
        setSideDrawerOpen(!prevState.sideDrawerOpen); 
    })
}



   function callback(key) {
    console.log(key);
        
   }

    

    return(<>
        {
            props.show
            ?
            
            <nav className={classes.side_drawer_open}>
                <div>
                 <Header/>
                </div>
                <div className={classes.close} onClick={props.click}>{closeIcon}</div>
                    
                  <ul>
                        <li onClick={props.click}><Link href="/">Inicio</Link></li>
                        <div className={classes.collapse}>
                        <Collapse onChange={callback} className={classes.collapse} >
                           {
                                sideDrawerOpen ?
                                <Panel header={<a onClick={drawerToggleClickHandler} style={{ color: '#595858'}}>Productos</a>} showArrow={false} key="1" className={classes.panel}  >
                                    <input type='text'
                                            placeholder='    Buscar Producto'
                                    ></input>
                                    <hr/>
                                    <div className={classes.collapse2}>
                                        <Collapse className={classes.collapse2} accordion={true} >
                                        <Panel key="1" showArrow={false} className={classes.items} header={<><img src='/ventilatorIcon.png' /><a>Equipamientos</a></>}>
                                            <div><Link href="/products/insumosMedicos"><a>Equipos</a></Link></div>
                                            <div><Link href="/products/insumosDeportivos"><a>Alquileres</a></Link></div>
                                            <div><Link href="/products/insumosMedicos"><a>Servicio Tecnico</a></Link></div>
                                        </Panel>
                                            <Panel showArrow={false} key="2" header={<><img src='/maskIcon.png' /><a>Insumos médicos</a></>} className={classes.items}></Panel>
                                            <Panel showArrow={false} key="3" header={<><img src='/bandageIcon.png' /><a>Medicina Deportiva</a></>} className={classes.items}></Panel>
                                            <Panel showArrow={false} key="4" header={<><img src='/labelIcon.png' /><a>Marcas</a></>}className={classes.items}></Panel>
                                        </Collapse>
                                    </div>
                                    
                                </Panel> :
                                <Panel header={<a onClick={drawerToggleClickHandler} style={{ color: '#3E4095'}}>Productos</a>} showArrow={false} key="1" className={classes.panel}  >
                                    <input type='text'
                                            placeholder='    Buscar Producto'
                                    ></input>
                                    <hr/>
                                    <div className={classes.collapse2}>
                                        <Collapse className={classes.collapse2} accordion={true} >
                                        <Panel key="2" showArrow={false} className={classes.items} header={<><img src='/ventilatorIcon.png' /><a>Equipamientos</a></>}>
                                            <div><Link href="/products/insumosMedicos"><a>Equipos</a></Link></div>
                                            <div><Link href="/products/insumosDeportivos"><a>Alquileres</a></Link></div>
                                            <div><Link href="/products/insumosMedicos"><a>Servicio Tecnico</a></Link></div>
                                        </Panel>
                                            <Panel showArrow={false} key="3" header={<><img src='/maskIcon.png' /><a>Insumos médicos</a></>} className={classes.items}></Panel>
                                            <Panel showArrow={false} key="4" header={<><img src='/bandageIcon.png' /><a>Medicina Deportiva</a></>} className={classes.items}></Panel>
                                            <Panel showArrow={false} key="5" header={<><img src='/labelIcon.png' /><a>Marcas</a></>}className={classes.items}></Panel>
                                        </Collapse>
                                    </div>
                                </Panel>
                                    } 
                                    
                                
                                
                            </Collapse>
                            </div>
                        <li><Link href="/"><a>Tienda Minorista</a></Link></li>
                        <li><Link href="/about"><a>Quienes Somos</a></Link></li>
                        <li><Link href="/contact"><a>Contacto</a></Link></li>
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