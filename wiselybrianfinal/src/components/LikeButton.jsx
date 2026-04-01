import { useState } from "react";

function LikeButton({ label }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick() {
    if (liked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setLiked(!liked);
  }

  return (
    <div className="flex justify-center">
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
        liked
          ? "bg-red-100 border-red-400 text-red-600"
          : "bg-gray-100 border-gray-300 text-gray-600"
      }`}
    >
      ❤️ {label} ({count})
    </button>
    </div>
  );
}

export default LikeButton;
