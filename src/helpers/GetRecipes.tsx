import { useState, useEffect } from "react";

// Interface para usar en feed
interface Recipe {
  id: string,
  name_recipe: string,
  preparation: string,
  type_food: string,
  day_week: string,
  photo: string,
  ingredients: string[]
}

export const GetRecipes = () => {
  // 1. Estado para mostrar las recetas de tipo Recipe, tal como la definí arriba
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  // 2. Efecto para montar las recetas en el componente cuando sea cargado
  useEffect(() => {
    fetchRecipes();
  }, []);

  // 3. Función asincrona para obtener datos de la DB.
  const fetchRecipes = async () => {
    try {
      const petition = await fetch("http://localhost:1234/api/recipes");

      // 3.1 Conversión de los datos a formato JSON
      const data = await petition.json();

      // 3.2 Seteo e empuje de los datos al estado recipes
      setRecipes(data);
    } catch (err) {
      /* ----- Extra: esto lo puedo mejorar para responder a los errores ------ */
      console.log("Error al obtener los datos", err);
    }
  };

  return { recipes };
};