import { useState } from "react";

function SimpleClicker() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 border border-green-200 rounded-lg p-4 mb-6 text-center">
      <p className="text-gray-700 mb-3">Trash picked up: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-gray-600 text-white px-3 py-1.5 text-xs rounded"
      >
        Pick up 1 trash
      </button>
    </div>
  );
}

export default SimpleClicker;