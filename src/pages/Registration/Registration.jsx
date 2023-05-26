import { useState } from "react";
import s from "./Registration.module.css";

export const Registration = ({ setLogin, setPassword, setModalActive }) => {
  const [signUp, setSignUp] = useState(false);

  const onSignUpChange = () => {
    signUp ? setSignUp(false) : setSignUp(true);
    setModalActive(false);
  };
  return (
    <div className={s.registration}>
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
          className={`${s.button_in} ${s.button}`}
          onClick={() => onSignUpChange()}>
          {signUp ? "Зарегистрировался" : "Зарегистрироваться"}
        </button>
      </div>
    </div>
  );
};
