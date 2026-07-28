"use client";
import ReviewCard from '@/components/card/ReviewCard';
import React, { useState,useEffect } from 'react'
import ReviewLoading from './ReviewLoading';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
 useEffect(() =>{
       fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
       .then(res => res.json())
       .then(data=>{
        setReviews(data.reviews || []);
        setLoading(false)
       } 

       )
 },[])

 if(loading){
  return <ReviewLoading></ReviewLoading>
 }

  return (
    <div>
       <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-500">{reviews.length}</span> Reviews Found
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {
                reviews.map(review => (
                <ReviewCard key={review.id} reviewData={review} />) )
            }
        </div>
    </div>
  )
}

export default ReviewsPage;