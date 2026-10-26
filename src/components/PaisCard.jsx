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
    <div className="rounded-2xl bg-white p-4 shadow hover:shadow-lg">
      <img
        className="h-28 w-full rounded-lg object-cover"
        src={bandera}
        alt={`Bandera de ${nombre}`}
      />
      <h2 className="mt-3 text-lg font-semibold">{nombre}</h2>
      <p className="text-sm text-slate-500">
        {region} · {poblacion.toLocaleString()} hab.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          className="rounded-full bg-slate-900 px-3 py-1 text-sm text-white"
          onClick={onSelect}
        >
          Ver detalle
        </button>
        <button
          className={`rounded-full px-3 py-1 text-sm ${
            esFavorito ? "bg-amber-400" : "bg-slate-200"
          }`}
          onClick={onToggle}
        >
          {esFavorito ? "Quitar favorito" : "Favorito"}
        </button>
      </div>
    </div>
  );
}
