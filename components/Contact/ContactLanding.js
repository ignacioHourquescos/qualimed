import React from 'react'
import  styles  from "./ContactLanding.module.scss";
const ContactLanding = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.circle}>
          <div className={styles.content}>
            <h5>Contacto</h5>
            <p>Contáctenos y responderemos su consulta en la brevedad.</p>
            <input type='text'
            placeholder=" Nombre / Empresa"
            name="name"
            autoComplete="on"></input>
            <div style={{width: '100%'}}>
                <input type='number'
                placeholder=" Teléfono"
                name="celphone"
                autoComplete="on"></input>
                <input type='text'
                placeholder=" Correo"
                name="email"
                autoComplete="on"></input>
            </div>
            <textarea type='text'
            placeholder=" Consulta"
            name="message"></textarea>
            <button>Enviar</button>
          </div>
          
            {/* <div style={{width: '100%'}}>
                <input type='number'
                placeholder=" Teléfono"
                name="celphone"
                autoComplete="on" style={{width: '45%', margin: '0 10% 0 0'}}></input>
                <input type='text'
                placeholder=" Correo"
                name="email"
                autoComplete="on" style={{width: '45%'}}></input>
            </div> */}
            {/* <textarea type='text'
            placeholder=" Consulta"
            name="message"></textarea> */}
            
      </div>
    </div>
  )
}

export default ContactLanding
