import './index.css';
import React, { FC, memo, useState } from 'react';
import useInput from '../../hooks/useInput';
import Totalprice from '../totalprice';
import { IProduct } from '../../models/IProduct';
import { URL_API, CHAT_ID } from '../../api';
import axios from 'axios';

interface IDataClientForm {
  totalPrice: number;
  productsInBasket: IProduct[];
}

const DataClientForm: FC<IDataClientForm> = (props) => {
  const name = useInput('', { isEmpty: true, isName: false });
  const number = useInput('', { isEmpty: true, isNumber: false });
  const email = useInput('', { isEmpty: true, isEmail: false });
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const { productsInBasket, totalPrice } = props;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let products = '';
    productsInBasket.forEach((product) => {
      products += `- ${product.title} ${product.countbasket} уп. Всего: ${
        product.countbasket * product.new_price
      } руб.\n`;
    });
    let message = `<b>Заявка с сайта.</b>\n`;
    message += `<b>Имя отправителя: ${name.value}</b>\n`;
    message += `<b>Номер телефона: ${number.value}</b>\n`;
    message += `<b>Почта: ${email.value}</b>\n`;
    message += `<b>Список товаров:\n${products}</b>\n`;
    message += `<b>Итоговая стоимость: ${totalPrice} руб.</b>`;
    try {
      setIsDisable(true);
      await axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
      });
      window.location.reload();
      alert('Заявка успешно создана! Ожидайте, с вами свяжется менеджер.');
      setIsDisable(false);
    } catch (e) {
      setIsDisable(false);
      alert('Произошла ошибка, повторите отправку формы снова!');
    }
  };

  return (
    <form
      className="Client_form"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
    >
      <label>
        <span className="Client_form-title_input">Ваше имя</span>
        <input
          className="Client_form-input"
          onChange={(e) => name.onChange(e)}
          onBlur={(e) => name.onBlur(e)}
          value={name.value}
          type="text"
          name="name"
        />
        <span className="Client_form-error_input">
          {name.isDirty && name.isName && (name.emptyError || name.nameError)}
        </span>
      </label>
      <label>
        <span className="Client_form-title_input"> Ваш телефон</span>
        <input
          className="Client_form-input"
          onChange={(e) => number.onChange(e)}
          onBlur={(e) => number.onBlur(e)}
          value={number.value}
          type="tel"
          name="phone"
        />
        <span className="Client_form-error_input">
          {number.isDirty &&
            number.isNumber &&
            (number.emptyError || number.numberError)}
        </span>
      </label>
      <label>
        <span className="Client_form-title_input">Ваш Email</span>
        <input
          className="Client_form-input"
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          value={email.value}
          type="email"
          name="email"
        />
        <span className="Client_form-error_input">
          {email.isDirty &&
            email.isEmail &&
            (email.emptyError || email.emailError)}
        </span>
      </label>
      <Totalprice totalPrice={props.totalPrice} />
      <input
        className="Client_form-input_submitbtn"
        disabled={
          email.emailError || number.numberError || name.nameError || isDisable
            ? true
            : false
        }
        type="submit"
        value="Оформить заказ"
      />
    </form>
  );
};

export default memo(DataClientForm);
