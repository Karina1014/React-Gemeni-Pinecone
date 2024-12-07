import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, resultData, setInput, input,loading} = useContext(Context)

    const handleSend = () => {
        onSent();  // Llamamos a 'onSent' para que envíe el mensaje.
    };

  return (
    <div className="main">
        <div className="nav">
            <p>Chatbot Amguaña</p>
            <img src={assets.icon_user} alt="" />
        </div>
        <div className="main-container">

            {!showResult
            ?<>
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
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.icon_user} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="resul-data">
                    <img src={assets.gemini_icon} alt="Gemini Icon" />
                    {loading
                    ?<div className="loader">
                            <hr/>
                            <hr/>
                            <hr/>
                    </div>
                    : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                    }
                   
                </div>
            </div>
            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input 
                        onChange={(e) => setInput(e.target.value)} 
                        value={input} 
                        type="text" 
                        placeholder='Introduzca un mensaje aquí' 
                    />
                    <div>
                        <img src={assets.gallery_icon} alt=""></img>
                        <img src={assets.mic_icon} alt=""></img>
                        <img onClick={handleSend} src={assets.send_icon} alt=""></img>
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
