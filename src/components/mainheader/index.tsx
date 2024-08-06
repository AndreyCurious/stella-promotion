import './index.css';
import React, { FC, memo } from 'react';
import MenuBurger from '../burgerMenu/index';

interface IMainHeader {
  isOpen: boolean;
  openMenu: () => void;
  clickRef1: () => void;
  clickRef2: () => void;
  clickRef3: () => void;
}

const Mainheader: FC<IMainHeader> = (props) => {
  return (
    <header className="Header-container">
      <div className="Header-container-first_floor">
        <a
          className="first-floor-logo"
          href="/"
        >
          <img
            src="https://static.tildacdn.info/tild3133-3462-4837-b563-626536326364/__3_1_2.svg"
            alt="logo"
          />
        </a>
        <div className="first-floor-container_mail_tel_btn">
          <a
            className="first-floor-email"
            href="mailto:sales@stella-pro.ru"
          >
            sales@stella-pro.ru
          </a>
          <div className="first-floor-container_btn_tel">
            <a
              className="first-floor-wa_btn"
              href="https://wa.me/79221678296?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%A3%D1%87%D0%B0%D1%81%D1%82%D0%B2%D1%83%D1%8E%20%D0%B2%20%D0%B0%D0%BA%D1%86%D0%B8%D0%B8%20Stella!"
            >
              <img
                className="wa_icon"
                src="https://static.tildacdn.info/tild6362-6132-4362-b864-363936366239/whatsapp-whats-app-s.svg"
                alt="wa_icon"
              />
              Написать в WhatsApp
            </a>
            <a
              className="first-floor-tel"
              href="tel:79221678296"
            >
              +7(922)167-82-96
            </a>
          </div>
        </div>
        <MenuBurger
          openMenu={props.openMenu}
          isOpen={props.isOpen}
        />
      </div>
      <hr></hr>
      <nav className="Header-container-second_floor">
        <button
          onClick={props.clickRef1}
          className="second-floor-category"
        >
          Панели МДФ / Classic
        </button>
        <button
          onClick={props.clickRef2}
          className="second-floor-category"
        >
          Панели МДФ / De Luxe / Dune
        </button>
        <button
          onClick={props.clickRef3}
          className="second-floor-category"
        >
          Рейки интерьерные МДФ
        </button>
      </nav>
    </header>
  );
};

export default memo(Mainheader);
