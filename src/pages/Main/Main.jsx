import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { UserItem } from "../../components/UserItem/UserItem";
import s from "./Main.module.css";

export const Main = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className={s.main}>
      <Header setLogin={setLogin} setPassword={setPassword}/>
      <UserItem login={login}/>
    </div>
  );
};
