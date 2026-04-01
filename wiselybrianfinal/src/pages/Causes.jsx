import TipCard from "../components/TipCard";
import StatCard from "../components/StatCard";

function Causes() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-4">Causes of Pollution</h1>
      <p className="text-gray-600 mb-6">There are many things that cause pollution in our environment.</p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard number="8M+" label="tons of plastic dumped in oceans each year" />
        <StatCard number="90%" label="of people breathe unhealthy air worldwide" />
        <StatCard number="15B" label="trees cut down every year" />
      </div>

      <h2 className="text-xl font-bold text-gray-700 mb-3">Main Causes</h2>
      <div className="flex flex-col gap-3">
        <TipCard tip="Cars and trucks releasing exhaust fumes into the air" />
        <TipCard tip="Factories dumping chemicals into rivers and oceans" />
        <TipCard tip="Burning fossil fuels like coal and oil for energy" />
        <TipCard tip="Throwing plastic and trash into the ocean" />
        <TipCard tip="Cutting down forests that clean the air" />
      </div>
    </div>
  );
}

export default Causes;
