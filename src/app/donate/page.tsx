import { cn } from '@/lib/utils'
import React from 'react'
import { nomixa } from '../fonts'

const DonatePage = () => {
  return (
    <main>
      <section className="bg-blue-600">
        <div className="flex ">
          <h2>Donate to our program</h2>

          <p>WE NEED YOUR HELP</p>

          <p>Connect with like-minded creatives, access resources, and collaborate on impactful projects</p>
        </div>
      </section>

      <section>
        <div className="container space-y-6">
          <div className='text-center'>
            <h3 className={cn("text-4xl", nomixa.className)}>How to Donate to X3Lab.</h3>
          </div>

          <article className="py-6 px-4 rounded-lg bg-[#D4Fdf1] space-y-4">
            <h2 className={cn(nomixa.className, "text-3xl font-medium")}>Donate in Kind</h2>
            <p className="text-2xl font-light">
              We accept donations in kind. if you&apos;d like to donate laptops, books, or other tech gear for our
              community memebes. Please reach out to us on info@nexascale.org so that we can plan delivery logistics. We
              appreciate the gesture in advance
            </p>
          </article>

          <article className="py-6 px-4 rounded-lg bg-[#ffd3ed] space-y-4">
            <h2 className={cn(nomixa.className, "text-3xl font-medium")}>Donate in Kind</h2>
            <p className="text-2xl font-light">
              We accept donations in kind. if you&apos;d like to donate laptops, books, or other tech gear for our
              community memebes. Please reach out to us on info@nexascale.org so that we can plan delivery logistics. We
              appreciate the gesture in advance
            </p>
          </article>

          <article className="py-6 px-4 rounded-lg bg-[#d9e9ff] space-y-4">
            <h2 className={cn(nomixa.className, "text-3xl font-medium")}>Donate in Kind</h2>
            <p className="text-2xl font-light">
              We accept donations in kind. if you&apos;d like to donate laptops, books, or other tech gear for our
              community memebes. Please reach out to us on info@nexascale.org so that we can plan delivery logistics. We
              appreciate the gesture in advance
            </p>
                  </article>
                  
        </div>
      </section>
    </main>
  )
}

export default DonatePage