import { Header } from "../../components/Header/Header";
import { UserItem } from "../../components/UserItem/UserItem";
import s from "./Main.module.css";

export const Main = ({data, setData}) => {

  return (
    <div className={s.main}>
      <Header/>
      <UserItem data={data} setData = {setData}/>
    </div>
  );
};
