'use client'

import { motion } from 'framer-motion'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { testimonials } from '@/data/testimonials'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { useState, useRef, useEffect } from "react"

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  const [sliderInstanceRef, setSliderInstanceRef] = useState<any>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Initialize keen-slider
  const [ref, instance] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
    created(s) {
      setSliderInstanceRef(s)
    }
  })

  // Autoplay effect
  useEffect(() => {
    if (isHovered) {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
      return
    }
    autoplayRef.current = setInterval(() => {
      if (sliderInstanceRef) {
        sliderInstanceRef.next()
      }
    }, 3500)
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [sliderInstanceRef, isHovered])

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by
            <span className="block gradient-text">Thousands</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            See what our customers are saying about their experience with ADmyBRAND AI Suite.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition"
            onClick={() => sliderInstanceRef && sliderInstanceRef.prev()}
            aria-label="Previous testimonial"
            style={{ left: '-2.5rem' }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition"
            onClick={() => sliderInstanceRef && sliderInstanceRef.next()}
            aria-label="Next testimonial"
            style={{ right: '-2.5rem' }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <div
            ref={ref}
            className="keen-slider"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {testimonials.map((testimonial, index) => (
              <div className="keen-slider__slide flex justify-center" key={testimonial.id}>
                <Card className="h-full max-w-lg w-full mx-auto">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 