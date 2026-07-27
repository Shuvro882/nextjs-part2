import FoodCard from '@/components/card/FoodCard';
import React from 'react'
const getFoods = async() =>{
    const res = await fetch(' https://taxi-kitchen-api.vercel.app/api/v1/foods/random');

    const data = await res.json();
    return data.foods || [];
}

const FoodsPage = async () => {
    const foods = await getFoods();
  return (
    <div>
        <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-500">{foods.length}</span> Foods Found
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {
                foods.map(food => <FoodCard key={food.id} food={food} /> )
            }
        </div>
    </div>
  )
}

export default FoodsPage;