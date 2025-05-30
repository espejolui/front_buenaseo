import { Routes, Route } from "react-router-dom";
import { Feed } from "../components/pages/feed/Feed";
import { Calendar } from "../components/pages/calendar/Calendar";
import { Error } from "../components/pages/error/Error";
import { Ajiaco } from "../components/pages/recipes/Ajiaco";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/calendario" element={<Calendar />} />
        <Route path="/ajiaco" element={<Ajiaco />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
