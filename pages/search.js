import Link from 'next/link'
import { useState } from 'react'
import 'tailwindcss/tailwind.css'
import tw from 'tailwind-styled-components';

const search = () => {

    const [inputValue, setInputValue] = useState({
        pickup: '',
        dropoff: ''
    })

    const { pickup, dropoff } = inputValue;

    const HandleChange = ({ target }) => {
        setInputValue({
            ...inputValue,
            [target.name]: target.value
        })
    }

    return (
        <Wrapper>

            <Link href="/" passHref>
                <BackButton>
                    <BackIcon src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </BackButton>
            </Link>


            <SerarchInputs>
                <FrontToIcon>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
                </FrontToIcon>

                <Inputs>
                    <Input
                        type="text"
                        name="pickup"
                        value={pickup}
                        onChange={HandleChange}
                        placeholder="Enter pickupt location"
                    />

                    <Input
                        type="text"
                        name="dropoff"
                        value={dropoff}
                        onChange={HandleChange}
                        placeholder="Where to"
                    />
                </Inputs>

                <PlusIcon>
                    <PlusImg src="https://img.icons8.com/ios/50/000000/plus-math.png" />
                </PlusIcon>
            </SerarchInputs>

            <StartPlace>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
                Saved Place
            </StartPlace>

            <Link href={{
                pathname: '/confirm',
                query: {
                    pickup: pickup,
                    dropoff: dropoff
                }
            }} passHref >
                <ConfirmUber>Confirm Locations</ConfirmUber>
            </Link>

        </Wrapper>
    )
}

export default search

const Wrapper = tw.div`
 h-screen flex flex-col bg-gray-200
`

const SerarchInputs = tw.div`
    bg-white flex items-center  pb-2 mb-4
`

const FrontToIcon = tw.div`
  w-14 flex flex-col items-center
`

const Circle = tw.img`
 h-3
`

const Line = tw.img`
 h-8
`

const Square = tw.img`
 h-3
`

const Inputs = tw.div`
flex flex-col flex-1
`

const Input = tw.input`
h-10  outline-none border-none bg-gray-200 my-1 pl-2 rounded-lg
`


const PlusIcon = tw.div`
 w-10 h-10 bg-gray-200 rounded-full mx-4
 `

const PlusImg = tw.img`
  w-18 
`

const StartPlace = tw.div`
h-14 bg-white font-bold text-6xs text-black flex items-center

`
const StarIcon = tw.img`
    h-12 p-2 rounded-full bg-gray-400 mr-2 ml-2
`

const ConfirmUber = tw.div`
    h-14 cursor-pointer bg-black p-4 mt-4 font-bold text-lg mx-1 rounded-xs text-white flex justify-center items-center
`

const BackButton = tw.div`
shadow-lg bg-white p-1 rounded-full absolute z-[1000] top-2 left-2 cursor-pointer
`

const BackIcon = tw.img`
h-10 
`