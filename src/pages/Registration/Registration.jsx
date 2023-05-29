import { useState } from "react";
import s from "./Registration.module.css";

export const Registration = ({ setModalActive }) => {
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSignUpChange = async () => {
    const data = {
      login: login,
      name: name,
      password: password,
    };
    try {
      const response = await fetch(`https://wedev-api.sky.pro/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      signUp ? setSignUp(false) : setSignUp(true);
      setModalActive(false);
    } catch (error) {
      console.error("Ошибка:", error);
    }
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
          className={`${s.button_in} ${s.button}`}
          onClick={() => onSignUpChange()}>
          {signUp ? "Зарегистрировался" : "Зарегистрироваться"}
        </button>
      </div>
    </div>
  );
};
