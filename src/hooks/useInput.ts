import { ChangeEvent, useState } from "react";
import useValidation from "./useValidation";

interface Validations {
  isEmpty: boolean;
  isEmail?: false;
  isNumber?: false;
  isName?: false;
}

const useInput = (inititialValue: string, validations: Validations) => {
  const [value, setValue] = useState(inititialValue);
  const [isDirty, setDirty] = useState(false);
  let re = '';
  const valid = useValidation(value, validations);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (validations.hasOwnProperty('isNumber')) {
      re = e.target.value.replace(/[^\+\d]/g, '');
      setValue(re);
    } else {
      setValue(e.target.value);
    }
  };

  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

export default useInput;