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
            Calculate your carbon footprint, explore recommended initiatives, and offset your emissions, whether you're an individual, a business, or an event organizer. Together, we build climate resilience and reduce our environmental impact.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Sign Up today
          </Button>
        </div>
      </Container>
    </section>
  )
}
