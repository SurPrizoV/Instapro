import { Route, Routes } from "react-router-dom";
import { Main } from "../../pages/Main/Main";
import { UserPage } from "../../pages/UserPage/UserPage";
import { NotFound } from "../../pages/NotFound/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/user/:id" element={<UserPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
