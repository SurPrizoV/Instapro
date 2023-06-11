import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { UserItem } from "../../components/UserItem/UserItem";
import s from "./Main.module.css";

export const Main = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("userToken"));
  }, []);

  return (
    <div className={s.main}>
      <Header setUser={setUser} user={user} />
      <UserItem user={user} />
    </div>
  );
};
