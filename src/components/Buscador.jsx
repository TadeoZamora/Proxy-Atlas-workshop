export default function Buscador({ valor, onCambio }) {
  return (
    <input
      className="w-full rounded-xl border border-slate-300 px-4 py-2"
      value={valor}
      onChange={(e) => onCambio(e.target.value)}
      placeholder="Buscar país…"
    />
  );
}
