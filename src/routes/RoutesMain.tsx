import { Routes, Route } from "react-router-dom";
import { Perfil } from "../components/pages/perfil/Perfil";
import { Feed } from "../components/pages/feed/Feed";
import { Error } from "../components/pages/error/Error";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/inicio" element={<Feed />} />
        <Route path="/perfil/:nombre" element={<Perfil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
