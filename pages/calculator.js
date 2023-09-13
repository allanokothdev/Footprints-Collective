import Image from 'next/image'
import { Inter } from 'next/font/google'
import BaseLayout from "@/components/BaseLayout";
import General from '../constants/General';
import Footprint from '../public/footprint.jpg';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Calculator() {
    const router = useRouter();
    
    return (
        <BaseLayout>
            <Head>
                <title>Carbon Footprint Calculator</title>
                <meta name="description" content="Carbon Footprint Calculator" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <div className='flex justify-between items-center px-3 h-16 border-b border-solid'>
                    <h1 className="font-semibold text-xl">Carbon Footprint Calculator</h1>
                </div>
                <div className='m-5 rounded-xl'>
                    <div className="w-full rounded-xl bg-cover bg-no-repeat bg-center aspect-[5/2]">
                        <Image className="rounded-xl bg-no-repeat bg-center bg-contain object-cover w-full h-full aspect-[5/2]" src={Footprint} alt="" />
                    </div>

                    <p className="m-auto inset-0 text-xl font-medium leading-normal text-black py-2">
                        {General.footprintSummary}
                    </p>

                    <div className='flex justify-between items-center py-3 border-b border-solid'>
                        <h1 className="font-semibold text-xl">{General.summary}</h1>
                        <button onClick={() => router.push('/selectLocale')} className="inline-flex w-full px-6 py-3 text-sm font-bold leading-4 text-white bg-darkGreen md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-mediumGreen focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-darkGreen" type="button">Calculate your Footprint</button>
                    </div>


                </div>

            </div>

        </BaseLayout>
    )
}
