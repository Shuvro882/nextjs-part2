import React from "react";

export const ReviewCardSkeleton = () => {
  return (
    <div className="max-w-md w-full animate-pulse rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Header Placeholder */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gray-200" />
          <div className="space-y-2">
            <div className="h-4 w-28 rounded bg-gray-200" />
            <div className="h-3 w-16 rounded bg-gray-200" />
          </div>
        </div>
        <div className="h-7 w-12 rounded-full bg-gray-200" />
      </div>

      {/* Content Placeholder */}
      <div className="mt-4 space-y-2">
        <div className="h-3.5 w-full rounded bg-gray-200" />
        <div className="h-3.5 w-11/12 rounded bg-gray-200" />
        <div className="h-3.5 w-4/5 rounded bg-gray-200" />
      </div>

      {/* Button Placeholder */}
      <div className="mt-6 border-t border-gray-100 pt-4">
        <div className="h-7 w-20 rounded-full bg-gray-200" />
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;