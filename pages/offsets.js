import Link from "next/link";
import BaseLayout from "@/components/BaseLayout";
import General from '../constants/General';
import { useRouter } from "next/router";
import Head from "next/head";
import React, { useContext, useEffect, useState } from 'react';
import { AuthenticatedUserContext } from '../providers';
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';

export default function Offsets() {
    const router = useRouter();

    const { uid } = useContext(AuthenticatedUserContext);
    const [offsetsList, setOffsetsList] = useState([]); // Initial empty array of activities

    useEffect(() => {
        const fetchData = async (uid) => {
            const q = query(collection(firestore, General.offsets), where("tags", "array-contains", uid), orderBy('timestamp', 'desc'));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const objectList = [];
                querySnapshot.forEach((doc) => {
                    objectList.push({
                        id: doc.id,
                        ...doc.data(),
                    });
                });
                setOffsetsList(objectList);
            });
        }
        fetchData(uid);
    }, [uid]);

    return (
        <BaseLayout>
            <Head>
                <title>Carbon Offsets</title>
                <meta name="description" content="Offsets History" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>

                <div className='flex justify-between items-center px-3 h-16 border-b border-solid'>
                    <h1 className="font-semibold text-xl">Your Carbon Offsets</h1>
                    <button className="inline-flex items-center w-full px-6 py-3 text-sm font-bold leading-4 text-white bg-darkGreen md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-mediumGreen focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-darkGreen" type="button">Calculate your Footprint</button>
                </div>

                <div className="max-w-2xl mx-auto py-3 px-3 sm:py-3 sm:px-3 lg:max-w-7xl lg:px-3">
                    <div className="mt-1 grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {General.nfts.map(({ id, pic, title, credit, link, value }) => (
                            <div key={id} className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={pic} className="aspect-square w-full object-cover" alt=" " />
                                </div>

                                <div className="mt-1 p-2">
                                    <h2 className="text-sm line-clamp-1 font-bold">{title}</h2>
                                    <div className="mt-1 flex justify-between items-center">
                                        <p className="text-sm">USD {value}</p>
                                        <button className="py-1 px-3 text-white text-sm border border-darkGreen rounded-xl md:rounded-full focus:ring focus:ring-darkGreen bg-darkGreen hover:bg-mediumGreen transition ease-in-out duration-200" type="button">Purchase</button>

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

