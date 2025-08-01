"use client"

import React from 'react'
import ButtonRect from '../ButtonRect';
import { useRouter } from 'next/navigation';


function ProfileNotLogged() {

const router = useRouter()

    return (
        <div className="w-full h-20 flex flex-col justify-center items-center gap-3">
            Not logged in!
            <ButtonRect text="Go to Login" buttonAction={() => router.push("/login")} type='black' />
        </div>
    )
}

export default ProfileNotLogged