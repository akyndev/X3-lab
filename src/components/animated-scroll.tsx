'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'

const texts = [
  { id: 1, text: 'First Text', image: '/img1.jpg' },
  { id: 2, text: 'Second Text', image: '/img2.jpg' },
  { id: 3, text: 'Third Text', image: '/img3.jpg' },
]

export default function ScrollImageText() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const imageIndex = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 2])

  return (
    <div className="relative">
      {/* Fixed image overlay */}
      <motion.div className="fixed top-0 left-0 w-full h-[50vh] z-0">
        {texts.map((_, i) => (
        <motion.div  key={i} className="bg-gray-100 rounded-lg overflow-hidden absolute inset-0">
          <div>
            <Image
              src={"/the-boys.png"}
              alt="the boys"
              width={400}
              height={400}
            />
          </div>
          <div className="p-6">Our Purpose</div>
        </motion.div>
        ))}
      </motion.div>

      {/* Scrolling text blocks */}
      <div ref={containerRef} className="relative z-10 space-y-32 pt-[60vh] pb-[100vh]">
        {texts.map((item) => (
          <div key={item.id} className="text-3xl font-bold text-center">
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}