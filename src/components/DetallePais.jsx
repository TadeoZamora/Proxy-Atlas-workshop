import GuiaIA from "./GuiaIA";

export default function DetallePais({ pais }) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold">{pais.name.common}</h2>
      <p>Capital: {pais.capital?.[0] ?? "Sin capital"}</p>
      <p>Población: {pais.population.toLocaleString()}</p>
      <GuiaIA pais={pais} />
    </section>
  );
}
