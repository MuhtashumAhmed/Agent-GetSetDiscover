import React from 'react'
import SelectedFlightCard from './SelectedFlightCard'

const SelectedFlights = ({selectedFlight}) => {
  // const allTrips = JSON.parse(localStorage.getItem("CompleteTripData")) || [];
  // console.log(allTrips);
  console.log(selectedFlight);
  
  return (
    <div>
        <h1 className='font-Poppins font-medium text-2xl text-[#000000]  ' >Selected Flights</h1>
        <hr className='text-[#EEEEEE] ' />
        <div className='mt-[15px] ' >
            <SelectedFlightCard selectedFlight={selectedFlight} />
            
        </div>
    </div>
  )
}

export default SelectedFlights