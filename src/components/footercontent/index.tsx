import './index.css';
import React, { FC, memo } from 'react';

const FooterContent: FC = () => {
  return (
    <div className="Footer_container">
      <div className="Footer_container-content">
        <div className="Footer-first_section">
          <div className="Footer-first_section-logo_container">
            <img
              className="Footer-first_section-logo_container-logo"
              src="https://static.tildacdn.com/tild3832-3034-4533-b830-366433396433/__3_1_2.png"
              alt="logo"
            />
          </div>
          <div>
            <ul className="Footer-first_section-сontact_details">
              <li>
                <p>г.Екатеринбург, ул. Металлургов, 84, этаж 1</p>
              </li>
              <li>
                <a href="tel: + 79221678296">+7 (922)-167-82-96</a>
              </li>
              <li>
                <a href="mailto:sales@stella-pro.ru">sales@stella-pro.ru</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer-second_section">
          <ul className="Footer-second_section-social_media">
            <li>
              <a href="https://vk.com/stella_pro">
                <img
                  src="https://static.tildacdn.com/tild3732-3635-4862-b531-336538663335/vkontakte_1_.png"
                  alt="vk social"
                />
              </a>
            </li>
            <li>
              <a href="https://t.me/ru_stella">
                <img
                  src="https://static.tildacdn.com/tild6665-6132-4439-b437-396466626532/Group.png"
                  alt="telegram social"
                />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@stella-pro">
                <img
                  src="https://static.tildacdn.com/tild6264-3665-4662-b633-383836666565/Group_2.png"
                  alt="youtube social"
                />
              </a>
            </li>
            <li>
              <a href="https://ru.pinterest.com/stella_product/">
                <img
                  src="https://static.tildacdn.com/tild3661-6430-4239-a333-643431356135/Group_15.png"
                  alt="pinterest social"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(FooterContent);
