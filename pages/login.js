import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css'
import tw from 'tailwind-styled-components';
import { auth, provider } from '../firebase/firebase'
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';

const login = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [router])

    return (
        <div className='bg-slate-900 w-full h-full'>
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
        </div>
    )
}

export default login

const Wrapper = tw.div`
    h-screen bg-white p-4 max-w-xl mx-auto shadow-lg rounded-2xl
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
