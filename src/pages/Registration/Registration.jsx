import { useEffect, useState } from "react";
import s from "./Registration.module.css";

export const Registration = ({
  signUp,
  setSignUp,
  setRegistration,
  setModalActive,
  setUser,
}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  const onSignUpChange = async () => {
    const data = {
      login: login,
      name: name,
      password: password,
    };
    try {
      const response = await fetch(`https://wedev-api.sky.pro/api/user`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setUser(result.user.token);
      localStorage.setItem('userToken', result.user.token);
      signUp ? setSignUp(false) : setSignUp(true);
      setModalActive(false);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const onRegistrationChange = () => {
    setRegistration(false);
  };

  useEffect(() => {
    if (login !== "" && name !== "" && password !== "") {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [login, name, password]);

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
          type="text"
          placeholder="Имя"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={s.input}
          type="password"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={
            disableButton ? `${s.hidden}` : `${s.button_in} ${s.button}`
          }
          onClick={() => onSignUpChange()}
          disabled={disableButton}
        >
          {signUp ? "Зарегистрировался" : "Зарегистрироваться"}
        </button>
      </div>
      <p className={s.acc}>Есть аккаунт?</p>
      <p
        className={`${s.acc} ${s.signin}`}
        onClick={() => onRegistrationChange()}
      >
        Войти
      </p>
    </div>
  );
};
