import React from 'react'
import './three.css'
import img from '../../assets/Rectangle 3 (1).png'
const Three = () => {
  return (
	<div className='three'>
	  <div className="threeontainer">
		<div className="row">
			<img src={img} alt="" />
			<img src={img} alt="" />
			<img src={img} alt="" />
			<img src={img} alt="" />
		</div>
		<div className="row">
			<img src={img} alt="" />
			<img src={img} alt="" />
			<img src={img} alt="" />
			<img src={img} alt="" />
		</div>
	  </div>
	</div>
  )
}

export default Three
