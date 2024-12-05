import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Chatbot Amguaña</p>
            <img src={assets.icon_user} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hola, Kari</span></p>
                <p>¿Cómo puedo ayudarte hoy?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Sugiera lugares hermosos para ver en un próximo viaje por carretera</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Resuma brevemente este concepto: planificación urbana</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lluvia de ideas sobre actividades para fortalecer el trabajo en equipo durante nuestro retiro de trabajo</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Mejorar la legibilidad del siguiente código</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Introduzca un mensaje aquí' />
                    <div>
                        <img src={assets.gallery_icon} alt=""></img>
                        <img src={assets.mic_icon} alt=""></img>
                        <img src={assets.send_icon} alt=""></img>
                    </div>
                </div>
                <p className='bottom-info'>
                Gémini puede mostrar información inexacta, incluso sobre personas, por lo que conviene comprobar sus respuestas.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main