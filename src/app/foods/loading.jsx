import FoodCardSkeleton from '@/components/skeleton/FoodCardSkeleton'
import React from 'react'

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {
            [...Array(12)].map((_, index) => <FoodCardSkeleton key={index} index={index} />)
        }
    </div>
  )
}

export default loading