import React from "react";

// css
import './style.css';

// icons
import { IoChatboxSharp } from 'react-icons/io5';
import { AiOutlineMore } from 'react-icons/ai';

function Card({photo, activity, status, nickname, hashtag}) {
  return (
    <div className="card">
      <div className="friend-card">
        <div className="friend-image">
          <div style={{background: photo}}></div>
          <span className="friend-activity">
            <span className={activity}></span>
          </span>
        </div>
        <div className="about-friend">
          <h3 className="nickname">{nickname}<span className="hashtag">#{hashtag}</span></h3>
          <p className="status">{status}</p>
        </div>
      </div>

      <div className="friend-options">
        <button className="message"><IoChatboxSharp/></button>
        <button className="option"><AiOutlineMore/></button>
      </div>
    </div>
  );
}

export default Card;