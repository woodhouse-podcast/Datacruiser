const Footer = () => {
  const footerLinks = {
    Platform: ['Features', 'Pricing', 'API Documentation', 'Integrations'],
    Resources: ['Blog', 'Case Studies', 'Documentation', 'Support'],
    Company: ['About', 'Careers', 'Contact', 'Partners'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'],
  }

  return (
    <footer className="bg-secondary-dark border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-text-light font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-muted hover:text-text-light transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-text-light font-semibold mb-2">
              Stay updated
            </h3>
            <p className="text-text-muted text-sm mb-4">
              Get the latest insights on spatio-temporal intelligence
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-primary-dark text-text-light rounded-button border border-gray-700 focus:outline-none focus:border-white"
              />
              <button className="px-6 py-2 bg-white text-black rounded-button hover:bg-gray-200 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-text-muted text-sm mb-4 md:mb-0">
            © 2026 DataCruiser. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-text-muted hover:text-text-light transition-colors duration-200 text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
