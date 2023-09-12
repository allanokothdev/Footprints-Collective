import Link from "next/link";
import BaseLayout from "@/components/BaseLayout";
import General from '../constants/General';
import React, { useState, useEffect } from 'react'
import Head from "next/head";

const PillFilter = ({ tag, onClick }) => {
    const [isActive, setActive] = useState(false); 
    const toggleClass = () => { 
        console.log(isActive);
        setActive(!isActive);
    };
    
    return (
        <>
            <div
                className={isActive ? "text-white text-center no-underline inline-block cursor-pointer mx-0.5 my-1 px-5 py-2.5 rounded-2xl bg-darkGreen" : "bg-[#ddd] text-black text-center no-underline inline-block cursor-pointer mx-0.5 my-1 px-5 py-2.5 rounded-2xl"}
                onClick={() => {
                    toggleClass();
                    onClick();
                }}
            >
                {tag}
            </div>
        </>
    );
};

export default function Communities() {
    const [filterList, setFilterList] = useState([]); 
    const [renderList, setRenderList] = useState([]); 
    const [tags, setTags] = useState(General.categories); 

    useEffect(() => {
        if (!filterList === undefined || !filterList.length < 1) {
            let filtered = [];
            General.communities.forEach((item) => {
                item.tags.forEach((tag) => {
                    if (filterList.includes(tag)) {
                        if (!filtered.includes(item)) {
                            filtered.push(item);
                        }
                    }
                });
            });
            setRenderList(filtered);
        } else {
            setRenderList(General.communities);
        }
    }, [filterList]);

    return (
        <BaseLayout>
            <Head>
                <title>My Communities</title>
                <meta name="description" content="My Communities" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>

                <div className='flex justify-between items-center px-3 h-16 border-b border-solid'>
                    <h1 className="font-semibold text-xl">My Communities</h1>
                    <button className="inline-flex items-center w-full px-6 py-3 text-sm font-bold leading-4 text-white bg-darkGreen md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-mediumGreen focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-darkGreen" type="button">Create Community</button>
              
                </div>

                {tags.map((data) => { // map and render tags in the pill component
                    return (
                        <PillFilter key={data} tag={data} onClick={() => {
                                if (!filterList.includes(data)) { // if the filter list does not include the clicked pill, then add it
                                    setFilterList((filterList) => [...filterList, data]);
                                } else {
                                    setFilterList(filterList.filter((e) => e !== data)); // if not, remove it
                                }
                            }}
                        />
                    );
                })}

                <ul className="flex flex-1 flex-col gap-y-4 p-3 overflow-auto">
                    {renderList.map(({ id, pic, title, summary, members, location, category }) => (
                        <div key={id} className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-4xl mx-auto border border-white bg-white -z-5">
                            <div className="w-full md:w-1/3 bg-white grid">
                                <img src={pic} alt="tailwind logo" className="rounded-xl aspect-square w-48" />
                            </div>
                            <div className="w-full bg-white flex flex-col space-y-2 p-3">
                                <h3 className="font-black text-gray-800 md:text-2xl text-xl line-clamp-1"> {title}</h3>
                                <p className="md:text-lg text-gray-500 text-base line-clamp-3">{summary} </p>
                                <p className="md:text-lg text-base line-clamp-3">{location} | {category} </p>
                                <div className="flex justify-between item-center">
                                    <div className="flex-1 inline-flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                                        </svg>
                                        <p className="">{members} Members</p>
                                    </div>

                                    <button className="inline-flex hidden items-center w-full px-6 py-3 text-sm font-bold leading-4 text-white bg-darkGreen md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-mediumGreen focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-darkGreen" type="button"></button>
                                </div>

                            </div>
                        </div>

                    ))}
                </ul>
            </div>
        </BaseLayout>
    )
}

