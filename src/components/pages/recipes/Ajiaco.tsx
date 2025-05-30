import { GetRecipes } from "../../../helpers/GetRecipes";
import "./Recipes.css"

export const Ajiaco = () => {
   const {recipes} = GetRecipes();
  
    return (
    <>
      <div className="recipe-card">

       {
        recipes.map(({id, title}) => (
            <div key={id}>
                <h1>{title}</h1>
            </div>
        ))
       }

        <img
          src="https://res.cloudinary.com/dopllrjwh/image/upload/v1720296686/Yogur_con_Cereal_y_Frutas_vqppsb.webp"
          alt="Yogurt con cereal y frutas"
          className="recipe-image"
        />
        <h2 className="recipe-title">Yogurt con cereal y frutas</h2>
        <p className="recipe-type">cena - lunes</p>
        <p className="recipe-preparation">
          Colocar el yogurt en un bol. Añadir el cereal y las frutas por encima.
          Servir inmediatamente
        </p>
        <h3>Ingredientes:</h3>
        <ul>
          <li>0.00 al gusto de puñado de frutas</li>
          <li>1.00 taza de yogurt natural</li>
          <li>0.50 taza de cereal</li>
        </ul>
      </div>
    </>
  );
};
