function TipCard({ number, tip }) {
  return (
    <div className="bg-white border-l-4 border-green-500 p-4 rounded shadow-sm">
      <p className="text-gray-700">
        {number ? `${number}. ` : ""}
        {tip}
      </p>
    </div>
  );
}

export default TipCard;
