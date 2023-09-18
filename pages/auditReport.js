import React, { useContext, useEffect, useState } from 'react';
import WideLayout from '../components/WideLayout';
import Head from 'next/head'
import { useRouter } from "next/router";
import { useState } from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { AuthenticatedUserContext } from '../context/AuthenticatedUserProvider';
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';

export default function AuditReport() {
    const router = useRouter();
    const { id, pic, title, credit, link, value } = router.query;
    const [fileURL, setFileURL] = useState('http://kenyalaw.org/kl/fileadmin/pdfdownloads/bills/2023/TheHouseofParliament_BicameralRelations_Bill_2023.pdf');

    return (
        <WideLayout>
            <Head>
                <title>Carbon Audit Report</title>
                <meta name="description" content="Program Profile" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <div className='flex justify-between items-center px-3 h-16 border-b border-solid'>
                    <h1 className="font-semibold text-xl">Carbon Audit Report</h1>
                </div>

                <section>
                    <div className="px-4 py-8 mx-auto">
                        <div className="lg:flex lg:-mx-2">
                            <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                                <div className="bg-white border border-white rounded-2xl p-2">
                                    <div className="relative">
                                        <img src={pic} alt=" " className="w-full aspect-square object-cover rounded-2xl" />
                                        <div className="flex-auto sm:ml-5 justify-evenly">
                                            <div className="flex items-center justify-between sm:mt-2">
                                                <div className="flex items-center">
                                                    <div className="flex flex-col pt-2">
                                                        <div className="flex-none text-lg text-gray-800 font-bold leading-none"> {title} </div>
                                                        <div className="flex-auto text-gray-500 pt-2">
                                                            <span className="mr-3">{credit}</span>
                                                            <span className="mr-3 border-r border-gray-200  max-h-0" />
                                                            <span>{value}</span>
                                                        </div>
                                                        <p className="text-sm text-slate-400 pt-2">{credit}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex pt-4 text-sm text-gray-500 items-center mx-auto">
                                                <button className="flex-no-shrink text-sm font-semibold bg-darkGreen hover:bg-middleGreen px-5 py-2 shadow-sm hover:shadow-lg tracking-wider text-white rounded-full transition ease-in duration-300">Purchase</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                                    {fileURL && <> <Viewer fileUrl={fileURL} /> </>}
                                    {!fileURL && <>No PDF</>}
                                </Worker>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </WideLayout>
    )
}

