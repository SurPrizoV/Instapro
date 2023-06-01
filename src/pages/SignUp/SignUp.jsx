import { useEffect, useState } from "react";
import s from "./SignUp.module.css";

export const SignUp = ({ signUp, setSignUp, registration, setRegistration, setModalActive, setUser }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  const onSignUpChange = async () => {
    const data = {
      login: login,
      password: password,
    };
    try {
      const response = await fetch(`https://wedev-api.sky.pro/api/user/login`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setUser(result.user.token);
      signUp ? setSignUp(false) : setSignUp(true);
      setModalActive(false);
    } catch (error) {
      console.log("Ошибка:", error);
    }
  };

  useEffect(() => {
    if (login !== "" && password !== "") {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [login, password]);

  const onRegistrationChange = () => {
    registration ? setRegistration(false) : setRegistration(true);
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
          onClick={() => onSignUpChange()}
          disabled={disableButton}>
          {signUp ? "Вошел" : "Войти"}
        </button>
      </div>
      <p className={s.none}>Нет аккаунта? </p>
      <p className={`${s.registration} ${s.none}`} onClick={() => onRegistrationChange()}>Зарегестрироваться</p>
    </div>
  );
};
