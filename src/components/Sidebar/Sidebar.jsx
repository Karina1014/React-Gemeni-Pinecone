import React, { useState, useContext } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  
  // Use useContext to access the values from Context
  const { onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context);
  const loadPrompt = async (prompt) =>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon_v2} alt="" />
      {extended && (
        <img src={assets.logo} alt="Chatbot" className="chat-icon" />
      )}
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_v2} alt="" />
          {extended ? <p>Nuevo chat</p> : null}
        </div>

        {extended ?  
        
          <div className="recent">
            <p className="recent-title">Recientes</p>
            {prevPrompts.map((item, index) => (
              <div key={index} onClick={()=>loadPrompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt="Message Icon" />
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        : null}
      </div>
        <div className="bottom">
        <div className="bottom-item recent-entry">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={assets.facebook_icon} alt="Facebook" />
      </a>
      {extended ? <p>Facebook</p> : null}
    </div>
    <div className="bottom-item recent-entry">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={assets.instagram_icon} alt="Instagram" />
      </a>
      {extended ? <p>Instagram</p> : null}
    </div>
    <div className="bottom-item recent-entry">
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <img src={assets.tiktok_icon} alt="TikTok" />
      </a>
      {extended ? <p>Tik tok</p> : null}
    </div>
  </div>
  </div>

     
  );
}

export default Sidebar;
