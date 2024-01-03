import Sidebar from "./Sidebar";
import { firestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import React, { useState, useContext, useEffect } from 'react'
import { AuthenticatedUserContext } from '../context/AuthenticatedUserProvider';

const WideLayout = ({ children }) => {

    const { uid, user, setUser } = useContext(AuthenticatedUserContext);

    useEffect(() => {
        const fetchUser = async () => {
            const docRef = doc(firestore, General.users, uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUser(docSnap.data());
            }
        }
        fetchUser();
    }, [uid]);

    return (
        <div className="flex bg-gray-100 font-sans text-gray-900">
            <Sidebar />
            <div className="bg-white flex-col w-full">
                <div className="flex flex-row justify-between w-full sticky top-0 bg-white p-3 border-b-2 z-10 items-center">
                    <div>
                        <h1 className="text-black-300 text-xl font-bold">Hi {user?.title}, Welcome to Footprints Collective</h1>
                        <h2 className="mt-3/4 font-normal">Empowering Sustainable LIfestyles</h2>
                    </div>
                    <div className="flex rounded-full bg-darkGreen pr-5 h-10 items-center border border-darkGreen">
                        <img className="rounded-full bg-white float-left h-10 w-10 bg-contain" src={user?.pic} /> <span className="ml-3 text-white font-bold text-sm self-center line-clamp-1">{user?.title}</span>
                    </div>
                </div>


                <main className="h-max w-full bg-white">{children}</main>
            </div>
        </div>
    );
};

export default WideLayout;