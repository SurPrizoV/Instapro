import { useState } from "react";
import { Modal } from "../Modal/Modal";
import s from "./Header.module.css";
import { SignUp } from "../../pages/SignUp/SignUp";
import { Registration } from "../../pages/Registration/Registration";

export const Header = ({setUser}) => {
  const [modalActive, setModalActive] = useState(false);
  const [registration, setRegistration] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const onSignOutChange = () => {
    window.location.reload();
  }

  return (
    <div className={s.header}>
      <p className={s.logo}>Instapro</p>
      {signUp ? (
        <button className={s.button} onClick={() => onSignOutChange()}>
          Выйти
        </button>
      ) : (
        <button className={s.button} onClick={() => setModalActive(true)}>
          Войти
        </button>
      )}
      <Modal active={modalActive} setActive={setModalActive}>
        {registration ? (
          <Registration
            setModalActive={setModalActive}
            registration={registration}
            setRegistration={setRegistration}
            setUser={setUser}
            signUp={signUp}
            setSignUp={setSignUp}
          />
        ) : (
          <SignUp
            registration={registration}
            setRegistration={setRegistration}
            setModalActive={setModalActive}
            setUser={setUser}
            signUp={signUp}
            setSignUp={setSignUp}
          />
        )}
      </Modal>
    </div>
  );
};
