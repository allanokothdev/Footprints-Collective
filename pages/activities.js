import React, { useContext, useEffect, useState } from 'react';
import BaseLayout from "@/components/BaseLayout";
import General from '../constants/General';
import { useRouter } from "next/router";
import Head from "next/head";
import { firestore } from '../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Databases from '../constants/Databases';

export default function Activities() {
    const router = useRouter();
    const [activitiesList, setActivitiesList] = useState([]); // Initial empty array of activities

    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(firestore, Databases.activities), orderBy('timestamp', 'desc'));
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
        fetchData();
    }, []);

    return (
        <BaseLayout>
            <Head>
                <title>Audit Activities</title>
                <meta name="description" content="Voluntary Carbon Market" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>

                <div className='flex justify-between items-center px-3 h-16 border-b border-solid'>
                    <h1 className="font-semibold text-xl">Audit Activities</h1>
                    <button className="inline-flex items-center w-full px-6 py-3 text-sm font-bold leading-4 text-white bg-darkGreen md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-mediumGreen focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-darkGreen" type="button">Calculate your Footprint</button>
                </div>

                <div className="max-w-2xl mx-auto py-3 px-3 sm:py-3 sm:px-3 lg:max-w-7xl lg:px-3">
                    <div className="mt-1 grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {General.activities.map(({ id, pic, title, location }) => (
                            <div key={id} className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={pic} className="aspect-square w-full object-cover" alt=" " />

                                    <button className="py-1 items-center px-3 text-white text-sm border border-white rounded-xl md:rounded-full focus:ring focus:ring-white bg-opacity-50 transition ease-in-out duration-200" type="button">View Audit Report</button>

                                </div>

                                <div className="mt-1 p-2">
                                    <h2 className="text-sm font-bold line-clamp-1">{title}</h2>
                                    <div className="mt-1 flex justify-between items-center">
                                        <p className="text-sm">{location}</p>
                                        <button onClick={() => router.push('/attachReport')} className="py-1 px-3 text-white text-sm border border-darkGreen rounded-xl md:rounded-full focus:ring focus:ring-darkGreen bg-darkGreen hover:bg-mediumGreen transition ease-in-out duration-200" type="button">Attach Report</button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

