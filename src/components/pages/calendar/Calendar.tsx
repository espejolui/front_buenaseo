import { GetRecipes } from "../../../helpers/GetRecipes";
import Days from "../../../helpers/Days.json";
import "./Calendar.css";

export const Calendar = () => {
  const {recipes} = GetRecipes();

  const days = Days;
  return (
    <section className="calendar">
      <h1>Calendario semanal</h1>

      {/* Map for render days to week */}
      {days.map((day, index) => (
        <aside key={index} className="day">
          <h2>{day}</h2>

          <div className="typeFood">
            {/* Map for render recipes */}
            {recipes.map(
              ({ id, title, type_food, day_week, photo }) =>
                day_week === day && (
                  <article key={id}>
                    <h3>{type_food}</h3>
                    <h4>{title}</h4>
                    <img src={photo} alt={"Foto de la comida: " + title} />
                  </article>
                ),
            )}
          </div>
        </aside>
      ))}
    </section>
  );
};
