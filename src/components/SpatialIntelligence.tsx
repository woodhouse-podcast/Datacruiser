import { motion } from 'framer-motion'

const SpatialIntelligence = () => {
  return (
    <section className="py-24 bg-secondary-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary-dark rounded-lg p-8 border border-gray-800">
              {/* 3D City/Heatmap visualization placeholder */}
              <div className="aspect-square relative overflow-hidden rounded-lg bg-gradient-to-br from-primary-dark to-secondary-dark">
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-8 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className="border border-white/20"
                        style={{
                          backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.5})`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute inset-4 bg-gray-400/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>

                {/* Overlay text */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm text-text-muted">Live Heatmap View</div>
                  <div className="text-lg font-semibold text-text-light">Global Coverage</div>
                </div>
              </div>

              {/* Coverage stats */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text">150+</div>
                  <div className="text-xs text-text-muted">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">3D</div>
                  <div className="text-xs text-text-muted">Elevation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">Live</div>
                  <div className="text-xs text-text-muted">Tracking</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              <span className="gradient-text">Spatial</span> Intelligence
            </h2>
            <p className="text-xl text-text-muted mb-6">
              Visualize complex geospatial patterns with real-time 3D heatmaps and
              location intelligence.
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
                  <strong className="text-text-light">3D Heatmap Visualization</strong>
                  <p className="text-text-muted">
                    See density patterns and hotspots in stunning 3D clarity
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
                  <strong className="text-text-light">Global Coverage</strong>
                  <p className="text-text-muted">
                    Access location intelligence across 150+ countries worldwide
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
                  <strong className="text-text-light">Geofencing & Alerts</strong>
                  <p className="text-text-muted">
                    Set up custom zones and receive real-time notifications
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SpatialIntelligence
