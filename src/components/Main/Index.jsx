import React from "react";

// css
import './style.css';

// components
import Friends from "../../pages/Friends";
import ListFriend from "../ListFriend";
import ListServer from "../ListServer";

function Main() {
  return (
    <main>
      <ListServer/>
      <ListFriend/>
      <Friends />
    </main>
  )
}

export default Main;