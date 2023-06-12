import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../../pages/Main/Main";
import { UserPage } from "../../pages/UserPage/UserPage";
import { NotFound } from "../../pages/NotFound/NotFound";

export const AppRoutes = () => {
  const [data, setData] = useState({ posts: [] });

  return (
    <Routes>
      <Route path="/" element={<Main data={data} setData={setData} />} />
      <Route
        path="/user/:id"
        element={<UserPage data={data} setData={setData} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
