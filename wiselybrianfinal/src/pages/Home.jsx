import SectionBanner from "../components/SectionBanner";
import SimpleClicker from "../components/SimpleClicker";

function Home() {
  return (
    <div>
      <SectionBanner
        title="Welcome to Pollution Awareness"
        description="Learn about the causes, effects, and solutions to pollution around the world."
      />

      <p className="text-gray-600 mb-6">
        Pollution is one of the biggest problems our planet faces today. It affects our air, water, and land every single day.
      </p>
      <br></br>

      <SimpleClicker />

      <h2 className="text-xl font-bold text-gray-700 mb-4">Meet the Team</h2>
      <div className="flex gap-6 justify-center">

        <div className="border border-gray-200 rounded-lg p-5 w-52 text-center shadow-sm">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmM0a2N5ZTN0bXk2d3RkeWVzdWh3MWlydDhudWxpZW1iamJzbDZlZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qt7bBGJ8x7ZRu/giphy.gif" alt="Brian" className="w-24 h-24 object-cover rounded-md mx-auto mb-3" />
          <h3 className="font-bold text-gray-800 text-lg">Brian</h3>
          <p className="text-sm text-green-600 mb-2">Team Member</p>
          <p className="text-sm text-gray-500">Loves playing Valorant in his free time.</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-5 w-52 text-center shadow-sm">
          <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm11bnU1bHJrcGRtNGZ3OHc1b3N2NmloZzdhOTNqeDVudG9ta3l3ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mpAJq0BoNZbig/giphy.gif" alt="Wisely" className="w-24 h-24 object-cover rounded-md mx-auto mb-3" />
          <h3 className="font-bold text-gray-800 text-lg">Wisely</h3>
          <p className="text-sm text-green-600 mb-2">Team Member</p>
          <p className="text-sm text-gray-500">Enjoys tinkering with electronics and building things.</p>
        </div>

      </div>
    </div>
  );
}

export default Home;
