export default function PaisCard({
  nombre,
  bandera,
  region,
  poblacion,
  esFavorito,
  onToggle,
  onSelect,
}) {
  return (
    <div>
      <img src={bandera} alt={`Bandera de ${nombre}`} />
      <h2>{nombre}</h2>
      <p>
        {region} · {poblacion.toLocaleString()} hab.
      </p>
      <button onClick={onSelect}>Ver detalle</button>
      <button onClick={onToggle}>
        {esFavorito ? "Quitar favorito" : "Favorito"}
      </button>
    </div>
  );
}
