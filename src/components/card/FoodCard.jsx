import Link from "next/link";

const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition duration-300">
      <img
        src={foodImg}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-600 rounded-full mb-3">
          {category}
        </span>

        <h2 className="text-lg text-black font-semibold line-clamp-2 min-h-[56px]">
          {title}
        </h2>

        <p className="text-2xl font-bold text-green-600 mt-3">
          ${price}
        </p>

        <div className="flex gap-3 mt-5">
          <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
            Add to Cart
          </button>

          <Link
            href={`/foods/${id}`}
            className="flex-1 text-center border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;