import React from 'react';

export function generateStaricParams() {
  return[{id: '52968'}, {id: '52862'}, {id: '52805'}]
}

// export const metadata = {
//   title: "Food Details",
//   description: "Best Fastfood in BD",
// };

export async function generateMetadata({params}){
     const {id} = await params;
     const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
    );

    const { details= {}} = await res.json();

    return{
      title: details.title,
    };

}

const getSingleFood = async (id) => {
  try {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.details;
  } catch (error) {
    console.error("Food fetch error:", error);
    return null;
  }
};

const Page = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Food Not Found!</h2>
        <p className="text-gray-600">The requested item does not exist in our system.</p>
      </div>
    );
  }

  return (
    // min-h-screen এবং flex items-center justify-center পুরো কার্ডটিকে স্ক্রিনের একদম মাঝে নিয়ে আসবে
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
    <div className="w-full md:w-2/3 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Top Image Section */}
        <div className="relative h-64 w-full bg-gray-100">
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-full object-cover"
          />
          {/* Price Tag Overlay */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md">
            <span className="text-lg font-extrabold text-emerald-600">${food.price}</span>
          </div>
        </div>

        {/* Content Section below the Image */}
        <div className="p-6 space-y-5">
          {/* Category & Area Badges */}
          <div className="flex items-center gap-2">
            <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {food.category}
            </span>
            <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {food.area}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 leading-tight">
            {food.title}
          </h1>

          {/* Recipe Video Link if Available */}
          {food.video && (
            <div className="pt-2">
              <a
                href={food.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                ▶ Watch Recipe Video
              </a>
            </div>
          )}

          {/* Bottom Action Button */}
          <div className="pt-3">
            <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3.5 px-6 rounded-2xl transition duration-300 shadow-lg shadow-orange-500/25 active:scale-[0.98]">
              Order Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;