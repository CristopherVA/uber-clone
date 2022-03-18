import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import tw from 'tailwind-styled-components';
import { Map } from '../components/Map'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

export default function Home() {

  const [user, setUser] = useState({})
  const router = useRouter()

  useEffect(() => {

    onAuthStateChanged(auth, user => {
      if(user) {
        setUser({
          name: user.displayName,
          photo: user.photoURL
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })

  }, [])

  return (
    <Wrapper>
      <Map />
      <ActionButtons>
        {/* Header */}
        <Header>
          <UberIcon src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <UserName>{user && user.name}</UserName>
            <UserImg
              src={user && user.photo}
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        <ButtonItems>
          <Link href="/search" passHref>
            <ButtonAction>
              <ImgButton src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ButtonAction>
          </Link>
          <Link href="/search" passHref>
            <ButtonAction>
              <ImgButton src="https://i.ibb.co/n776JLm/bike.png" />
              2-Wheels
            </ButtonAction>
          </Link>
          <Link href="/search" passHref>
            <ButtonAction>
              <ImgButton src="https://i.ibb.co/5RjchBg/uberschedule.png" />
              Reserve
            </ButtonAction>
          </Link>
        </ButtonItems>
        <InputButton>Where to?</InputButton>
        {/* InputBottom */}
      </ActionButtons>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen
`

const ActionButtons = tw.div`
bg-white flex-1 p-4
`

const Header = tw.header`
  flex 
  flex-row 
  justify-between
  items-center 
`
const UberIcon = tw.img`
  w-40
`

const Profile = tw.div`
  flex items-center 
`

const UserName = tw.div`
 mr-10 font-bold w-20 text-lg
`
const UserImg = tw.img`
  h-12 w-12 rounded-full border-grey-400 p-px
`

const ButtonItems = tw.div`
  h-40 flex items-center mt-2 md:flex justify-around
`

const ButtonAction = tw.div`
  flex flex-col cursor-pointer justify-center w-40 h-40 mr-1 ml-1 bg-gray-200 flex justify-center items-center rounded-lg font-bold text-lg 
  hover:scale-110 transition delay-75

`

const ImgButton = tw.img`
  w-24 h-24
`

const InputButton = tw.div`
 mt-10 bg-gray-200 h-16 flex items-center pl-4 text-lg font-bold rounded-lg
`