import StatCard from "../components/StatCard";
import QuoteBox from "../components/QuoteBox";
import LikeButton from "../components/LikeButton";

function Facts() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-4">Pollution Facts</h1>
      

      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard number="7M" label="deaths per year from air pollution" />
        <StatCard number="8M+" label="tons of plastic in the ocean yearly" />
        <StatCard number="2B" label="people drink contaminated water" />
      </div>

      <div className="flex flex-col gap-2 text-gray-600 list-disc list-inside mb-6">
        <ul className="list-disc list-inside space-y-2">
          <li>Noise pollution can cause stress and hearing loss</li>
          <li>Pollution is the leading cause of disease in developing countries</li>
          <li>Over 1 million seabirds die from ocean pollution each year</li>
        </ul>
      </div>

      <QuoteBox quote="We are the first generation to feel the impact of climate change and the last generation that can do something about it." />

      <div className="mt-6">
        <LikeButton label="This fact surprised me" />
      </div>
    </div>
  );
}

export default Facts;
