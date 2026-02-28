import { motion } from 'framer-motion'

const TemporalIntelligence = () => {
  return (
    <section className="py-24 bg-primary-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Travel Through <span className="gradient-text">Time</span>
            </h2>
            <p className="text-xl text-text-muted mb-6">
              Seamlessly navigate between past, present, and future with our temporal
              intelligence engine.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <strong className="text-text-light">Historical Analysis</strong>
                  <p className="text-text-muted">
                    Access years of historical data to understand patterns and trends
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <strong className="text-text-light">Predictive Modeling</strong>
                  <p className="text-text-muted">
                    Forecast future outcomes with AI-powered time-series analysis
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <strong className="text-text-light">Real-Time Monitoring</strong>
                  <p className="text-text-muted">
                    Track changes as they happen with sub-second data updates
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary-dark rounded-lg p-8 border border-gray-800">
              {/* Timeline visualization */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">2020</span>
                  <div className="flex-1 mx-4 h-2 bg-primary-dark rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-white to-gray-400"></div>
                  </div>
                  <span className="text-text-light font-semibold">Historical</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">2023</span>
                  <div className="flex-1 mx-4 h-2 bg-primary-dark rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-white to-gray-400"></div>
                  </div>
                  <span className="text-text-light font-semibold">Current</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">2026</span>
                  <div className="flex-1 mx-4 h-2 bg-primary-dark rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-gradient-to-r from-gray-400 to-white animate-pulse"></div>
                  </div>
                  <span className="text-gray-300 font-semibold">Predicted</span>
                </div>
              </div>

              {/* Stats display */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-primary-dark p-4 rounded">
                  <div className="text-2xl font-bold gradient-text">99.9%</div>
                  <div className="text-sm text-text-muted">Accuracy</div>
                </div>
                <div className="bg-primary-dark p-4 rounded">
                  <div className="text-2xl font-bold gradient-text">5+ Years</div>
                  <div className="text-sm text-text-muted">Historical Data</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TemporalIntelligence
