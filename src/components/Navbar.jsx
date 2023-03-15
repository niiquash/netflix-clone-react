import React from 'react'

const style = {
    container: `flex items-center justify-between p-4 z-[100] absolute w-full`,
    netflix: `text-red-600 text-4xl font-bold cursor-pointer`,
    signIn: `text-white pr-4`,
    signUp: `bg-red-600 px-6 py-2 rounded cursor-pointer`
}

const Navbar = () => {
    return (
        <div className={style.container}>
            <h1 className={style.netflix}>NETFLIX</h1>
            <div>
                <button className={style.signIn}>Sign In</button>
                <button className={style.signUp}>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar
