import StatCard from "../components/StatCard";
import SectionBanner from "../components/SectionBanner";
import LikeButton from "../components/LikeButton";

function Effects() {
  return (
    <div>
      <SectionBanner
        title="Effects of Pollution"
        description="Pollution has serious effects on people, animals, and the environment."
      />

      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatCard number="7M" label="people die from air pollution each year" />
        <StatCard number="1 in 3" label="people lack access to clean drinking water" />
      </div>

      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
        <li>It causes breathing problems and lung disease in humans</li>
        <li>Animals lose their homes when habitats are destroyed</li>
        <li>Dirty water makes people and animals sick</li>
        <li>It contributes to climate change and global warming</li>
        <li>Fish and sea creatures die from ocean pollution</li>
      </ul>

      <LikeButton label="This page was helpful" />
    </div>
  );
}

export default Effects;
