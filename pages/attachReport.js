import React, { useContext, useEffect, useState } from 'react';
import Link from "next/link";
import BaseLayout from "@/components/BaseLayout";
import General from '../constants/General';
import { useRouter } from "next/router";
import Head from "next/head";
import { AuthenticatedUserContext } from '../context/AuthenticatedUserProvider';
import { firestore } from '../firebase';
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';


export default function CreateActivity() {

    const router = useRouter();
    const [fileUrl, setFileUrl] = useState(null);
    const [formInput, updateFormInput] = useState({ title: '', summary: '', category: '', year: '' })

    async function onChange(e) {
        //selecting the first file, which is uploaded
        const file = e.target.files[0];
        try {
            //uploading it to ipfs

            //creating the url to fetch the uploaded file
            //const url = `https://certified.infura-ipfs.io/ipfs/${added.path}`;

            //setFileUrl(url);
            console.log("fileURL Updated")
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <BaseLayout>
            <Head>
                <title>Attach Audit Report</title>
                <meta name="description" content="Offsets History" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>

                <div className='flex justify-between items-center px-3 h-16 border-b border-solid'>
                    <h1 className="font-semibold text-xl">Attach Audit Report</h1>
                    <button onClick={() => router.back()} className="inline-flex items-center w-full px-6 py-3 text-sm font-bold leading-4 text-white bg-darkGreen md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-mediumGreen focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-darkGreen" type="button">Cancel</button>
                </div>


                <div className="w-full p-10 flex items-center justify-center bg-center bg-white bg-no-repeat bg-cover">

                    <div className="w-full bg-white">
                        <div className="grid  gap-0 grid-cols-1">
                            <div className="flex flex-col">
                                <div className="mt-0">
                                    <div className="form">
                                        <label htmlFor="dropzone-file" className="mx-auto cursor-pointer flex w-full flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center" >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-darkGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                                                <path strokeLinecap="round"  strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">
                                                Activity Audit Report
                                            </h2>
                                            <p className="mt-2 text-gray-500 tracking-wide">
                                                Upload or darg &amp; drop your file PDF{" "}
                                            </p>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>

                                        <div className="my-3 space-y-2 w-full text-xs">
                                            <label className="font-semibold text-gray-600 py-2"> Activity Title <abbr title="required">*</abbr>
                                            </label>
                                            <input
                                                placeholder="Enter Activity Title"
                                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-14 px-4"
                                                required="required"
                                                type="text"
                                                name="title"
                                                id="title"
                                                onChange={e => updateFormInput({ ...formInput, title: e.target.value })}
                                            />
                                            <p className="text-red text-xs hidden">
                                                Please fill out this field.
                                            </p>
                                        </div>

                                        <div className="mb-3 space-y-2 w-full text-xs">
                                            <label className="font-semibold text-gray-600 py-2"> Activity Date <abbr title="required">*</abbr>
                                            </label>
                                            <input
                                                placeholder="Enter Activity Date"
                                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-14 px-4"
                                                required="required"
                                                type="date"
                                                name="timestamp"
                                                id="timestamp"
                                                onChange={e => updateFormInput({ ...formInput, timestamp: e.target.value })}
                                            />
                                            <p className="text-red text-xs hidden">
                                                Please fill out this field.
                                            </p>
                                        </div>

                                        <div className="mb-3 space-y-2 w-full text-xs">
                                            <label className="font-semibold text-gray-600 py-2"> Activity Location <abbr title="required">*</abbr>
                                            </label>
                                            <input
                                                placeholder="Enter Activity Location"
                                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-14 px-4"
                                                required="required"
                                                type="text"
                                                name="location"
                                                id="location"
                                                onChange={e => updateFormInput({ ...formInput, location: e.target.value })}
                                            />
                                            <p className="text-red text-xs hidden">
                                                Please fill out this field.
                                            </p>
                                        </div>

                                        <div className="flex-auto w-full mb-1 text-xs space-y-2">
                                            <label className="font-semibold text-gray-600 py-2">
                                                Activity Summary <abbr title="required">*</abbr>
                                            </label>

                                            <textarea
                                                required="required"
                                                name="summary"
                                                id="summary"
                                                className="min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                                                placeholder="Enter Activity Summary"
                                                spellCheck="false"
                                                defaultValue={""}
                                                onChange={e => updateFormInput({ ...formInput, summary: e.target.value })}
                                            />
                                            <p className="text-xs text-gray-400 text-left my-3">
                                                You inserted 0 characters
                                            </p>

                                        </div>

                                        <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">

                                            <button className="mb-2 md:mb-0 bg-darkGreen px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-middleGreen">
                                                Publish
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

