import BaseLayout from "@/components/BaseLayout";
import General from '../constants/General';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { AuthenticatedUserContext } from '../context/AuthenticatedUserProvider';
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import Databases from "../constants/Databases";
import { firestore } from "../utils/firebase";

export default function Trends() {
  const router = useRouter();
  const [footprintList, setFootprintList] = useState([]); // Initial empty array of activities

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(firestore, Databases.footprints), orderBy('timestamp', 'desc'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const objectList = [];
        querySnapshot.forEach((doc) => {
          objectList.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setFootprintList(objectList);
      });
    }
    fetchData();
  }, []);
  
  return (
    <BaseLayout>
      <Head>
        <title>Carbon Insights</title>
        <meta name="description" content="Global Carbon Trends" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>

        <div className='flex justify-between items-center px-3 h-16 border-b border-solid'>
          <h1 className="font-semibold text-xl">Global Carbon Insights</h1>
        </div>

        <ul className="flex flex-1 flex-col gap-y-4 pt-3 px-3">
          {General.history.map(({ id, location, timestamp, consumption, food, travel, energy, totalFootprint }) => (

            <div key={id} class="lg:flex shadow rounded-xl border  border-gray-300 p-3 items-center">
              <div class="bg-darkGreen rounded-xl lg:w-2/12 py-12 px-8 block h-full shadow-inner">
                <div class="text-center tracking-wide">
                  <div class="text-white font-semibold text-3xl">Jan</div>
                  <div class="text-white font-semibold text-3xl mt-2 ">2023</div>
                </div>
              </div>

              <div class="w-full lg:w-11/12 xl:w-full ml-3 bg-white py-3 lg:px-2 lg:py-2 tracking-wide">

                <div class="font-bold text-gray-800 text-xl text-center lg:text-left"> {location}</div>
                <div className='flex justify-between items-center pt-1'>
                  <p className='text-sm w-32'>Consumption</p>
                  <div class="w-full bg-gray-300 mx-3 p-0">
                    <div class="w-10/12 bg-darkGreen h-1" />
                  </div>
                  <p className='text-sm text-center line-clamp-1 w-20'>{consumption} CO<sub>2</sub></p>
                </div>
                <div className='flex justify-between items-center pt-1'>
                  <p className='text-sm w-32'>Food</p>
                  <div class="w-full bg-gray-300 mx-3 p-0">
                    <div class="w-10/12 bg-darkGreen h-1" />
                  </div>
                  <p className='text-sm text-center line-clamp-1 w-20'>{food} CO<sub>2</sub></p>
                </div>

                <div className='flex justify-between items-center pt-1'>
                  <p className='text-sm w-32'>Travel</p>
                  <div class="w-full bg-gray-300 mx-3 p-0">
                    <div class="w-10/12 bg-darkGreen h-1" />
                  </div>
                  <p className='text-sm text-center line-clamp-1 w-20'>{travel} CO<sub>2</sub></p>
                </div>

                <div className='flex justify-between items-center pt-1'>
                  <p className='text-sm w-32'>Energy</p>
                  <div class="w-full bg-gray-300 mx-3 p-0">
                    <div class="w-10/12 bg-darkGreen h-1" />
                  </div>
                  <p className='text-sm text-center line-clamp-1 w-20'>{energy} CO<sub>2</sub></p>
                </div>

                <div className='flex justify-between items-center pt-1'>
                  <p className='text-sm w-32'>Total</p>
                  <div class="w-full bg-gray-300 mx-3 p-0">
                    <div class="w-12/12 bg-darkGreen h-1" />
                  </div>
                  <p className='text-sm text-center line-clamp-1 w-20'>{totalFootprint} CO<sub>2</sub></p>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </BaseLayout>
  )
}
