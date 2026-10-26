function PaisCard() {
  return (
    <div>
      <img
        src="https://flagcdn.com/w160/mx.png"
        alt="Bandera de México"
      />
      <h2>México</h2>
      <p>Americas · 128,455,567 hab.</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Atlas IA</h1>
      <PaisCard />
    </div>
  );
}
