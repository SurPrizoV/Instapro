import { Header } from "../../components/Header/Header";
import { UserItem } from "../../components/UserItem/UserItem";
import s from "./UserPage.module.css";

export const UserPage = ({data, setData}) => {

  return (
    <div className={s.user_page}>
      <Header />
      <UserItem data={data} setData = {setData}/>
    </div>
  );
};
