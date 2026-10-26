import { useEffect, useState } from "react";
import Header from "./components/Header";
import Buscador from "./components/Buscador";
import ListaPaises from "./components/ListaPaises";

const API =
  "https://restcountries.com/v3.1/all" +
  "?fields=name,cca3,flags,region,population,capital";

export default function App() {
  const [paises, setPaises] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    async function cargar() {
      try {
        const res = await fetch(API);
        if (!res.ok) throw new Error("Error " + res.status);
        setPaises(await res.json());
      } catch (e) {
        setError(e.message);
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, []);

  function toggleFavorito(codigo) {
    setFavoritos((prev) =>
      prev.includes(codigo)
        ? prev.filter((c) => c !== codigo)
        : [...prev, codigo]
    );
  }

  const visibles = paises.filter((p) =>
    p.name.common
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  if (cargando) return <p>Cargando países…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Header totalFavoritos={favoritos.length} />
      <Buscador valor={busqueda} onCambio={setBusqueda} />
      <ListaPaises
        paises={visibles}
        favoritos={favoritos}
        onToggle={toggleFavorito}
      />
    </div>
  );
}
