import React, { useState, useContext } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  
  // Use useContext to access the values from Context
  const { prevPrompts } = useContext(Context);

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>Nuevo chat</p> : null}
        </div>

        {extended ?  
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => (
              <div key={index} className="recent-entry">
                <img src={assets.message_icon} alt="Message Icon" />
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Ayuda</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Actividad</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Configuraciones</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
