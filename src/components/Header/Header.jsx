import { useState } from "react";
import { Modal } from "../Modal/Modal";
import s from "./Header.module.css";
import { SignUp } from "../../pages/SignUp/SignUp";
import { Registration } from "../../pages/Registration/Registration";
import { AddPhoto } from "../AddPhoto/AddPhoto";
import { IoAddCircleOutline } from "react-icons/io5";

export const Header = ({ user, setUser }) => {
  const [modalActive, setModalActive] = useState(false);
  const [registration, setRegistration] = useState(false);
  const [signUp, setSignUp] = useState(
    localStorage.getItem("userToken") ? true : false
  );
  const [addPhoto, setAddPhoto] = useState(false);

  const onAddPhotoChange = () => {
    setAddPhoto(true);
    setModalActive(true);
  }

  const onSignOutChange = () => {
    localStorage.removeItem("userToken");
    window.location.reload();
    setSignUp(false);
  };

  return (
    <div className={s.header}>
      <p className={s.logo}>Instapro</p>
      {signUp && <IoAddCircleOutline onClick={()=> onAddPhotoChange()}/>}
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
      ) : signUp ? (
        <AddPhoto addPhoto={addPhoto} user={user}/>
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
