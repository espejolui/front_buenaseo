import { persons } from "../../../helpers/Persons";
import "./Feed.css";

export const Feed = () => {
  return (
    <section className="feed">
      <h1>Aseadoras disponibles</h1>
      <div className="persons">
        {persons.map(
          ({ photo, name, location, service_eight, service_four }) => (
            <article>
              <img src={photo}></img>
              <span>
                <p>
                  {name} - {location}
                </p>
                <p>4 Horas: ${service_four}</p>
                <p>8 Horas: ${service_eight}</p>
                <button className="contratar">Contratar</button>
              </span>
            </article>
          ),
        )}
      </div>
    </section>
  );
};
