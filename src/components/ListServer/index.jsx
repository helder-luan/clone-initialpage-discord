import React from "react";

// icons
import { FaDiscord } from "react-icons/fa";
import { AiOutlinePlus, AiFillCompass } from "react-icons/ai";

// color generator
import { HCG } from "../../components/hexacolor_generator";

// css
import './style.css';

function ListServer() {
  const colors = HCG(8);
  return (
    <aside className="servers-bar">
      <button className="home"><FaDiscord/></button>
      <span></span> 
      {
        colors.map((color) => {
          return <button style={{backgroundColor: color}} className="server"></button>
        })
      }
      <button className="add-server"><AiOutlinePlus/></button>
      <button className="search-servers"><AiFillCompass/></button>
    </aside>
  );
}

export default ListServer;