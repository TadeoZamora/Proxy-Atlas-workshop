function PaisCard({ nombre, bandera, region, poblacion }) {
  return (
    <div>
      <img src={bandera} alt={`Bandera de ${nombre}`} />
      <h2>{nombre}</h2>
      <p>
        {region} · {poblacion.toLocaleString()} hab.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Atlas IA</h1>
      <PaisCard
        nombre="México"
        bandera="https://flagcdn.com/w160/mx.png"
        region="Americas"
        poblacion={128455567}
      />
      <PaisCard
        nombre="Japón"
        bandera="https://flagcdn.com/w160/jp.png"
        region="Asia"
        poblacion={123201922}
      />
      <PaisCard
        nombre="Francia"
        bandera="https://flagcdn.com/w160/fr.png"
        region="Europe"
        poblacion={66548530}
      />
    </div>
  );
}
