import React from 'react'

function ICard({data}) {
  return (
    <div style={{border:'2px solid white', width:'200px', height:'300px', display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'}}>
      {/* <img src={data.pic} alt={data.name} /> */}
      <h2>{data.name}</h2>
      <p>Roll: {data.roll}</p>
      <p>Branch: {data.branch}</p>
      <p>College: {data.college}</p>
    </div>
  )
}

export default ICard