import './index.css';
import React, { FC, memo } from 'react';

interface Closebtn {
  closeMenu: () => void;
}

const Closebtn: FC<Closebtn> = (props) => {
  return (
    <button
      className="Close-btn"
      onClick={props.closeMenu}
    >
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
};

export default memo(Closebtn);
