import search from "../../../assets/search.svg";
import "./Search.css";

export const Search = () => {
  const serchFood = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let target = event.target.value;
    console.log(target);
  };

  return (
    <form className="searchComponent">
      <input onChange={serchFood} type="text" placeholder="Buscar receta..." />
      <button>
        <img src={search} alt="Icono para buscar" />
      </button>
    </form>
  );
};
