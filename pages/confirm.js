import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css'
import tw from 'tailwind-styled-components';
import { Map } from '../components/Map'
import RideSelector from '../components/RideSelector'

const token = "pk.eyJ1IjoiY3Jpc3RvcGhlcnZhIiwiYSI6ImNsMHR5bHhqaDBpOG4zZHBiYW9yeHh3aXgifQ.imUeUYf0dobq3s-W-pD8RA"

const Confirm = () => {

    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0])

    const router = useRouter()

    const { pickup, dropoff } = router.query;

    const getPikupCordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: token,
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setPickupCoordinates(data.features[0].center)
            })


    }

    const getDropoffCordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: token,
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setDropoffCoordinates(data.features[0]?.center)
            })
    }


    useEffect(() => {
        getPikupCordinates(pickup);
        getDropoffCordinates(dropoff);
    }, [pickup, dropoff])


    return (
        <div className='bg-slate-900 w-full h-full'>

            <Wrapper>
                <Link href="/search" passHref>
                    <BackButton  >
                        <BackIcon src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                    </BackButton>
                </Link>
                <Map
                    pickupCoordinates={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
                />
                <RideContainer>
                    <RideSelector
                        pickupCoordinates={pickupCoordinates}
                        dropoffCoordinates={dropoffCoordinates}
                    />
                    <ConfirmButton>
                        Confim UberX
                    </ConfirmButton>
                </RideContainer>
            </Wrapper>
        </div>
    )
}

export default Confirm


const Wrapper = tw.div`
    h-screen flex flex-col max-w-xl mx-auto bg-white shadow-lg rounded-2xl relative
`
const RideContainer = tw.div`
    flex flex-1 flex-col
`

const ConfirmButton = tw.div`
  h-20 bg-black text-white flex
  justify-center items-center font-bold
  text-lg mx-4 mb-4 rounded-lg cursor-pointer
`

const BackButton = tw.div`
shadow-lg bg-white p-1 rounded-full absolute z-[1000] top-2 left-2 cursor-pointer
`

const BackIcon = tw.img`
h-10 
`