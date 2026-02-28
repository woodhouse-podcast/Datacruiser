import { motion } from 'framer-motion'

const EnterpriseSection = () => {
  const stats = [
    { value: 'Trillions', label: 'Data Points Processed Daily' },
    { value: '150+', label: 'Countries with Global Deployments' },
    { value: '<1s', label: 'Sub-Second Real-Time Updates' },
    { value: '99.99%', label: 'Platform Uptime SLA' },
  ]

  const certifications = [
    'ISO 27001',
    'SOC 2 Type II',
    'GDPR Compliant',
    'HIPAA Ready',
  ]

  return (
    <section className="py-24 bg-secondary-dark">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            Enterprise-Ready <span className="gradient-text">Infrastructure</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Built for scale, security, and performance. Trusted by organizations worldwide
            to handle mission-critical intelligence operations.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-5xl font-bold gradient-text mb-3">
                {stat.value}
              </div>
              <div className="text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Security & Compliance */}
        <motion.div
          className="bg-primary-dark rounded-lg p-8 md:p-12 border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-text-light mb-4">
                Security & Compliance
              </h3>
              <p className="text-text-muted mb-6">
                Enterprise-grade security with comprehensive compliance certifications
                to meet your organization's requirements.
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 bg-secondary-dark border border-gray-600 text-text-light rounded-button text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <div>
                  <strong className="text-text-light">End-to-End Encryption</strong>
                  <p className="text-text-muted text-sm">
                    Data encrypted in transit and at rest
                  </p>
                </div>
              </div>

              <div className="flex items-start">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <div>
                  <strong className="text-text-light">Role-Based Access Control</strong>
                  <p className="text-text-muted text-sm">
                    Granular permissions and audit logging
                  </p>
                </div>
              </div>

              <div className="flex items-start">
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
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
                <div>
                  <strong className="text-text-light">On-Premise Deployment</strong>
                  <p className="text-text-muted text-sm">
                    Cloud, hybrid, or fully on-premise options
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnterpriseSection
