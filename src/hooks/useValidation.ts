import { useEffect, useState } from "react";

interface Validations {
  isEmpty: boolean;
  isEmail?: false;
  isNumber?: false;
  isName?: false;
}

const useValidation = (value: string, validations: Validations) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isNumber, setIsNumber] = useState<boolean>(false);
  const [isName, setIsName] = useState<boolean>(false);

  const [emptyError, setEmptyError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [numberError, setNumberError] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          if (value) {
            setIsEmpty(false);
            setEmptyError('');
          } else {
            setIsEmpty(true);
            setEmptyError('Необходимо заполнить поле');
          }
          break;
        case 'isEmail':
          if (
            String(value)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )
          ) {
            setIsEmail(false);
            setEmailError('');
          } else {
            setIsEmail(true);
            setEmailError('Недопустимый формат почты');
          }

          break;
        case 'isNumber':
          const isRegValid = String(value).match(
            /((8|\+7)-?)?\(?\d{3}\)?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}/
          ) 
          const re = value[0] === '+' ? value.slice(1).replace(/[^\d]/g, '') : value.replace(/[^\d]/g, '')
          const startPluse = re[0] === '+';

          if (
            isRegValid && ((startPluse && re.length === 12) || (!startPluse && re.length === 11))
          ) {
            setIsNumber(false);
            setNumberError('');
          } else {
            setIsNumber(true);
            setNumberError('Недопустимый формат номера телефона');
          }

          break;
        case 'isName':
          if (String(value).match(/^[А-Я a-z ,.'-]+$/i)) {
            setIsName(false);
            setNameError('');
          } else {
            setIsName(true);
            setNameError('Введите корректное имя');
          }
          break;
      }
    }
  }, [value]);

  return {
    isEmpty,
    isEmail,
    isNumber,
    isName,
    emptyError,
    nameError,
    numberError,
    emailError,
  };
};

export default useValidation;