import TipCard from "../components/TipCard";
import LikeButton from "../components/LikeButton";

function Solutions() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-4">Solutions to Pollution</h1>
      <p className="text-gray-600 mb-6">There are simple things everyone can do to help reduce pollution.</p>
      <br></br>
      <br></br>
      <br></br>
      

      <div className="flex flex-col gap-3 mb-6">
        <TipCard tip="Recycle paper, plastic, and glass whenever you can" />
        <TipCard tip="Use public transportation or ride a bike instead of driving" />
        <TipCard tip="Stop using single-use plastic bags and bottles" />
        <TipCard tip="Plant trees and take care of nature around you" />
        <TipCard tip="Turn off lights and appliances to save electricity" />
      </div>

      <LikeButton label="I will try these tips!" />
    </div>
  );
}

export default Solutions;
