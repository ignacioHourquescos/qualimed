import { Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { openNotificationWithIcon, TYPE } from "../utils/notificationToast";
import styles from "./Cotizacion.module.scss";
import emailjs from "@emailjs/browser";

const Cotizacion = ({ title, subtitle, code, merlibre }) => {
  const [displayUserForm, setDisplayUserForm] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();

  const displayUserFormHandler = () => {
    setDisplayUserForm(!displayUserForm);
  };

  const sendEmail = (e, captchaValue) => {
    e.preventDefault();
    setSending(true);
    console.log("mensaje enviado");
    emailjs
      .sendForm(
        "service_2qdstih",
        "template_fldorhe",
        form.current,
        "user_GqWB6DWgQTHICnHQEnvCU"
      )

      .then(
        (result) => {
          console.log("SUCCESS", result.text);
          setSending(false);
          setDisplayUserForm(false);
          openNotificationWithIcon(TYPE.SUCCESS, ("SUCCESS", result.text));
        },
        (error) => {
          setSending(false);
          console.log("ERROR", error.text);
          setDisplayUserForm(false);
          openNotificationWithIcon(TYPE.ERROR, ("ERROR", error.text));
        }
      );
  };

  const URL = "https://wa.me";
  let number = "+549 11 25379689";
  number = number.replace(/[^\w\s]/gi, "").replace(/ /g, "");
  let url = `${URL}/${number}`;

  const enviarMsj = () => {
    event.preventDefault();
    url += `?text=${encodeURI(
      "Hola, me interesaría tener mas información acerca de: " +
        title +
        " " +
        " ( codigo de producto:  " +
        code +
        ")"
    )}`;

    window.open(url);
  };
  return (
    <div className={styles.cotizacion}>
      <h5>{title}</h5>
      <p>{subtitle}</p>
      <br />
      <button onClick={enviarMsj}>Cotización via whatsapp</button>

      <button
        className={styles.btnMail}
        style={{ background: "#8183CA" }}
        onClick={displayUserFormHandler}
      >
        Cotización via mail
      </button>

      {displayUserForm ? (
        <div className={styles.userForm}>
          <div className={styles.close} onClick={displayUserFormHandler}>
            {closeIcon}
          </div>
          <form
            className={styles.form}
            ref={form}
            onSubmit={sendEmail}
            method="POST"
          >
            <input
              className={styles.input}
              type="text"
              placeholder=" &nbsp; Nombre / Empresa"
              name="user_name"
              autoComplete="on"
              required
            ></input>
            <input
              className={styles.input}
              type="text"
              placeholder=" &nbsp;Correo"
              name="user_email"
              autoComplete="on"
              // onChange={handleInputChange}
              required
            ></input>
            <TextArea
              style={{ display: "none" }}
              type="text"
              placeholder=" &nbsp;Consulta"
              name="message"
              value={`Me gustaria tener mas informaciona cerca de  ${title} codigo de producto: ${code}`}
              required
            />
            <div className={styles.captcha_container}>
              <ReCAPTCHA sitekey="6LcswQQhAAAAAAKJ6eLBf5qhExGmYKgsKnOXC3v6" />
            </div>
            <button type="submit" value="Send">
              {!sending ? "Enviar" : "Enviando..."}
            </button>
          </form>
        </div>
      ) : (
        ""
      )}

      <a
        className={styles.shopMobile}
        href={merlibre ? merlibre : "https://qualimed2021.mercadoshops.com.ar/"}
        target={"_blank"}
        rel={"noreferrer"}
      >
        Ver producto en tienda minorista
      </a>
    </div>
  );
};

export default Cotizacion;

const closeIcon = (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.600586"
      y="18.2778"
      width="25"
      height="3"
      transform="rotate(-45 0.600586 18.2778)"
      fill="#595858"
    />
    <rect
      x="2.98438"
      y="1.13428"
      width="25"
      height="3"
      transform="rotate(45 2.98438 1.13428)"
      fill="#595858"
    />
  </svg>
);
