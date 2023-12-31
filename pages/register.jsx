import React, { useContext, useEffect, useState } from 'react';
import General from '../constants/General'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth, firestore } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, setDoc } from 'firebase/firestore';

import { ethers } from 'ethers';

const Register = () => {

  const [formInput, updateFormInput] = useState({ title: '', country: '', email: '', password: '', channel: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validate = () => {

    let isValid = true;

    if (!formInput.title) {
      toast.error('Please input Name');
      isValid = false;
    }

    if (!formInput.country) {
      toast.error('Please select country');
      isValid = false;
    }

    if (!formInput.channel) {
      toast.error('Please select channel');
      isValid = false;
    }

    if (!formInput.email) {
      toast.error('Please input email');
      isValid = false;
    } else if (!formInput.email.match(/\S+@\S+\.\S+/)) {
      toast.error('Please input valid email');
      isValid = false;
    }

    if (!formInput.password) {
      toast.error('Please input password');
      isValid = false;
    } else if (formInput.password.length < 5) {
      toast.error('Min password length of 5');
      isValid = false;
    }

    if (isValid) {
      setLoading(true);
      signUp(formInput.title, formInput.country, formInput.channel, formInput.email, formInput.password);
    }
  }

  const signUp = async (title, country, channel, email, password) => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {

          const wallet = ethers.Wallet.createRandom();

          const user = {
            id: userCredential.user.uid,
            pic: General.PIC,
            title: title,
            address: wallet.address,
            privateKey: wallet.privateKey,
            email: email,
            role: 'ADMIN',
            offsets: 0,
            footprint: 0,
            country: country,
            channel: channel,
            token: userCredential.user.uid,
            created_at: Date.now(),
            last_logged_in: Date.now(),
          };

          await setDoc(doc(firestore, General.users, userCredential.user.uid), user).then(function () {
            sendEmailVerification(auth.currentUser).then(() => {
              console.log('Send Email Verifications');
              toast.success('Check your Email to verify your account');
              setLoading(false);
              router.push('/login');
            });
          }).catch((error) => {
            setLoading(false);
            console.log("Error processing transaction:", error);
            toast.error(error.message);
          });

        }).catch((error) => {
          setLoading(false);
          console.log("Error processing transaction:", error);
          toast.error(error.message);

        });
    } catch (error) {
      setLoading(false);
      toast.error(error.message);

    }
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
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Get started for free
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Already registered?{' '}
              <Link
                href="/login"
                className="font-medium text-darkGreen hover:underline"
              >
                Sign in
              </Link>{' '}
              to your account.
            </p>
          </div>
          <form className="mt-6" action="#" method="POST">
             <div>
              <label className="block text-gray-700">Name</label>
              <input aria-label='' type="text" name="title" id="title" placeholder="Enter Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" autofocus="" autoComplete="title" required="required" onChange={e => updateFormInput({ ...formInput, title: e.target.value })} />
            </div>
            <div className='mt-4'>
              <label className="block text-gray-700">Email Address</label>
              <input aria-label='' type="email" name="" id="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" autofocus="" autoComplete="email" required="required" onChange={e => updateFormInput({ ...formInput, email: e.target.value })} />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input aria-label='' type="password" name="password" id="" placeholder="Enter Password" minLength={6} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" autoComplete='password' required="required" onChange={e => updateFormInput({ ...formInput, password: e.target.value })} />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Country</label>
              <select className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" required="required" name="country" id="country" onChange={e => updateFormInput({ ...formInput, country: e.target.value })}>
                <option value="Belgium">Belgium</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Kenya">Kenya</option>
                <option value="Mexico">Mexico</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Norway">Norway</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Spain">Spain</option>
                <option value="South Africa">South Africa</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Uganda">Uganda</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
              </select>
             </div>
            <div className="mt-4">
              <label className="block text-gray-700">How did you hear about us?</label>
              <select className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" required="required" name="channel" id="channel" onChange={e => updateFormInput({ ...formInput, channel: e.target.value })}>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Twitter">Twitter</option>
              </select>
            </div>
            <button disabled={loading} onClick={validate} type="submit" className="w-full block bg-darkGreen hover:bg-mediumGreen focus:bg-mediumGreen text-white font-semibold rounded-lg px-4 py-3 mt-6"  > Register </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>

  )
}

export default Register