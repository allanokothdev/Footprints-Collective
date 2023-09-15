import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image'
import BaseLayout from "@/components/BaseLayout";
import General from '../constants/General';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function activityPage() {
    const router = useRouter();
    
    return (
        <BaseLayout>
            <Head>
                <title>Activity Page</title>
                <meta name="description" content="Activity Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <>
                <div className='flex justify-between items-center px-3 h-16 border-b border-solid'>
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <Link href="./communities" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-darkGreen hover:font-semibold dark:text-gray-400 dark:hover:text-white">
                                <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Communities
                            </Link>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-darkGreen hover:font-semibold md:ml-2 dark:text-gray-400 dark:hover:text-white">Community Page</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Activity page</span>
                            </div>
                        </li>
                    </ol>

                </div>
                <div className="bg-white block p-3">
                    <div className="w-full mx-auto">

                        <div className="flex flex-col w-full bg-white rounded">
                            <div
                                className="w-full h-64 bg-top bg-cover rounded-t"
                                style={{
                                    backgroundImage:
                                        `url(${General.COVER})`
                                }}
                            />
                            <div className="flex flex-col w-full md:flex-row">
                                <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-darkGreen rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                                    <div className="md:text-3xl text-white">Jan</div>
                                    <div className="md:text-6xl text-white">13</div>
                                    <div className="md:text-xl text-white">7 pm</div>
                                </div>
                                <div className="p-4 font-normal text-gray-800 md:w-3/4">
                                    <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 line-clamp-1">Allan</h1>
                                    <p className="leading-normal line-clamp-3">{General.footprintSummary} </p>
                                    <div className="flex flex-row items-center mt-4 text-gray-700">
                                        <div className="w-1/2">Nairobi, Kenya</div>
                                        <div className="w-1/2 flex justify-end text-center items-center">
                                            <svg width="17" height="16" viewBox="0 0 17 16" className='mr-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z" fill="#000000" data-path="0.2.0.0.0.1.3.0.0.0.0.0" />
                                            </svg>
                                            Completed
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between p-4'>

                                <button type="button" className="text-white bg-darkGreen hover:bg-middleGreen focus:ring-4 focus:outline-none focus:ring-lightGreen font-medium rounded-full  text-sm px-10 py-2.5 text-center inline-flex items-center"  >
                                    <div className="text-sm font-semibold">0</div>
                                    <span className=" py-4 text-2xl mx-5 text-gray-100 border-l-2 border-gray-100 font-mono"></span>
                                    <div className="text-sm font-semibold">Comment</div>
                                </button>

                                <button type="button" className="text-white bg-darkGreen hover:bg-middleGreen focus:ring-4 focus:outline-none focus:ring-lightGreen font-medium rounded-full  text-sm px-10 py-2.5 text-center inline-flex items-center"  >
                                    <div className="text-sm font-semibold">0</div>
                                    <span className=" py-4 text-2xl mx-5 text-gray-100 border-l-2 border-gray-100 font-mono"></span>
                                    <div className="text-sm font-semibold">Upvote</div>
                                </button>

                                <button type="button" className="text-white bg-darkGreen hover:bg-middleGreen focus:ring-4 focus:outline-none focus:ring-lightGreen font-medium rounded-full  text-sm px-10 py-2.5 text-center inline-flex items-center"  >
                                    <div className="text-sm font-semibold">0</div>
                                    <span className=" py-4 text-2xl mx-5 text-gray-100 border-l-2 border-gray-100 font-mono"></span>
                                    <div className="text-sm font-semibold">Downvote</div>
                                </button>


                            </div>
                        </div>





                        <ul className="flex flex-1 flex-col gap-y-4 overflow-auto mt-5">
                            {General.comments.map(({ id, pic, title, summary, timestamp, author, authorPic, link  }) => (
                                <div className="flex items-start px-4">
                                    <img
                                        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                                        src={authorPic}
                                        alt="avatar"
                                    />
                                    <div className="">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-lg font-semibold text-gray-900 -mt-1">{author}</h2>
                                            <small className="text-sm text-gray-700">22 hr Ago</small>
                                        </div>
                                        <p className="text-gray-700">{title}</p>
                                        <p className="mt-3 text-gray-700 text-sm">{summary}
                                        </p>
                                    </div>
                                </div>


                                ))}
                        </ul>

                    </div>
                </div>
            </>


        </BaseLayout>
    )
}
