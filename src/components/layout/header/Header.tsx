//import { Search } from "react-router-dom";
import { Menu } from "../menu/Menu";
import { Search } from "../search/Search";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <img src="/logo.svg" alt="Logo de Easy Food" />
      <Search />
      <Menu />
    </header>
  );
};
