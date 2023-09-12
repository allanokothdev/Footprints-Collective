import React from 'react'
import General from '../constants/General'
import Link from 'next/link'

const recovery = () => {
    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-darkGreen hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src={General.Footprint} alt="" className="w-full h-full object-cover" />
            </div>
            <div
                className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
            >
                <div className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                        Recover your account
                    </h1>
                    <form className="mt-6" action="#" method="POST">
                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" autofocus="" autoComplete="email" required="" />
                        </div>
                        <button type="submit" className="w-full block bg-darkGreen hover:bg-mediumGreen focus:bg-mediumGreen text-white font-semibold rounded-lg px-4 py-3 mt-6"  > Recover account </button>
                    </form>
                    <hr className="my-6 border-gray-300 w-full" />
                    <p className="mt-8">
                        Login{" "}
                        <Link href="/register" className="text-darkGreen hover:text-darkGreen font-semibold" >  Login </Link>
                    </p>
                </div>
            </div>
        </section>

    )
}

export default recovery