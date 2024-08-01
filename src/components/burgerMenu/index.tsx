import './index.css';
import React, { FC, memo } from 'react';

interface MenuBurger {
  openMenu: () => void;
  isOpen: boolean;
}

const MenuBurger: FC<MenuBurger> = (props) => {
  return (
    <button
      onClick={props.openMenu}
      className={`Menu-button ${props.isOpen && 'active'}`}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
};

export default memo(MenuBurger);
