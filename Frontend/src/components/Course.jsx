import React from 'react'
import Cards from "./Cards"
import list from "./list.json"
import {Link} from "react-router-dom" 
function Course() {
  return (
 <>
 <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
  <div className='mt-28 items-center justify-center text-center'>
    <h1 className='text-2xl  md-text-4xl'>
       We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
  <p className='mt-12'>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione iusto doloremque officiis, quibusdam accusamus tempore delectus autem laborum earum, itaque illum odit nemo numquam dolorem sapiente. Doloremque fugit non debitis!
  </p>
  <Link to="/">
  <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
 
  </Link>
   </div>
  <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
    {
   list.map((item)=>(
    <Cards keys={item.id} item={item}/>
   ))
    }
  </div>
 </div>
 </>
  )
}

export default Course