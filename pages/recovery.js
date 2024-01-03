import React, { useState } from 'react'
import General from '../constants/General'
import Link from 'next/link'

import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const recovery = () => {

    const [formInput, updateFormInput] = useState({ email: '' });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const validate = async () => {

        let isValid = true;
        if (!formInput.email) {
            toast.error('Please input email');
            isValid = false;
        }

        if (isValid) {
            setLoading(true);
            console.log(formInput);
            resetAccount(formInput.email);
        }
    };

    const resetAccount = (email) => {
        setTimeout(async () => {
            try {
                sendPasswordResetEmail(auth, email)
                    .then(async (userCredential) => {
                        setLoading(false);
                        router.push('/login')

                    }).catch((error) => {
                        setLoading(false);
                        toast.error(error.message);
                        console.log(error.message)

                    });
            } catch (error) {
                setLoading(false);
                toast.error(error.message);
                console.log('Error')

            }
        }, 3000);
    };


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
                            <input aria-label='' type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" autofocus="" autoComplete="email" required="required" onChange={e => updateFormInput({ ...formInput, email: e.target.value })} />
                        </div>
                        <button disabled={loading} type="submit" onClick={validate} className="w-full block bg-darkGreen hover:bg-mediumGreen focus:bg-mediumGreen text-white font-semibold rounded-lg px-4 py-3 mt-6"  > Recover account </button>
                    </form>
                    <ToastContainer />
                    <p className="mt-3">
                        Go back to {" "}
                        <Link href="/login" className="text-darkGreen hover:text-darkGreen font-semibold" >Login</Link>
                    </p>
                </div>
            </div>
        </section>

    )
}

export default recovery