import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'

function Feature() {
  return (
    <div id = 'features'>
      <h1   className='text-center'>FEATURES</h1>
      <div className="a-container">
        <Featurebox image = {fimage1} title="Quality Exercis" detail='Well-maintained gym equipment for cardio and strength training.' />
        <Featurebox image = {fimage2} title="Cardiovascular Area" detail ='Dedicated space with treadmills, bikes, rowing machines, and stair climbers.' />
        <Featurebox image = {fimage3} title="Personal Training Services" detail = 'Certified trainers for custom plans, form guidance, and motivation.'/>
        <Featurebox image = {fimage4} title="Hygiene and Maintenance" detail = 'Proper ventilation, cleaning protocols, and sanitation stations.' />
      </div>
    </div>
  )
}

export default Feature
