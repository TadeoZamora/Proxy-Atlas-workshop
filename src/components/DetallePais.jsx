export default function DetallePais({ pais }) {
  return (
    <section>
      <h2>{pais.name.common}</h2>
      <p>Capital: {pais.capital?.[0] ?? "Sin capital"}</p>
      <p>Población: {pais.population.toLocaleString()}</p>
    </section>
  );
}
