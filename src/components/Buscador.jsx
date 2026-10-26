export default function Buscador({ valor, onCambio }) {
  return (
    <input
      value={valor}
      onChange={(e) => onCambio(e.target.value)}
      placeholder="Buscar país…"
    />
  );
}
