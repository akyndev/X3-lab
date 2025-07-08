"use client"

import React from "react"
import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import { DotButton, useDotButton } from "./carousel-dot-btn"
import { cn } from "@/lib/utils"

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  return (
    <div className="">
      <div className="embla overflow-hidden">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((_, index) => (
              <div className="basis-full shrink-0 min-w-0" key={index}>
                <div className="">{_}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                "border border-[#1B5299] w-4 h-4 rounded-full transition-colors duration-300",
                {
                  "bg-[#1B5299]" : selectedIndex === index
                }
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
