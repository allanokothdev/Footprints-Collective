import Image from 'next/image'

import { Button } from '@/sections/Button'
import { Container } from '@/sections/Container'
import backgroundImage from '@/public/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-darkGreen py-32"
    >
      <div
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 bg-darkGreen"
        width={2347}
        height={1244}
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your books. Buy our software so you can
            feel like you’re doing something productive.
          </p>
          <Button href="../pages/register.jsx" color="white" className="mt-10">
            Get 6 months free
          </Button>
        </div>
      </Container>
    </section>
  )
}
