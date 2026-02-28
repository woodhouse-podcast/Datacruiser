import { motion } from 'framer-motion'
import GlobeBackground from './GlobeBackground'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark">
      {/* Globe Background */}
      <GlobeBackground />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Understand Your World{' '}
            <span className="gradient-text">Through Time</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Harness the power of time-series and spatial intelligence.{' '}
            <span className="text-text-light">Predict. Analyze. Transform.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="px-8 py-4 bg-white text-black rounded-button hover:bg-gray-200 transition-all duration-200 transform hover:scale-105 font-semibold text-lg btn-glow">
              Request Demo
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-button hover:bg-white/20 transition-all duration-200 font-semibold text-lg hover:shadow-lg">
              Learn More
            </button>
          </motion.div>

          {/* Stats or trust indicators */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">150+</div>
              <div className="text-text-muted">Countries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Trillions</div>
              <div className="text-text-muted">Data Points Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">&lt;1s</div>
              <div className="text-text-muted">Real-Time Updates</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-muted rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
