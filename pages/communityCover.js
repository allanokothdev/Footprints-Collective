import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import BaseLayout from "@/components/BaseLayout";
import General from '../constants/General';
import Forest from '../public/forest.jpg';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthenticatedUserContext } from '../context/AuthenticatedUserProvider';
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';

export default function communityCover() {
  const router = useRouter();

  const community = router.query;
  const { user } = useContext(AuthenticatedUserContext);
  const [activities, setActivitiesList] = useState([]); // Initial empty array of activities

  useEffect(() => {
    const fetchData = async (uid) => {
      const q = query(collection(firestore, General.activities), where("tags", "array-contains", uid), orderBy('timestamp', 'desc'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const objectList = [];
        querySnapshot.forEach((doc) => {
          objectList.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setActivitiesList(objectList);
      });
    }
    fetchData(community.id);
  }, [community]);
  
  return (
    <BaseLayout>
      <Head>
        <title>Community Cover</title>
        <meta name="description" content="Carbon Footprint Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <div className='flex justify-between items-center px-3 h-16 border-b border-solid'>
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="./explore" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-darkGreen dark:text-gray-400 dark:hover:text-white">
                <svg className="w-3 h-3 mr-2.5" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Communities
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 6 10">
                  <path  stroke="currentColor"  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  d="m1 9 4-4-4-4" />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  Community Cover
                </span>
              </div>
            </li>
          </ol>

        </div>
        <div className="bg-white block p-3">
          <div className="w-full mx-auto">

            <div className="w-full">
              <div className="w-full h-60 rounded-t-lg bg-cover" style={{ backgroundImage: `url(${General.COVER})` }} />
              <div className="absolute -mt-20 ml-5">
                <div className="bg-gray-200 border border-gray-300 h-36 w-40 rounded-lg shadow-md border-b border-primary" />
              </div>
              <div className='flex justify-between items-center px-3 py-3'>
                <div className='bg-white'></div>
                <button className="inline-flex items-center w-full px-6 py-3 text-sm font-bold leading-4 text-white bg-darkGreen md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-mediumGreen focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-darkGreen" type="button">Request to Join</button>
              </div>
            </div>

            <div className="p-5 flex flex-col">
              <div className="mb-1 font-extrabold">
                Allan Okoth
              </div>
              <div className="mb-4">
                {General.footprintSummary}
              </div>

              <div className='flex flex-row justify-between w-full mb-5'>

                <div className="flex-1 inline-flex items-center justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                  </svg>
                  <p className="">Nairobi, Kenya</p>
                </div>

                <div className="flex-1 inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                  </svg>
                  <p className="">200 Members</p>
                </div>

                <div className="flex-1 inline-flex items-center justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z" fill="#000000" data-path="0.2.0.0.0.1.3.0.0.0.0.0" />
                  </svg>
                  <p className="">4/5 Activities</p>
                </div>

              </div>

              <ul className="flex flex-1 flex-col gap-y-4 overflow-auto">
                {General.activities.map(({ id, pic, title, summary, timestamp, location, status, budget, category, communityTitle, publisher_id }) => (
                  <div className="flex flex-col w-full bg-white rounded shadow-lg">
                    <div
                      className="w-full h-64 bg-top bg-cover rounded-t"
                      style={{
                        backgroundImage:
                          `url(${pic})`
                      }}
                    />
                    <div className="flex flex-col w-full md:flex-row">
                      <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-darkGreen rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                        <div className="md:text-3xl text-white">Jan</div>
                        <div className="md:text-6xl text-white">13</div>
                        <div className="md:text-xl text-white">7 pm</div>
                      </div>
                      <div className="p-4 font-normal text-gray-800 md:w-3/4">
                        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 line-clamp-1">{title}</h1>
                        <p className="leading-normal line-clamp-3">{summary} </p>
                        <div className="flex flex-row items-center mt-4 text-gray-700">
                          <div className="w-1/2">{location}</div>
                          <div className="w-1/2 flex justify-end">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z" fill="" data-path="0.2.0.0.0.1.3.0.0.0.0.0" />
                            </svg>
                            {status}
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                ))}
              </ul>
            </div>
          </div>
        </div>
      </>


    </BaseLayout>
  )
}
