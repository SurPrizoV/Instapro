import { useEffect, useState } from "react";
import s from "./SignUp.module.css";
import { imageLoader, onSignUpChange } from "../../components/ApiServes/ApiServes";

export const SignUp = ({
  signUp,
  setSignUp,
  setModalActive,
  setUser,
}) => {
  const [file, setFile] = useState("");
  const [login, setLogin] = useState("");
  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  const handleSignUp = () => {
    onSignUpChange(url, login, name, password, setUser, setModalActive)
  }

  useEffect(() => {
    imageLoader(file, setUrl)
  }, [file]);

  const onRegistrationChange = () => {
    setSignUp(false)
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
        className={s.input_img}
        type="file"
        accept="image/*"
        title=" "
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      {url && <img className={s.photo} src={url} alt="user_photo" />}
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
          onClick={() => handleSignUp()}
          disabled={disableButton}
        >
          Зарегистрироваться
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
