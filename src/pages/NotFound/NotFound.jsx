import { Header } from "../../components/Header/Header";
import s from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={s.not_found}>
      <Header />
      <p>Такой страницы нету.</p>
    </div>
  );
};
