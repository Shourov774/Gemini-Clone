import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import "./sidebar.css";
import { Context } from "../context/context";

const Sidebar = ({ questions }) => {
  const [extend, setExtend] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { onSent} = useContext(Context);
  let timer;
  const handleClick =() => {
    setExtend(!extend);
    setIsMenuOpen(!isMenuOpen);    
  }
  const handleHover = () => {
    if (!isMenuOpen) {
      timer = setTimeout(() => {
        setIsMenuOpen(true);
        }, 500);
    }
  }
  const handleLeave = () => {
    clearTimeout(timer);
    setIsMenuOpen(false);
  }
  const recentQues = async (ques) => {
    console.log(ques);    
    await onSent(ques);
  }
    return<div className={extend ? "sidebar" : isMenuOpen ? "sidebar" : "sidebar sidebar-extend"} onMouseEnter={!isMenuOpen? handleHover : null} onMouseLeave={isMenuOpen? handleLeave : null} onClick={handleClick}>
            <img src={assets.menu_icon} alt="menu" onClick={handleClick} />
            <div className="new-chat" title="New Chat">
              <img src={assets.plus_icon} alt="plus-icon" />
              {(extend || isMenuOpen) && <p>New Chat</p>}
            </div>
            {
              (extend || isMenuOpen) && <div className="recent">
                <p className="recent-para">Recent</p>
                <>{ questions.map((question, index) => (
                  <div className="recent-message" key={index} onClick={() => recentQues(question)}>
                    <img src={assets.message_icon} alt="message" />
                    <p>{question.slice(0,22)+ " ..."}</p>
                  </div>
                )) }</>
              </div>
            }
            
            <div className="help-activity-settings">
              <div className="foot">
                <img src={assets.question_icon} alt="help-icon" />
                {(extend || isMenuOpen) && <p>Help</p>}
              </div>
              <div className="foot">
                <img src={assets.history_icon} alt="activity-icon" />
                {(extend || isMenuOpen) && <p>Activity</p>}
              </div>
              <div className="foot">
                <img src={assets.setting_icon} alt="settings-icon" />
                {(extend || isMenuOpen) && <p>Settings</p>}
              </div>
            </div>
          </div>
}

export default Sidebar;