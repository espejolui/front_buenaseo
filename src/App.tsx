import { useLocation } from "react-router-dom";
import { RoutesMain } from "./routes/RoutesMain";
import { Header } from "./components/layout/header/Header";

function App() {
  const location = useLocation();
  const routes = RoutesMain().props.children.props.children;

  // 1. El método some() itera sobre el objeto routes y devuelve true si al menos uno de los elementos del objeto cumple con la condición especificada en la función callback. Si ningún elemento cumple con la condición, devuelve false.

  // 2. La anotación de tipo (route: { props: { path: string } }) indica que el parámetro route es un objeto que tiene una propiedad props, que a su vez tiene una propiedad path de tipo string.
  const isValidRoute = routes.some(
    (route: { props: { path: string } }) =>
      route.props.path === location.pathname
  );

  if (isValidRoute) {
    return (
      <>
        <Header />
        <RoutesMain />
      </>
    );
  } else {
    return <RoutesMain />;
  }
}

export default App;
