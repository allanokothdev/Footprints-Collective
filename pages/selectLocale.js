import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import BaseLayout from "@/components/BaseLayout";
import General from '../constants/General';
import Footprint from '../public/footprint.jpg';
import Image from 'next/image';

const selectLocale = () => {
  const router = useRouter();
  const [formInput, updateFormInput] = useState({ title: '', type: '', start: '', end: '', country: '' })
  
  return (
    <BaseLayout>
      <Head>
        <title>Select Locale</title>
        <meta name="description" content="Offsets History" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>

        <div className='flex justify-between items-center px-3 h-16 border-b border-solid'>
          <h1 className="font-semibold text-xl">Select Locale</h1>
          <button onClick={() => router.back()} className="inline-flex items-center w-full px-6 py-3 text-sm font-bold leading-4 text-white bg-darkGreen md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-mediumGreen focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-darkGreen" type="button">Cancel</button>
        </div>



        <div className="w-full p-10 flex items-center justify-center bg-center bg-white bg-no-repeat bg-cover">

          <div className="w-full bg-white">
            <div className="grid  gap-0 grid-cols-1">
              <div className="flex flex-col">
                <div className="mt-0">

                  <div className="w-full rounded-xl bg-cover bg-no-repeat bg-center aspect-[5/1]">
                    <Image className="rounded-xl bg-no-repeat bg-center bg-cover object-cover w-full h-full aspect-[5/1]" src={Footprint} alt="" />
                  </div>
                  <div className="form mt-4">

                    <div>
                      <label className="block text-gray-700">Enter Person/Business/Event Title</label>
                      <input aria-label='' type="text" name="title" id="title" placeholder="Enter Title" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" autofocus="" autoComplete="title" required="required" onChange={e => updateFormInput({ ...formInput, title: e.target.value })} />
                    </div>

                    <div className='mt-4 flex flex-row justify-between'>
                      <div className='w-full mx-2'>
                        <label for="End Date" className="block text-sm font-bold text-gray-500 mb-1 dark:text-gray-700">Start Date</label>
                        <input type="date" placeholder="John Doe" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                      </div>
                      <div className='w-full mx-2'>
                        <label for="End Date" className="block text-sm font-bold text-gray-500 mb-1 dark:text-gray-700">End Date</label>
                        <input type="date" placeholder="John Doe" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                      </div>

                    </div>

                    <div className="mt-4">
                      <label className="block text-gray-700">Select Type</label>
                      <select className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" required="required" name="type" id="type" onChange={e => updateFormInput({ ...formInput, type: e.target.value })}>
                        <option value="Business">Business</option>
                        <option value="Event">Event</option>
                        <option value="Person">Person</option>
                      </select>
                    </div>

                    <div className="mt-4">
                      <label className="block text-gray-700">Select Country</label>
                      <select className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" required="required" name="type" id="type" onChange={e => updateFormInput({ ...formInput, type: e.target.value })}>
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

                    <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">

                      <button onClick={() => router.push('/individualSurvey')} className="mb-2 md:mb-0 bg-darkGreen px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-middleGreen">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </BaseLayout>
  )
}

export default selectLocale