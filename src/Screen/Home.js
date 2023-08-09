import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Carousel from '../Components/Carousel'

export default function Home() {
const [foodItem, setFoodItem]=useState([])
const [foodCat, setFoodCat]=useState([])

const loadData = async()=>{
  let response = await fetch("http://localhost:5000/api/foodData",{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    }
  })
  response = await response.json()
  console.log(response[0],response[1]);
  setFoodItem(response[0])
  setFoodCat(response[1])
}

useEffect(()=>{
  loadData()
},[])
  return (
    <div className=''>
      <div><Navbar/></div>
     <div> <Carousel/></div>
      <div className='container'>
        {
         foodCat !==[] ? foodCat.map((data)=>{
          return(<div className='row mb-3'> 
           <div key={data._id} className='fs-3 m-3'>{data.CategoryName}
           </div>
           <hr />
           {foodItem !==[] ? foodItem.filter((item)=>item.CategoryName ==data.CategoryName) 
           .map(filterItems=>{
            return(
              <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'> <Card foodName={filterItems.name}
              options={filterItems.options}
              imgSrc = {filterItems.img}
              
              
              ></Card></div>
            )
           })
          :<div>no such data</div>}
           </div>)
        
         })
          : <div>""</div> 
        }
    
      </div>
      <div><Footer/></div>
    </div>
  )
}
