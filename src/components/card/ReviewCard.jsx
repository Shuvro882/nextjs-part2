import React, { useState } from "react";
import { Star, Heart } from "lucide-react";

// Replace this with your actual logged-in user email or context state
const CURRENT_USER_EMAIL = "john@mail.com";

export const ReviewCard = ({ reviewData }) => {
  const { user, photo, rating, review, likes: initialLikes, date } = reviewData;

  const [likes, setLikes] = useState(initialLikes || []);
  const isLiked = likes.includes(CURRENT_USER_EMAIL);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes.filter((email) => email !== CURRENT_USER_EMAIL));
    } else {
      setLikes([...likes, CURRENT_USER_EMAIL]);
    }
  };

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="max-w-md w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Header: User Profile & Rating */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={photo}
            alt={user}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{user}</h4>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-semibold text-amber-700">
            {rating}.0
          </span>
        </div>
      </div>

      {/* Review Text */}
      <p className="mt-4 text-sm leading-relaxed text-gray-600">{review}</p>

      {/* Footer: Like Action */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
        <button
          onClick={handleLike}
          className={`group flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 active:scale-95 ${
            isLiked
              ? "bg-rose-50 text-rose-600"
              : "bg-gray-50 text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Heart
            className={`h-4 w-4 transition-transform duration-200 group-hover:scale-110 ${
              isLiked ? "fill-rose-500 text-rose-500" : "text-gray-400"
            }`}
          />
          <span>{likes.length} Likes</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;