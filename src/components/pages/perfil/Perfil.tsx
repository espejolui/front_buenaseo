import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { persons } from "../../../helpers/Persons";
import { slugify } from "../../../helpers/slugify";
import "../feed/Feed.css"; // Asegúrate de importar los estilos del modal

export const Perfil = () => {
  const { nombre } = useParams<{ nombre: string }>();
  const persona = persons.find(
    p => slugify(p.name) === nombre
  );

  // Estado para el modal y formulario
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [correoCliente, setCorreoCliente] = useState<string>("");

  // Fecha de hoy en formato YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  const handleContratar = () => {
    setShowModal(true);
    setFeedback(null);
    setCorreoCliente("");
  };

  const handleClose = () => {
    setShowModal(false);
    setFeedback(null);
    setCorreoCliente("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(
      `¡Reserva enviada! Recibirás un correo con la confirmación enviado a ${correoCliente}.`
    );
  };

  if (!persona) {
    return <div style={{ color: "var(--green)", padding: 32 }}>No se encontró el perfil.</div>;
  }

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: 32, textAlign: "center" }}>
      <img
        src={persona.photo}
        alt={persona.name}
        width={120}
        height={120}
        style={{ borderRadius: "50%", border: "3px solid var(--green)", marginBottom: 16, objectFit: "cover" }}
      />
      <h2 style={{ color: "var(--green)" }}>{persona.name}</h2>
      <p style={{ color: "var(--green)", margin: 0 }}>{persona.location} &bull; {persona.age} años</p>
      <p style={{ margin: "16px 0", color: "#444" }}>{persona.description}</p>
      <div style={{ color: "var(--green)", fontWeight: 600 }}>
        4 Horas: ${persona.service_four} <br />
        8 Horas: ${persona.service_eight}
      </div>
      <button
        className="contratar"
        style={{ marginTop: 24 }}
        onClick={handleContratar}
      >
        Contratar
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Contratar a {persona.name}</h2>
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
    </div>
  );
};