import React from 'react'
import useForm from '../../hooks/useForm';
import styles from './Hero.module.scss'
const Hero = () => {

    // const dispatch = useDispatch();

    const [ formValues, handleInputChange] = useForm({
        buscar: '',
        
    })

    const {buscar} = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(login())
    }
    
  return (
    <div className={styles.hero}>

      <div className={styles.seccion1}>
        <img src='./logoHero.png'></img>
        <p>30 años dedicados a la venta de insumos y equipamiento médico</p>
        <input 
            type='text'
            placeholder="Buscar producto"
            name="buscar"
            autoComplete="off"
            value={buscar}
            onChange={handleInputChange}
        ></input>
      </div>
      <div className={styles.seccion2} >
        <div>
          <img src='./medicoHero.png'></img>
        </div>
      </div>
      
    
    </div>
  )
}

export default Hero
