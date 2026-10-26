import PaisCard from "./PaisCard";

export default function ListaPaises({ paises, favoritos, onToggle }) {
  if (paises.length === 0) return <p>No hay resultados</p>;

  return (
    <div>
      {paises.map((p) => (
        <PaisCard
          key={p.cca3}
          nombre={p.name.common}
          bandera={p.flags.png}
          region={p.region}
          poblacion={p.population}
          esFavorito={favoritos.includes(p.cca3)}
          onToggle={() => onToggle(p.cca3)}
        />
      ))}
    </div>
  );
}
