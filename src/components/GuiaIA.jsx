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

  // la interfaz (el return) se agrega en el paso 16
  return null;
}
