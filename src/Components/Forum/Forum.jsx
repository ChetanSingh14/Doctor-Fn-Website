import React from 'react'
import SearchAppBar from './app'
import RecipeReviewCard from './card'
export default function Display() {
  return (
    <div>
      <SearchAppBar/>
      <div className='grid justify-items-center ...'>


      <div className='flex flex-row   mt-10   '>
      <RecipeReviewCard  name="Chetan" image="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=800" />
      <RecipeReviewCard  name="Chetan2" image="https://images.pexels.com/photos/208474/pexels-photo-208474.jpeg?auto=compress&cs=tinysrgb&w=800" />
      </div>
      <div className='flex flex-row mt-10 '>
      <RecipeReviewCard  name="Chetan3" image="https://images.pexels.com/photos/47073/nutrient-additives-medicine-pills-bless-you-47073.jpeg?auto=compress&cs=tinysrgb&w=800 " />
      <RecipeReviewCard  name="Chetan4" image="https://images.pexels.com/photos/4386495/pexels-photo-4386495.jpeg?auto=compress&cs=tinysrgb&w=800 "/>
      </div>
      </div>
     

    </div>
  )
}