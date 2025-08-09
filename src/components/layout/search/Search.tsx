import React, { useState, useRef, useEffect } from "react";
import search from "../../../assets/search.svg";
import { persons } from "../../../helpers/Persons";
import { slugify } from "../../../helpers/slugify";
import "./Search.css";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [results, setResults] = useState<typeof persons>([]);
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const searchPerson = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    if (value.trim() === "") {
      setResults([]);
      setShowDropdown(false);
      return;
    }
    const filtered = persons.filter(person =>
      person.name.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
    setShowDropdown(true);
  };

  // Cierra el dropdown si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (person: typeof persons[0]) => {
    setQuery("");
    setShowDropdown(false);
    navigate(`/perfil/${slugify(person.name)}`);
  };

  return (
    <div style={{ position: "relative", maxWidth: 350 }}>
      <form className="searchComponent" onSubmit={e => e.preventDefault()}>
        <input
          onChange={searchPerson}
          type="text"
          placeholder="Buscar buena aseadora..."
          value={query}
          onFocus={() => query && setShowDropdown(true)}
          autoComplete="off"
        />
        <button type="submit">
          <img src={search} alt="Icono para buscar" />
        </button>
      </form>
      {showDropdown && query && (
        <div
          className="search-results"
          ref={resultsRef}
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            right: 0,
            maxHeight: 250,
            overflowY: "auto",
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: 12,
            zIndex: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          {results.length === 0 ? (
            <p style={{ margin: 12, color: "var(--green)" }}>No se encontraron resultados.</p>
          ) : (
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {results.map(person => (
                <li
                  key={person.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 14px",
                    cursor: "pointer",
                    borderBottom: "1px solid #f0f0f0",
                    color: "var(--green)",
                    background: "transparent",
                    minHeight: "48px",
                  }}
                  onClick={() => handleSelect(person)}
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === "Enter") handleSelect(person);
                  }}
                >
                  <img
                    src={person.photo}
                    alt={person.name}
                  />
                  <span style={{ color: "var(--green)", fontWeight: 600 }}>
                    {person.name}
                  </span>
                  <span style={{ marginLeft: 8, fontSize: 13, color: "var(--green)" }}>
                    {person.location}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
