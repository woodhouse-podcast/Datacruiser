import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="py-24 bg-primary-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl top-0 right-0"></div>
        <div className="absolute w-96 h-96 bg-gray-500/5 rounded-full blur-3xl bottom-0 left-0"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
            Make Time Work <span className="gradient-text">for You</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-2xl mx-auto">
            Join thousands of organizations leveraging time-series and spatial intelligence
            to transform their operations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-4 bg-white text-black rounded-button hover:bg-gray-200 transition-all duration-200 transform hover:scale-105 font-semibold text-lg">
              Request Demo
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-button hover:bg-gray-500/5 transition-all duration-200 font-semibold text-lg">
              Contact Sales
            </button>
          </div>

          {/* Additional benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <svg
                className="w-8 h-8 text-white mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <div className="text-text-light font-semibold mb-2">Quick Setup</div>
              <div className="text-text-muted text-sm">
                Start analyzing in minutes with our API-first architecture
              </div>
            </div>

            <div className="text-center">
              <svg
                className="w-8 h-8 text-white mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <div className="text-text-light font-semibold mb-2">24/7 Support</div>
              <div className="text-text-muted text-sm">
                Enterprise support with dedicated success managers
              </div>
            </div>

            <div className="text-center">
              <svg
                className="w-8 h-8 text-white mx-auto mb-3"
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
              <div className="text-text-light font-semibold mb-2">Secure & Compliant</div>
              <div className="text-text-muted text-sm">
                Enterprise-grade security with SOC 2 and ISO 27001 certification
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
