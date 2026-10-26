import { useState } from "react";

export default function GuiaIA({ pais }) {
  const [guia, setGuia] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  async function generar() {
    setCargando(true);
    setError(null);
    try {
      const res = await fetch("/api/guia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pais: pais.name.common }),
      });
      if (!res.ok) throw new Error();
      const datos = await res.json();
      setGuia(datos.guia);
    } catch {
      setError("No se pudo generar la guía");
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="mt-4 space-y-3">
      <button
        className="rounded-full bg-indigo-600 px-4 py-2 text-white disabled:opacity-50"
        onClick={generar}
        disabled={cargando}
      >
        {cargando ? "Generando…" : "Generar guía de viaje con IA"}
      </button>
      {error && <p className="text-red-600">{error}</p>}
      {guia && <p className="whitespace-pre-line">{guia}</p>}
    </div>
  );
}
