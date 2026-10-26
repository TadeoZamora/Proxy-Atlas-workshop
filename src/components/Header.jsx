export default function Header({ totalFavoritos }) {
  return (
    <header>
      <h1>Atlas IA</h1>
      <p>Favoritos: {totalFavoritos}</p>
    </header>
  );
}
