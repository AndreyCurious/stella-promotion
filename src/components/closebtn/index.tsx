import './index.css';
import React, { FC, memo } from 'react';

interface IClosebtn {
  closeMenu: () => void;
}

const Closebtn: FC<IClosebtn> = (props) => {
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
