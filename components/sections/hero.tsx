'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Play, ArrowRight, Sparkles, X } from 'lucide-react'
import { useState } from "react";

export function Hero() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-white/80 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Marketing Platform
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Transform Your
          <span className="block gradient-text">Marketing with AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Create, optimize, and scale your marketing campaigns with intelligent automation. 
          Boost your ROI by up to 300% with AI-driven insights and real-time optimization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button size="lg" variant="gradient" className="group">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="glass" className="group">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm"
        >
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
            No credit card required
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
            14-day free trial
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
            Cancel anytime
          </div>
        </motion.div>
      </div>

      {/* Hero Image/Video Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl"
      >
        <div className="relative">
          <div className="glass-card p-8 rounded-t-3xl">
            <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                {!showPreview ? (
                  <div
                    className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer"
                    onClick={() => setShowPreview(true)}
                    tabIndex={0}
                    role="button"
                    aria-label="Show dashboard preview"
                  >
                    <Play className="w-8 h-8 text-white" />
                  </div>
                ) : (
                  <div className="relative">
                    {/* Replace with your actual video or image */}
                    <video
                      src="/dashboard-preview.mp4"
                      autoPlay
                      loop
                      controls
                      className="rounded-xl max-w-full max-h-full"
                    />
                    <button
                      className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2"
                      onClick={() => setShowPreview(false)}
                      aria-label="Close preview"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                )}
                <p className="text-white/60">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 