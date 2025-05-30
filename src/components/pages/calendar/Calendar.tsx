import Days from "../../../helpers/Days.json";
import "./Calendar.css";

export const Calendar = () => {
  const days = Days;
  return (
    <section className="calendar">
      <h1>Calendario semanal</h1>

      {/* Map for render days to week */}
      {days.map((day, index) => (
        <aside key={index} className="day">
          <h2>{day}</h2>
        </aside>
      ))}
    </section>
  );
};
