export default function PaisCard({
  nombre,
  bandera,
  region,
  poblacion,
  esFavorito,
  onToggle,
}) {
  return (
    <div>
      <img src={bandera} alt={`Bandera de ${nombre}`} />
      <h2>{nombre}</h2>
      <p>
        {region} · {poblacion.toLocaleString()} hab.
      </p>
      <button onClick={onToggle}>
        {esFavorito ? "Quitar favorito" : "Favorito"}
      </button>
    </div>
  );
}
