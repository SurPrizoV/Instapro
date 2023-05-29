import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { UserItem } from "../../components/UserItem/UserItem";
import s from "./Main.module.css";

export const Main = () => {
  const [user, setUser] = useState({});
  
  return (
    <div className={s.main}>
      <Header setUser={setUser}/>
      <UserItem user={user}/>
    </div>
  );
};
