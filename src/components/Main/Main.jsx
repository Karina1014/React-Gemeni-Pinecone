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
    <center><p>Chat-GAD Amaguaña</p></center>
        
    </div>
    <div className="main-border-container"> {/* Aquí va el contenedor del borde gradiente */}
        <div className="main-container">
            {!showResult ? (
                <>
                    <div className="greet">
                        <p><span>¡Hola, Kari!</span></p>
                        <p>¿Cómo puedo ayudarte hoy?</p>
                    </div>
                    <div className="cards"></div>
                </>
            ) : (
                <div className="result">
                    <div className="result-title">
                        <img src={assets.icon_user} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="resul-data">
                        <img src={assets.gemini_icon} alt="Gemini Icon" />
                        {loading ? (
                            <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                        ) : (
                            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        )}
                    </div>
                </div>
            )}
            <div className="main-bottom">
                <div className="search-box">
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type="text"
                        placeholder="Introduzca un mensaje aquí"
                    />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={handleSend} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Chatbot Amaguña 2024
                </p>
            </div>
        </div>
    </div>
</div>

  )
}

export default Main
