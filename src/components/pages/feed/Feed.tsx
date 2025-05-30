import { NavLink } from "react-router-dom";
import { ArrowIcon } from "../../../helpers/ArrowIcon";
import { GetRecipes } from "../../../helpers/GetRecipes";
import "./Feed.css";

export const Feed = () => {
  const {recipes} = GetRecipes();

  return (
    <section className="feed">
      {recipes.map(({ id, name_recipe, photo, type_food, }) => (
        <article key={id}>
          <img src={photo} alt={name_recipe} />

          <div>
            <h2>{name_recipe}</h2>
            <span>{type_food}</span>
            <NavLink to="#">
              Receta <ArrowIcon />
            </NavLink>
          </div>
        </article>
      ))}
    </section>
  );
};
