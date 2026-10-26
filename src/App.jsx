import { useState } from "react";

const PAISES = [
  {
    cca3: "MEX",
    name: { common: "México" },
    flags: { png: "https://flagcdn.com/w160/mx.png" },
    region: "Americas",
    population: 128455567,
  },
  {
    cca3: "JPN",
    name: { common: "Japón" },
    flags: { png: "https://flagcdn.com/w160/jp.png" },
    region: "Asia",
    population: 123201922,
  },
  {
    cca3: "FRA",
    name: { common: "Francia" },
    flags: { png: "https://flagcdn.com/w160/fr.png" },
    region: "Europe",
    population: 66548530,
  },
];

function PaisCard({ nombre, bandera, region, poblacion }) {
  const [esFavorito, setEsFavorito] = useState(false);

  return (
    <div>
      <img src={bandera} alt={`Bandera de ${nombre}`} />
      <h2>{nombre}</h2>
      <p>
        {region} · {poblacion.toLocaleString()} hab.
      </p>
      <button onClick={() => setEsFavorito(!esFavorito)}>
        {esFavorito ? "Quitar favorito" : "Favorito"}
      </button>
    </div>
  );
}

export default function App() {
  const [busqueda, setBusqueda] = useState("");

  const visibles = PAISES.filter((p) =>
    p.name.common
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1>Atlas IA</h1>
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar país…"
      />

      {visibles.length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        visibles.map((p) => (
          <PaisCard
            key={p.cca3}
            nombre={p.name.common}
            bandera={p.flags.png}
            region={p.region}
            poblacion={p.population}
          />
        ))
      )}
    </div>
  );
}
