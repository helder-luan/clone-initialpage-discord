import React from "react";

// css
import './style.css';

// icons
import { FaUser } from "react-icons/fa";
import { SiSpeedtest } from "react-icons/si";
import { AiOutlinePlus } from "react-icons/ai";
import { MdMic, MdHeadset } from 'react-icons/md';
import { RiSettings5Fill } from 'react-icons/ri';

// color generator
import { HCG } from "../../components/hexacolor_generator";

// friends
import { friends } from "../../data/friends";

function ListFriend() {
  const colors = HCG(friends.length);
  return (
    <aside className="friends-bar">
      <nav>
        <input type="text" placeholder="Encontre ou comece uma conversa" name="" id="" />
      </nav>
      <section className="friends-area">
        <button className="button active"><span><FaUser/></span> Amigos</button>
        <button className="button"><span><SiSpeedtest/></span> Nitro</button>
        <div className="direct-message">
          <p>Mensagens diretas <span><AiOutlinePlus/></span></p>
        </div>

        <div className="friend-list">
          {
            friends.map((friend, index) => {
              return (
                <div className="friend-card">
                  <div className="friend-image">
                    <div style={{backgroundColor: colors[index]}}></div>
                    <span className="friend-activity">
                      <span className={friend.activity}></span>
                    </span>
                  </div>
                  <h3>{friend.nickname}</h3>
                </div>
              );
            })
          }
        </div>

      </section>
      <div className="container-user">
        <div className="user">
          <div className="user-image">
            <div style={{backgroundColor: "#321654"}}></div>
            <span className="user-activity">
              <span className="online"></span>
            </span>
          </div>
        </div>
        <div className="about-user">
          <span className="user-nickname">|_ |_| /\ |\|</span>
          <span className="user-status">128√e980</span>
        </div>
        <div className="user-buttons">
          <button className="controls"><MdMic/></button>
          <button className="controls"><MdHeadset/></button>
          <button className="controls"><RiSettings5Fill/></button>
        </div>
      </div>
    </aside>
  )
}

export default ListFriend;