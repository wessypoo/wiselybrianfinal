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
      className={`w-fit max-w-[220px] flex items-center justify-center gap-1 px-3 py-1.5 rounded-full border text-xs font-medium leading-tight transition-colors ${
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
