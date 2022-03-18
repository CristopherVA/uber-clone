import { useEffect } from 'react'
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css'
import tw from 'tailwind-styled-components';
import { auth, provider } from '../firebase/firebase'
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';

const login = () => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])

    return (
        <Wrapper>
            <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
            <TextLogin>Log in to access your account</TextLogin>
            <ImgLogin src="https://i.ibb.co/CsV9RYZ/login-image.png" />
            <ButtonLogin
                onClick={() => signInWithPopup(auth, provider)}
            >
                Sign in with google
            </ButtonLogin>
        </Wrapper>
    )
}

export default login

const Wrapper = tw.div`
    h-screen bg-white p-4
`

const UberLogo = tw.img`
    h-12
`

const TextLogin = tw.div`
    text-5xl mt-4
`

const ImgLogin = tw.img`
    w-full
`

const ButtonLogin = tw.div`
    bg-black text-white font-bold h-14 rounded-lg cursor-pointer flex justify-center items-center mt-4
`
