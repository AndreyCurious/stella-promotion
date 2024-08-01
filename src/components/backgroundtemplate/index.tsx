import './index.css';
import React, { FC, memo } from 'react';

interface BackgroundTemplate {
  closeMenu: () => void;
  isOpen: boolean;
}

const BackgroundTemplate: FC<BackgroundTemplate> = (props) => {
  return (
    <div
      onClick={props.closeMenu}
      className={`${props.isOpen && 'dark'}`}
    ></div>
  );
};

export default memo(BackgroundTemplate);
