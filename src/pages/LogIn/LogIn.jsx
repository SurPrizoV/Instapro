import { useEffect, useState } from "react";
import s from "./LogIn.module.css";
import { onLogInChange } from "../../components/ApiServes/ApiServes";

export const LogIn = ({ setSignUp, setModalActive }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (login !== "" && password !== "") {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [login, password]);

  const onRegistrationChange = () => {
     setSignUp(true);
  };
  
  return (
    <div className={s.sign_up}>
      <p className={s.logo}>Instapro</p>
      <div className={s.form}>
        <input
          className={s.input}
          type="text"
          placeholder="Логин"
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          className={s.input}
          type="password"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={disableButton ? `${s.hidden}` : `${s.button_in} ${s.button}`}
          onClick={() => onLogInChange(login, password, setModalActive)}
          disabled={disableButton}>
            Войти
        </button>
      </div>
      <p className={s.none}>Нет аккаунта? </p>
      <p className={`${s.registration} ${s.none}`} onClick={() => onRegistrationChange()}>Зарегестрироваться</p>
    </div>
  );
};
