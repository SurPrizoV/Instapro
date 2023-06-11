import { useState } from "react";
import { Modal } from "../Modal/Modal";
import s from "./Header.module.css";
import { LogIn } from "../../pages/LogIn/LogIn";
import { SignUp } from "../../pages/SignUp/SignUp";
import { AddPhoto } from "../AddPhoto/AddPhoto";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Header = ({ user, setUser }) => {
  const [modalActive, setModalActive] = useState(false);
  const [signUp, setSignUp] = useState(
    localStorage.getItem("userToken") ? true : false
  );
  const [addPhoto, setAddPhoto] = useState(false);

  const onAddPhotoChange = () => {
    setAddPhoto(true);
    setModalActive(true);
  };

  const onSignOutChange = () => {
    localStorage.removeItem("userToken");
    window.location.reload();
    setSignUp(false);
  };

  return (
    <div className={s.header}>
      <Link className={s.logo} to="/">
        Instapro
      </Link>
      {localStorage.getItem("userToken") && <IoAddCircleOutline onClick={() => onAddPhotoChange()} />}
      {localStorage.getItem("userToken") ? (
        <button className={s.button} onClick={() => onSignOutChange()}>
          Выйти
        </button>
      ) : (
        <button className={s.button} onClick={() => setModalActive(true)}>
          Войти
        </button>
      )}
      <Modal active={modalActive} setActive={setModalActive}>
        {signUp ? (
          <SignUp
            setModalActive={setModalActive}
            setUser={setUser}
            signUp={signUp}
            setSignUp={setSignUp}
          />
        ) : localStorage.getItem("userToken") ? (
          <AddPhoto addPhoto={addPhoto} user={user} />
        ) : (
          <LogIn
            setModalActive={setModalActive}
            setUser={setUser}
            setSignUp={setSignUp}
          />
        )}
      </Modal>
    </div>
  );
};
