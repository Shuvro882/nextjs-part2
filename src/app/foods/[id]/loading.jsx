import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
       <div className="w-full md:w-2/3 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 animate-pulse">   
        {/* Top Image Skeleton */}
        <div className="h-64 w-full bg-gray-200"></div>

        {/* Content Skeleton */}
        <div className="p-6 space-y-5">
          {/* Badges Skeleton */}
          <div className="flex gap-2">
            <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
          </div>

          {/* Title Skeleton */}
          <div className="space-y-2">
            <div className="h-6 bg-gray-200 rounded-md w-4/5"></div>
            <div className="h-6 bg-gray-200 rounded-md w-2/3"></div>
          </div>

          {/* Video Link Skeleton */}
          <div className="h-4 bg-gray-200 rounded w-1/3 pt-2"></div>

          {/* Button Skeleton */}
          <div className="pt-3">
            <div className="h-12 bg-gray-200 rounded-2xl w-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
}