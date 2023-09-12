import Link from "next/link";
import BaseLayout from "@/components/BaseLayout";
import General from '../constants/General';
import Head from "next/head";

export default function Dashboard() {
  return (
    <BaseLayout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Carbon Footprint Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>

        <div className='flex justify-between items-center px-3 h-16 border-b border-solid'>
          <h1 className="font-semibold text-xl">Home</h1>
        </div>

        <ul className="flex flex-1 flex-col gap-y-4 pt-3 px-3">
          {General.onboarding.map(({ id, title, summary, text, link }) => (
            <div key={id} className="inline-flex flex-col space-y-2 items-center flex-1 h-full p-4 bg-darkGreen rounded-xl">
              <p className="w-full text-2xl font-semibold text-white">{title}</p>
              <p className="w-full pb-8 text-sm tracking-wide leading-tight text-white">{summary}
              </p>
              <div className="rounded mr-auto">
                <Link href={link}>
                  <div className="opacity-95 border rounded-3xl border-white px-4">
                    <p className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2">
                      {text}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </BaseLayout>
  )
}
