import React from "react";

// components
import Card from "../../components/CardFriend";

// friends
import { friends } from "../../data/friends";
// css
import './style.css';

// icons
import { FaUser, FaQuestionCircle } from 'react-icons/fa';
import { CgInbox } from 'react-icons/cg';
import { RiChatNewLine } from 'react-icons/ri';

// color generator
import { HCG } from "../../components/hexacolor_generator";

function Friends () {
  const online = friends.filter((friend) => friend.activity !== "invisible" & friend.activity !== "offline");
  const colors = HCG(online.length);

  return (
    <section className="main-container">
      <nav className="nav-friends">
        <h2><span><FaUser/></span> Amigos</h2>
        <ul>
          <li className="active">Disponível</li>
          <li>Todos</li>
          <li>Pendente</li>
          <li>Bloqueado</li>
        </ul>
        <button className="add-friend">Adicionar amigo</button>
        <div className="interation-buttons">
          <button><RiChatNewLine/></button>
          <button><CgInbox/></button>
          <button><FaQuestionCircle/></button>
        </div>
      </nav>
      <section>
        <input type="search" placeholder="Buscar" id="search" />

        <p className="friends-status">online - <span>{online.length}</span></p>
        {
          online.map((friend, index) => {
            return <Card 
              key={index}
              photo={colors[index]}
              activity={friend.activity}
              hashtag={friend.hashtag}
              nickname={friend.nickname} 
              status={friend.status}  
            />
          })
        }
      </section>
    </section>
  );
}

export default Friends;
