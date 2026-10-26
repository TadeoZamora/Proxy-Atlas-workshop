import { useEffect, useState } from "react";

const API =
  "https://restcountries.com/v3.1/all" +
  "?fields=name,cca3,flags,region,population,capital";

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
  const [paises, setPaises] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    async function cargar() {
      const res = await fetch(API);
      const datos = await res.json();
      setPaises(datos);
    }
    cargar();
  }, []);

  // ahora filtra paises, ya no PAISES
  const visibles = paises.filter((p) =>
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
