import './index.css';
import React, { FC, ReactNode, memo, useEffect } from 'react';
import Closebtn from '../closebtn';

interface IModalBasket {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
  isOpen: boolean;
  closeBasket: () => void;
  scrollY: string;
}

const ModalBasket: FC<IModalBasket> = (props) => {
  // закрываем окно по нажатию на esc
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        props.closeBasket();
      }
    }
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  });
  return (
    <>
      <div
        style={{
          top: props.scrollY.slice(1),
        }}
        className={
          props.isOpen
            ? `Modal_basket-container active`
            : 'Modal_basket-container'
        }
        onClick={(e) => e.currentTarget === e.target && props.closeBasket()} // закрываем окно по клику вне модального окна
      >
        <div className="Modal_basket-layout">
          <Closebtn closeMenu={props.closeBasket} />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default memo(ModalBasket);
