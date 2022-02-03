import React from "react";

// css
import './index.css';

function Header() {
  return (
    <header>
      <span>Discord</span>
      <div className="window-buttons">
        <button>−</button>
        <button>□</button>
        <button>✖</button>
      </div>
    </header>
  )
}

export default Header;