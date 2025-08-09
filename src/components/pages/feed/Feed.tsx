import React, { useState } from "react";
import { persons } from "../../../helpers/Persons";
import "./Feed.css";

export const Feed = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<any>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [correoCliente, setCorreoCliente] = useState<string>("");

  // Obtener la fecha de hoy en formato YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  const handleContratar = (person: any) => {
    setSelectedPerson(person);
    setShowModal(true);
    setFeedback(null);
    setCorreoCliente("");
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedPerson(null);
    setFeedback(null);
    setCorreoCliente("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(
      `¡Reserva enviada! Recibirás un correo con la confirmación enviado a ${correoCliente}.`
    );
  };

  return (
    <section className="feed">
      <h1>Aseadoras disponibles</h1>
      <div className="persons">
        {persons.map((person) => (
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
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Contratar a {selectedPerson.name}</h2>
            {feedback ? (
              <div
                className="feedback"
                style={{
                  minHeight: "70%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {feedback}
                <div className="form-buttons" style={{ marginTop: 24 }}>
                  <button type="button" onClick={handleClose}>
                    Cerrar
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form">
                <label>
                  Tipo de servicio:
                  <select required aria-required="true">
                    <option value="4">4 Horas</option>
                    <option value="8">8 Horas</option>
                  </select>
                </label>
                <label>
                  Fecha:
                  <input
                    type="date"
                    required
                    aria-required="true"
                    min={today}
                    onInvalid={e =>
                      (e.target as HTMLInputElement).setCustomValidity(
                        "Este campo es obligatorio"
                      )
                    }
                    onInput={e =>
                      (e.target as HTMLInputElement).setCustomValidity("")
                    }
                  />
                </label>
                <label>
                  Hora:
                  <input
                    type="time"
                    required
                    aria-required="true"
                    onInvalid={e =>
                      (e.target as HTMLInputElement).setCustomValidity(
                        "Este campo es obligatorio"
                      )
                    }
                    onInput={e =>
                      (e.target as HTMLInputElement).setCustomValidity("")
                    }
                  />
                </label>
                <label>
                  Dirección:
                  <input
                    type="text"
                    required
                    placeholder="Ingresa tu dirección"
                    onInvalid={e =>
                      (e.target as HTMLInputElement).setCustomValidity(
                        "Este campo es obligatorio"
                      )
                    }
                    onInput={e =>
                      (e.target as HTMLInputElement).setCustomValidity("")
                    }
                  />
                </label>
                <label>
                  Correo:
                  <input
                    type="email"
                    required
                    placeholder="Ingresa tu correo"
                    value={correoCliente}
                    onChange={e => setCorreoCliente(e.target.value)}
                    onInvalid={e =>
                      (e.target as HTMLInputElement).setCustomValidity(
                        "Este campo es obligatorio"
                      )
                    }
                    onInput={e =>
                      (e.target as HTMLInputElement).setCustomValidity("")
                    }
                  />
                </label>
                <label>
                  Celular:
                  <input
                    type="tel"
                    required
                    placeholder="Ingresa tu número de celular"
                    onInvalid={e =>
                      (e.target as HTMLInputElement).setCustomValidity(
                        "Este campo es obligatorio"
                      )
                    }
                    onInput={e =>
                      (e.target as HTMLInputElement).setCustomValidity("")
                    }
                  />
                </label>
                <div className="form-buttons">
                  <button type="submit">Confirmar</button>
                  <button type="button" onClick={handleClose}>
                    Cancelar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
