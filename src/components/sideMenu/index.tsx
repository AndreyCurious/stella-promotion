import React, { FC, memo } from 'react';
import './index.css';
import Closebtn from '../closebtn';

interface ISideMenu {
  isOpen: boolean;
  closeMenu: () => void;
  clickRef1: () => void;
  clickRef2: () => void;
  clickRef3: () => void;
}

const SideMenu: FC<ISideMenu> = (props) => {
  return (
    <div className={`Side-menu-container ${props.isOpen && 'active'}`}>
      <Closebtn closeMenu={props.closeMenu} />
      <div className="Side-menu-nav">
        <nav className="Side-menu-categories">
          <div className="Side-menu-category">
            <button
              onClick={() => {
                props.closeMenu();
                setTimeout(() => {
                  props.clickRef1();
                }, 100);
              }}
            >
              Панели МДФ / Classic
            </button>
          </div>
          <div className="Side-menu-category">
            <button
              onClick={() => {
                props.closeMenu();
                setTimeout(() => {
                  props.clickRef2();
                }, 100);
              }}
            >
              Панели МДФ / De Luxe / Dune
            </button>
          </div>
          <div className="Side-menu-category">
            <button
              onClick={() => {
                props.closeMenu();
                setTimeout(() => {
                  props.clickRef3();
                }, 100);
              }}
            >
              Рейки интерьерные МДФ
            </button>
          </div>
        </nav>
        <div className="Side-menu-contacts">
          <div className="Side-menu-email">
            <a href="mailto:sales@stella-pro.ru">sales@stella-pro.ru</a>
          </div>
          <div className="Side-menu-tel">
            <a href="tel:79221678296">+7 (922) 167-82-96</a>
          </div>
          <div className="Side-menu-wa_btn">
            <a href="https://wa.me/79221678296?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%A3%D1%87%D0%B0%D1%81%D1%82%D0%B2%D1%83%D1%8E%20%D0%B2%20%D0%B0%D0%BA%D1%86%D0%B8%D0%B8%20Stella!">
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SideMenu);
