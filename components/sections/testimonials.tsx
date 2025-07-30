'use client'

import { motion, AnimatePresence } from 'framer-motion'
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Loved by
            <motion.span 
              className="block gradient-text"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              Thousands
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            See what our customers are saying about their experience with ADmyBRAND AI Suite.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Enhanced Navigation Arrows */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300"
            onClick={() => sliderInstanceRef && sliderInstanceRef.prev()}
            aria-label="Previous testimonial"
            style={{ left: '-2.5rem' }}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg 
              width="24" 
              height="24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              whileHover={{ x: -2 }}
              transition={{ duration: 0.2 }}
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </motion.svg>
          </motion.button>
          
          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300"
            onClick={() => sliderInstanceRef && sliderInstanceRef.next()}
            aria-label="Next testimonial"
            style={{ right: '-2.5rem' }}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg 
              width="24" 
              height="24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </motion.svg>
          </motion.button>

          <div
            ref={ref}
            className="keen-slider"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {testimonials.map((testimonial, index) => (
              <div className="keen-slider__slide flex justify-center" key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="h-full max-w-lg w-full mx-auto relative overflow-hidden group">
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    
                    <div className="relative z-10 p-6">
                      <motion.div 
                        className="flex items-center mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                          >
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      <motion.p 
                        className="text-white/80 mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ color: "rgba(255, 255, 255, 0.9)" }}
                      >
                        "{testimonial.content}"
                      </motion.p>
                      
                      <motion.div 
                        className="flex items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <motion.img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div>
                          <motion.h4 
                            className="text-white font-semibold"
                            whileHover={{ color: "#ffffff" }}
                          >
                            {testimonial.name}
                          </motion.h4>
                          <motion.p 
                            className="text-white/60 text-sm"
                            whileHover={{ color: "rgba(255, 255, 255, 0.8)" }}
                          >
                            {testimonial.role} at {testimonial.company}
                          </motion.p>
                        </div>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 