'use client'

import { motion } from 'framer-motion'
import { features } from '@/data/features'
import { Card } from '@/components/ui/card'
import { Sparkles, Target, TrendingUp, Layers, BarChart3, TestTube } from 'lucide-react'

const iconMap = {
  Sparkles,
  Target,
  TrendingUp,
  Layers,
  BarChart3,
  TestTube,
}

export function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Powerful Features for
            <motion.span 
              className="block gradient-text"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              Modern Marketing
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Everything you need to create, optimize, and scale your marketing campaigns with AI-powered intelligence.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={feature.id}
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
                className="flex flex-col h-full"
              >
                <motion.div
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                  className="flex flex-col h-full"
                >
                  <Card className="h-full text-center hover:scale-105 transition-all duration-300 relative overflow-hidden group flex flex-col">
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    
                    <div className="relative z-10 p-6 flex flex-col flex-1">
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.div
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 360,
                            transition: { duration: 0.6 }
                          }}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>
                      </motion.div>
                      
                      <motion.h3 
                        className="text-xl font-semibold text-white mb-4"
                        whileHover={{ color: "#ffffff" }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-white/70 leading-relaxed"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.description}
                      </motion.p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 