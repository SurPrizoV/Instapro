import { useState } from "react";
import s from "./SignUp.module.css";

export const SignUp = ({registration, setRegistration, setModalActive}) => {
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSignUpChange = () => {
    signUp ? setSignUp(false) : setSignUp(true);
    setModalActive(false)
  };

  const onRegistrationChange = () => {
    registration ? setRegistration(false) : setRegistration(true)
  }
  return (
    <div className={s.sign_up}>
      <p className={s.logo}>Instapro</p>
      <div className={s.form}>
        <input className={s.input} type="text" placeholder="Логин" onChange={(e)=> setLogin(e.target.value)}/>
        <input className={s.input} type="password" placeholder="Пароль" onChange={(e)=> setPassword(e.target.value)}/>
        <button
          className={`${s.button_in} ${s.button}`}
          onClick={() => onSignUpChange()}>
          {signUp ? "Вошел" : "Войти"}
        </button>
      </div>
      <p className={s.none}>Нет аккаунта?</p>
      <button className={s.button} onClick={()=> onRegistrationChange()}>Зарегестрироваться</button>
    </div>
  );
};
