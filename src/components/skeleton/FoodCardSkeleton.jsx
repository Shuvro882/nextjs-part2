const FoodCardSkeleton = () => {
  return (
    <div className="border rounded-xl overflow-hidden shadow animate-pulse">
      <div className="h-52 bg-gray-300"></div>

      <div className="p-5">
        <div className="w-20 h-6 bg-gray-300 rounded-full mb-4"></div>

        <div className="h-5 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>

        <div className="h-7 w-24 bg-gray-300 rounded mt-5"></div>

        <div className="flex gap-3 mt-6">
          <div className="flex-1 h-10 bg-gray-300 rounded-lg"></div>
          <div className="flex-1 h-10 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;