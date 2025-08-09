import React, { useState } from "react";
import { persons } from "../../../helpers/Persons";
import "./Feed.css";

export const Feed = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<any>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleContratar = (person: any) => {
    setSelectedPerson(person);
    setShowModal(true);
    setFeedback(null);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedPerson(null);
    setFeedback(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback("¡Reserva enviada! Recibirás un correo con la confirmación.");
    setTimeout(() => {
      setShowModal(false);
      setSelectedPerson(null);
      setFeedback(null);
    }, 2000);
  };

  return (
    <section className="feed">
      <h1>Aseadoras disponibles</h1>
      <div className="persons">
        {persons.map(
          (person) => (
            <article key={person.name}>
              <img src={person.photo} alt={person.name} />
              <span>
                <p>
                  {person.name} - {person.location}
                </p>
                <p>4 Horas: ${person.service_four}</p>
                <p>8 Horas: ${person.service_eight}</p>
                <button className="contratar" onClick={() => handleContratar(person)}>
                  Contratar
                </button>
              </span>
            </article>
          ),
        )}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Contratar a {selectedPerson.name}</h2>
            {feedback ? (
              <div className="feedback">{feedback}</div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form">
                <label>
                  Tipo de servicio:
                  <select>
                    <option value="4">4 Horas</option>
                    <option value="8">8 Horas</option>
                  </select>
                </label>
                <br />
                <label>
                  Fecha:
                  <input type="date" required />
                </label>
                <br />
                <label>
                  Hora:
                  <input type="time" required />
                </label>
                <br />
                <button type="submit">Confirmar</button>
                <button type="button" onClick={handleClose}>Cancelar</button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
