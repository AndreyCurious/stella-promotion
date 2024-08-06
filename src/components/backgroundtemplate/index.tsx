import './index.css';
import React, { FC, memo } from 'react';

interface IBackgroundTemplate {
  closeMenu: () => void;
  isOpen: boolean;
}

const BackgroundTemplate: FC<IBackgroundTemplate> = (props) => {
  return (
    <div
      onClick={props.closeMenu}
      className={`${props.isOpen && 'dark'}`}
    ></div>
  );
};

export default memo(BackgroundTemplate);
