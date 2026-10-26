import PaisCard from "./PaisCard";

export default function ListaPaises({ paises, favoritos, onToggle, onSelect }) {
  if (paises.length === 0) return <p>No hay resultados</p>;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {paises.map((p) => (
        <PaisCard
          key={p.cca3}
          nombre={p.name.common}
          bandera={p.flags.png}
          region={p.region}
          poblacion={p.population}
          esFavorito={favoritos.includes(p.cca3)}
          onToggle={() => onToggle(p.cca3)}
          onSelect={() => onSelect(p)}
        />
      ))}
    </div>
  );
}
