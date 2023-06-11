import { Header } from "../../components/Header/Header";
import { UserItem } from "../../components/UserItem/UserItem";
import s from "./UserPage.module.css";

export const UserPage = () => {
  return (
    <div className={s.user_page}>
      <Header />
      <UserItem />
    </div>
  );
};
