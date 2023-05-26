import { useState } from "react";
import { Modal } from "../Modal/Modal";
import s from "./Header.module.css";
import { SignUp } from "../../pages/SignUp/SignUp";
import { Registration } from "../../pages/Registration/Registration";

export const Header = ({ setLogin, setPassword }) => {
  const [modalActive, setModalActive] = useState(false);
  const [registration, setRegistration] = useState(false);
  return (
    <div className={s.header}>
      <p className={s.logo}>Instapro</p>
      <button className={s.button} onClick={() => setModalActive(true)}>
        Войти
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        {registration ? (
          <Registration
            setLogin={setLogin}
            setPassword={setPassword}
            setModalActive={setModalActive}
          />
        ) : (
          <SignUp
            setLogin={setLogin}
            setPassword={setPassword}
            registration={registration}
            setRegistration={setRegistration}
            setModalActive={setModalActive}
          />
        )}
      </Modal>
    </div>
  );
};
