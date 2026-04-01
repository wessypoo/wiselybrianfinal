function QuoteBox({ quote }) {
  return (
    <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 italic text-gray-700 text-center">
      <span className="text-yellow-500 text-2xl font-bold">" </span>
      {quote}
      <span className="text-yellow-500 text-2xl font-bold"> "</span>
    </div>
  );
}

export default QuoteBox;
