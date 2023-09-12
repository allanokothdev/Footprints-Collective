import React, { useState } from 'react'
import General from '../constants/General'
import Link from 'next/link'

import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { auth, firestore } from '../utils/firebase.js';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, updateDoc } from 'firebase/firestore';

const Login = () => {

  const [formInput, updateFormInput] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const googleSignIn = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    signInWithPopup(auth, provider)
      .then((result) => {
        setLoading(false);
        router.push("/dashboard");
      }).catch((error) => {
        setLoading(false);
        toast.error(error.message);
        console.log('Error')
      });
  };

  const validate = async () => {

    let isValid = true;
    if (!formInput.email) {
      toast.error('Please input email');
      isValid = false;
    }
    if (!formInput.password) {
      toast.error('Please input password');
      isValid = false;
    }
    if (isValid) {
      setLoading(true);
      console.log(formInput);
      signIn(formInput.email, formInput.password);
    }
  };

  const signIn = (email, password) => {
    setTimeout(async () => {
      try {
        await setPersistence(auth, browserLocalPersistence);
        signInWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const userRef = doc(firestore, General.users, userCredential.user.uid);
            await updateDoc(userRef, {
              last_logged_in: Date.now(),
            }).then(function () {
              setLoading(false);
              router.push("/dashboard")
              toast.success('Logged In');
            }).catch((error) => {
              setLoading(false);
              toast.error(error.message);
              console.log(error.message)
            });
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
            Log in to your account
          </h1>
          <form className="mt-6" action="#" method="POST">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input aria-label='' type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" autoFocus="" autoComplete="email" required="required" onChange={e => updateFormInput({ ...formInput, email: e.target.value })} />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input aria-label='' type="password" name="" id="" placeholder="Enter Password" minLength={6} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" autoComplete='password' required="required" onChange={e => updateFormInput({ ...formInput, password: e.target.value })} />
            </div>
            <div className="text-right mt-2">
              <Link href="/recovery" className="text-sm font-semibold text-gray-700 hover:text-darkGreen focus:text-darkGreen" > Forgot Password? </Link>
            </div>
            <button disabled={loading} onClick={validate} type="submit" className="w-full block bg-darkGreen hover:bg-mediumGreen focus:bg-mediumGreen text-white font-semibold rounded-lg px-4 py-3 mt-6"  > Log In </button>
          </form>
          <ToastContainer />
          <hr className="my-6 border-gray-300 w-full" />
          <button disabled={loading} onClick={googleSignIn} type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300" >
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48" >
                <defs>
                  <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                <path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>
              <span className="ml-4">Log in with Google</span>
            </div>
          </button>
          <p className="mt-8">
            Need an account?{" "}
            <Link href="/register" className="text-darkGreen hover:text-darkGreen font-semibold" >  Create an account </Link>
          </p>
        </div>
      </div>
    </section>

  )
}

export default Login