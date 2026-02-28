import { motion } from 'framer-motion'

const ValueProposition = () => {
  const capabilities = [
    {
      title: 'Uncover Insights',
      description: 'Discover hidden patterns in your data that traditional tools miss',
    },
    {
      title: 'Understand Drivers',
      description: 'Identify the key factors influencing behavior and outcomes',
    },
    {
      title: 'Fuse Datasets',
      description: 'Combine disparate data sources into unified intelligence',
    },
    {
      title: 'Predict Outcomes',
      description: 'Forecast future trends with AI-powered temporal analysis',
    },
  ]

  return (
    <section id="solutions" className="py-24 bg-secondary-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Visual diagram */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Stack diagram showing DataCruiser as intelligence layer */}
              <div className="space-y-4">
                {/* DataCruiser Intelligence Layer */}
                <div className="bg-white p-6 rounded-lg border-2 border-white shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black mb-2">
                      DataCruiser Intelligence Layer
                    </div>
                    <div className="text-sm text-gray-700">
                      Spatio-Temporal Analysis • Predictions • Insights
                    </div>
                  </div>
                </div>

                {/* Connection arrow */}
                <div className="flex justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>

                {/* Existing platforms */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-dark p-4 rounded border border-gray-800 text-center">
                    <div className="text-text-light font-semibold">Your CRM</div>
                  </div>
                  <div className="bg-primary-dark p-4 rounded border border-gray-800 text-center">
                    <div className="text-text-light font-semibold">Your ERP</div>
                  </div>
                  <div className="bg-primary-dark p-4 rounded border border-gray-800 text-center">
                    <div className="text-text-light font-semibold">Your IoT</div>
                  </div>
                  <div className="bg-primary-dark p-4 rounded border border-gray-800 text-center">
                    <div className="text-text-light font-semibold">Your Data</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              An Intelligence Layer on{' '}
              <span className="gradient-text">Existing Systems</span>
            </h2>
            <p className="text-xl text-text-muted mb-6">
              We don't replace your tools. We make them smarter.
            </p>
            <p className="text-text-muted mb-8">
              DataCruiser sits on top of your existing infrastructure, enriching your data
              with spatio-temporal intelligence. No rip-and-replace. No data migration. Just
              instant insights layered onto what you already have.
            </p>

            <div className="bg-primary-dark p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-text-light mb-4">
                API-First Architecture
              </h3>
              <p className="text-text-muted text-sm">
                Integrate seamlessly with REST APIs, webhooks, or direct database connections.
                Start analyzing in minutes, not months.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Capabilities grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className="bg-primary-dark p-6 rounded-lg border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-white font-bold mb-2">{capability.title}</div>
              <p className="text-text-muted text-sm">{capability.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ValueProposition
