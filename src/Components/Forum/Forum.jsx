import React from 'react'
import RecipeReviewCard from './card'
import RecipeReviewCards from './post'
import SearchAppBar from './nav'

export default function Forum() {
  return (
    // <div>
    //     <SearchAppBar/>
    //     <h1>Dr.Dixon Health forum</h1>
    //     <div>
    //   <RecipeReviewCard />
    //   <RecipeReviewCard />
    //   </div>
    //   <div>
    //   <RecipeReviewCard />
    //   <RecipeReviewCard />
    //   </div>
    //   <h1>New Posts</h1>

    
    // </div>
    <div>
    <SearchAppBar/>
    <div className='grid justify-items-center ...'>


    <div className='flex flex-row   mt-10  '>
    <span className='mr-10'><RecipeReviewCard   name="Chetan" image="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=800 "  /></span>
    <RecipeReviewCard  name="Chetan2" image="https://images.pexels.com/photos/208474/pexels-photo-208474.jpeg?auto=compress&cs=tinysrgb&w=800" />
    </div>
    <div className='flex flex-row mt-10 '>
    <span className='mr-10'><RecipeReviewCard  name="Chetan3" image="https://images.pexels.com/photos/47073/nutrient-additives-medicine-pills-bless-you-47073.jpeg?auto=compress&cs=tinysrgb&w=800 " /></span>
    <RecipeReviewCard  name="Chetan4" image="https://images.pexels.com/photos/4386495/pexels-photo-4386495.jpeg?auto=compress&cs=tinysrgb&w=800 "/>
    </div>
    </div>
   <div>
   <h1 className=' mt-10 ml-80'>New posts</h1>
    <div className='flex justify-center mt-10 space-x-4'>
 
  <RecipeReviewCards names='When and What to Vaccinate' />
  <RecipeReviewCards  names='Baby Development Stages'/>
  <RecipeReviewCards names='The Chickenpox' />
</div>


   </div>

  </div>
  )
}



