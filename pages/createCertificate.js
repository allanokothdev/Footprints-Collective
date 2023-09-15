import React, { useContext, useEffect, useState } from 'react';
import Link from "next/link";
import BaseLayout from "@/components/BaseLayout";
import General from '../constants/General';
import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useContext } from "react";


export default function CreateCertificate() {

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
                <title>Create Community</title>
                <meta name="description" content="Offsets History" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>

                <div className='flex justify-between items-center px-3 h-16 border-b border-solid'>
                    <h1 className="font-semibold text-xl">Create Activity</h1>
                    <button onClick={() => router.back()} className="inline-flex items-center w-full px-6 py-3 text-sm font-bold leading-4 text-white bg-darkGreen md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-mediumGreen focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-darkGreen" type="button">Cancel</button>
                </div>



                <div className="w-full p-10 flex items-center justify-center bg-center bg-white bg-no-repeat bg-cover">

                    <div className="w-full bg-white">
                        <div className="grid  gap-0 grid-cols-1">
                            <div className="flex flex-col">
                                <div className="mt-0">
                                    <div className="form">
                                        <div className="md:space-y-0 mb-3">

                                            <div className="flex items-center py-2">
                                                <div className="w-60 h-40 mr-4 flex-none rounded-xl border overflow-hidden">
                                                    <img
                                                        className="w-60 h-40 mr-4 object-cover bg-gray-200"
                                                        src={fileUrl}
                                                        alt=" "
                                                    />
                                                </div>
                                                <label className="cursor-pointer ">
                                                    <span className="focus:outline-none text-white text py-4 px-6 rounded-full bg-darkGreen hover:bg-middleGreen hover:shadow-lg">
                                                        Upload Activity Picture
                                                    </span>
                                                    <input type="file" className="hidden" accept="image/*" onChange={onChange} />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="mb-3 space-y-2 w-full text-xs">
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

