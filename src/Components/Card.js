import React from 'react'

export default function Card(props) {
  return (
    <div>
        <div className="card mt-3" style={{"width":  "18rem","maxHeight":"360px"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.foodName}</h5>
    {/* <p className="card-text">Some importent text</p> */}
    <div className='container w-100'>
        <select className='m-2 h-100 bg-success rounded'>
            {
                Array.from(Array(6),(e,i)=>{
                    return(
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })
            }
        </select>
        <select  className='m-2  h-100 bg-success rounded' >
            <option value="half">Half</option>
            <option value="full">Full</option>

        </select>
        <div className='d-inline h-100 fs-5'>
            total price 
        </div>

    </div>
 
  </div>
</div>
    </div>
  )
}