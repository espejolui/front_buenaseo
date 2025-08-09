import React from "react";
import { useParams } from "react-router-dom";
import { persons } from "../../../helpers/Persons";
import { slugify } from "../../../helpers/slugify";

export const Perfil = () => {
  const { nombre } = useParams<{ nombre: string }>();
  const persona = persons.find(
    p => slugify(p.name) === nombre
  );

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
    </div>
  );
};