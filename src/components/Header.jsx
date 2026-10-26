export default function Header({ totalFavoritos }) {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">Atlas IA</h1>
      <p className="rounded-full bg-amber-100 px-3 py-1 text-sm">
        Favoritos: {totalFavoritos}
      </p>
    </header>
  );
}
