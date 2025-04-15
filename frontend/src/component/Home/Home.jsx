import React from 'react'
import "./Home.css"
import MutliItemCarousel from './MutliItemCarousel'
import RestaurantCard from '../Restaurant/RestaurantCard'
import {getAllRestaurantsAction} from '../State/Restaurant/Action'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer'

const restaurants=[1,1,1,1,1,1,1,1]
const handleLogout = () => {
  
  localStorage.removeItem("jwt");
  // Redirect to signup or login page
  window.location.href = "/account/register"; // or "/login"
};

export const Home = () => {
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const {restaurant} = useSelector(store => store)
    const navigate = useNavigate()

    console.log("restaurant ",restaurant)

    useEffect(() => {
      dispatch(getAllRestaurantsAction(jwt))
      
    },[dispatch,jwt]);

  return (
    <div className='pb-10'>
       <section className='banner -z-50 relative flex flex-col justify-center
       items-center'>

            <div className='w-{50vw} z-10 text-center'>
                <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>
                    H.K. Food</p>

                <p className='z-10 text-gray-300 text-xl lg:text-4xl'>
                    From Our Kitchen to Your Table – Fresh,
                     Delicious, Every Time.

                </p>

            </div>
            <div className='cover absolute top-0 left-0 right-0'>

            </div>
            <div className='fadout'>

            </div>

       </section>

       <section className='p-10 lg:py-10 lg:px-20'>
        <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>
          Top Meals
        </p>
        <MutliItemCarousel/>
       </section>
       <section className='px-5 lg:px-20 pt-10'>
        <h1 className='text-2xl font-semibold text-gray-400 py-3'>
          Order From Our Handpicked Favorites</h1>
          <div className='flex flex-wrap items-center justify-around gap-5 pt-4 pb-4'>
              {
               restaurant.restaurants.map((item) => (
                <RestaurantCard key={item.id} item={item} />
              ))
              }
          </div>
       </section>
       {/* <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">
  Logout
</button> */}
              <Footer/>
        </div>
  )
}
