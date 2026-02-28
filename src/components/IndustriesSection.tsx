import { motion } from 'framer-motion'

const industries = [
  {
    name: 'Transport & Mobility',
    description: 'Optimize routes, predict demand, and enhance passenger experience',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    useCases: ['Fleet optimization', 'Demand forecasting', 'Route planning'],
  },
  {
    name: 'Retail & F&B',
    description: 'Understand foot traffic, optimize locations, and predict trends',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    useCases: ['Site selection', 'Customer behavior', 'Inventory optimization'],
  },
  {
    name: 'Government & Councils',
    description: 'Data-driven urban planning and public service optimization',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    useCases: ['Urban planning', 'Emergency response', 'Resource allocation'],
  },
  {
    name: 'IoT & Sensors',
    description: 'Turn sensor data into actionable spatio-temporal intelligence',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    useCases: ['Sensor fusion', 'Anomaly detection', 'Predictive maintenance'],
  },
]

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-primary-dark">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            Built for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            From transport to retail, government to IoT - DataCruiser powers intelligence
            across diverse sectors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className="bg-secondary-dark p-8 rounded-lg border border-gray-800 hover:border-white transition-all duration-300 group card-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start mb-6">
                <div className="text-white mr-4 group-hover:text-gray-300 transition-colors duration-300">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-light mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-text-muted">{industry.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {industry.useCases.map((useCase) => (
                  <span
                    key={useCase}
                    className="px-3 py-1 bg-primary-dark text-text-muted text-sm rounded-button border border-gray-800"
                  >
                    {useCase}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors duration-200 font-semibold inline-flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
