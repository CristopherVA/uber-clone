import React, { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import tw from 'tailwind-styled-components';
import { carList } from '../data/carList'

const token = "pk.eyJ1IjoiY3Jpc3RvcGhlcnZhIiwiYSI6ImNsMHR5bHhqaDBpOG4zZHBiYW9yeHh3aXgifQ.imUeUYf0dobq3s-W-pD8RA"

const RideSelector = (props) => {

  const { pickupCoordinates, dropoffCoordinates } = props

  const [rideDuraction, setRideDuraction] = useState(0)
  useEffect(() => {
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]}, ${pickupCoordinates[1]};${dropoffCoordinates[0]}, ${dropoffCoordinates[1]}?` + 
      new URLSearchParams({
        access_token: token,
      })
    )
    .then(res => res.json())
    .then(data => {
      console.log(data.routes[0])
        setRideDuraction(data.routes[0]?.distance / 100)
    })
  }, [pickupCoordinates, dropoffCoordinates])

  return (
    <Wrapper>
      <Info>
        Choose a ride, or swipe up for more
      </Info>

      <RideContainer>
        {carList.map((car, index) => (
          <ListRide key={index}>
            <TypeCar>
              <CarImg src={ car.imgUrl } />
              <ServiceCar>
                {car.service}
                <Time>5 min away</Time>
              </ServiceCar>
            </TypeCar>
            <Price>{'$' + (rideDuraction * car.multiplier).toFixed(2)}</Price>
          </ListRide>
        ))}
      </RideContainer>
     
    </Wrapper>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {

  const token = process.env.token;
  const apiKey = process.env.apiKey;

  return {
    props: {
      token,
      apiKey
    }
  }
}

export default RideSelector


const Wrapper = tw.div`
    flex flex-col flex-1
`

const Info = tw.div`
  text-center bg-white font-bold text-lg border-b-2 py-1
`

const RideContainer = tw.ul`
 flex flex-col h-96 overflow-y-scroll my-4 border-b-2
`

const ListRide = tw.div`
  flex justify-between cursor-pointer  items-center my-2
`

const TypeCar = tw.div`
  flex items-center
`
const CarImg = tw.img`
h-20 ml-4
`

const ServiceCar = tw.div`
  flex flex-col pl-3 font-bold leading-5
`

const Time = tw.span`
  text-sky-400 text-[13px] font-bold
`

const Price = tw.div`
 font-bold text-[14px] mr-4
`
