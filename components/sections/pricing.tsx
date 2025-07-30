'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { pricingTiers } from '@/data/pricing'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'
import { useState } from 'react'

export function Pricing() {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null)

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Simple, Transparent
            <motion.span 
              className="block gradient-text"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              Pricing
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
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
              className="relative flex flex-col h-full"
            >
              {tier.popular && (
                <motion.div 
                  className="absolute -top-4 left-0 right-0 flex justify-center z-10"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    Most Popular
                  </span>
                </motion.div>
              )}
              
              <motion.div
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredTier(tier.id)}
                onHoverEnd={() => setHoveredTier(null)}
              >
                <Card className={`h-full relative overflow-hidden group ${tier.popular ? 'gradient-border' : ''} ${tier.popular ? 'pt-8' : 'pt-4'} flex flex-col`}>
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  <div className="relative z-10 p-6 flex flex-col flex-1">
                    <motion.div 
                      className="text-center mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-2"
                        whileHover={{ color: "#ffffff" }}
                      >
                        {tier.name}
                      </motion.h3>
                      <motion.p 
                        className="text-white/70 mb-6"
                        whileHover={{ color: "rgba(255, 255, 255, 0.8)" }}
                      >
                        {tier.description}
                      </motion.p>
                      <motion.div 
                        className="mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.span 
                          className="text-4xl font-bold text-white"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                          whileHover={{ color: "#ffffff" }}
                        >
                          ${tier.price}
                        </motion.span>
                        <span className="text-white/60">/{tier.period}</span>
                      </motion.div>
                    </motion.div>
                    
                    <motion.ul 
                      className="space-y-4 mb-8 flex-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {tier.features.map((feature, featureIndex) => {
                        const isVisible = hoveredTier === tier.id || featureIndex < 6
                        return (
                          <AnimatePresence key={featureIndex}>
                            {isVisible && (
                              <motion.li 
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20, height: 0 }}
                                animate={{ opacity: 1, x: 0, height: 'auto' }}
                                exit={{ opacity: 0, x: -20, height: 0 }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: featureIndex * 0.05,
                                  ease: "easeInOut"
                                }}
                                whileHover={{ x: 5 }}
                              >
                                <motion.div
                                  whileHover={{ scale: 1.2, rotate: feature.disabled ? 0 : 360 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {feature.disabled ? (
                                    <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                                  ) : (
                                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                                  )}
                                </motion.div>
                                <motion.span 
                                  className={`${feature.disabled ? 'text-white/40 line-through' : 'text-white/80'}`}
                                  whileHover={{ 
                                    color: feature.disabled ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.9)" 
                                  }}
                                >
                                  {feature.text}
                                </motion.span>
                              </motion.li>
                            )}
                          </AnimatePresence>
                        )
                      })}
                    </motion.ul>
                    
                    <motion.div
                      className="mt-auto pt-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="gradient" className="w-full" size="lg">
                        {tier.cta}
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 