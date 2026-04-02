function StatCard({ number = "?", label }) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
      <p className="text-3xl font-bold text-green-700">{number}</p>
      <p className="text-gray-600 text-sm mt-1">{label}</p>
    </div>
  );
}

export default StatCard;
