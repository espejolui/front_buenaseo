import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RoutesMain } from "../../../routes/RoutesMain";
import hamburguer from "../../../assets/hamburguer.svg";
import close from "../../../assets/close.svg";

import "./Menu.css";

export const Menu = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  const routes = RoutesMain().props.children.props.children;

  return (
    <nav className="containerMenu">
      {/* Si se invoca a openMenu() se le aplica la clase showMenu y tambien se le aplica la clase openBtn */}
      <button className="btnOpenMenu" onClick={openMenu}>
        <img src={hamburguer} alt="Icono del menu" />
      </button>

      <ul className={menu ? "showMenu" : ""}>
        <button className="btnCloseMenu" onClick={closeMenu}>
          <img src={close} alt="Icono para cerrar menu" />
        </button>

        {routes.map(
          (route: { props: { path: string } }) =>
            // Si la ruta encontrada es diferente a estos dos (/ * ) entonces si renderiza
            route.props.path !== "/" &&
            route.props.path !== "*" && (
              <li key={route.props.path}>
                <NavLink to={route.props.path}>
                  {route.props.path.split("/")}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};
