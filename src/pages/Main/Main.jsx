import { Header } from "../../components/Header/Header";
import { UserItem } from "../../components/UserItem/UserItem";
import s from "./Main.module.css";

export const Main = () => {

  return (
    <div className={s.main}>
      <Header/>
      <UserItem/>
    </div>
  );
};
