import TipCard from "../components/TipCard";
import StatCard from "../components/StatCard";
import LikeButton from "../components/LikeButton";

function Solutions() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-4">Solutions to Pollution</h1>
      <p className="text-gray-600 mb-6">There are simple things everyone can do to help reduce pollution.</p>
      <br></br>
      <br></br>
      <br></br>
      

      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard number="50%" label="of waste can be recycled" />
        <StatCard number="30%" label="of emissions from transportation can be cut with carpooling" />
        <StatCard number="80%" label="of marine plastic can be prevented with recycling" />
      </div>

      <div className="flex flex-col gap-3 mb-6">
        <TipCard number={1} tip="Recycle paper, plastic, and glass whenever you can" />
        <TipCard number={2} tip="Use public transportation or ride a bike instead of driving" />
        <TipCard number={3} tip="Stop using single-use plastic bags and bottles" />
        <TipCard number={4} tip="Plant trees and take care of nature around you" />
        <TipCard number={5} tip="Turn off lights and appliances to save electricity" />
      </div>

      <LikeButton label="I will try these tips!" />
    </div>
  );
}

export default Solutions;
