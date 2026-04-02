function QuoteBox({ quote }) {
  return (
    <div className="bg-gray-50 border border-yellow-300 rounded-lg p-4 italic text-gray-700 text-center">
      <span className="text-white-500 text-2xl font-bold">" </span>
      {quote}
      <span className="text-white-500 text-2xl font-bold"> "</span>
    </div>
  );
}

export default QuoteBox;
