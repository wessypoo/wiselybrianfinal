import SectionBanner from "../components/SectionBanner";
import QuoteBox from "../components/QuoteBox";

function Types() {
  return (
    <div>
      <SectionBanner
        title="Types of Pollution"
        description="Pollution comes in many different forms that affect different parts of our environment."
      />

      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
        <li><span className="font-semibold">Air Pollution</span> - Smoke and gases in the air we breathe</li>
        <li><span className="font-semibold">Water Pollution</span> - Chemicals and trash in rivers and oceans</li>
        <li><span className="font-semibold">Land Pollution</span> - Garbage and waste left on the ground</li>
        <li><span className="font-semibold">Noise Pollution</span> - Loud sounds that harm people and animals</li>
        <li><span className="font-semibold">Light Pollution</span> - Too much artificial light disrupting nature</li>
      </ul>

      <QuoteBox quote="The Earth does not belong to us. We belong to the Earth." />
    </div>
  );
}

export default Types;
