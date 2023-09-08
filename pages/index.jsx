import Head from 'next/head'

import { CallToAction } from '@/sections/CallToAction'
import { Faqs } from '@/sections/Faqs'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
import { Hero } from '@/sections/Hero'
import { Pricing } from '@/sections/Pricing'
import { PrimaryFeatures } from '@/sections/PrimaryFeatures'
import { SecondaryFeatures } from '@/sections/SecondaryFeatures'
import { Testimonials } from '@/sections/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Footprints Collective</title>
        <meta name="description" content="Footprints Collective" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
