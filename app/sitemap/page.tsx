import Link from 'next/link'

export default function Sitemap() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
      
      <div className="grid gap-8">
        {/* Main Pages */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Main Pages</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li><Link href="/about" className="text-blue-600 hover:underline">About</Link></li>
            <li><Link href="/contact" className="text-blue-600 hover:underline">Contact</Link></li>
          </ul>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          
          {/* AI & Technology Services */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">AI & Technology Services</h3>
            <ul className="space-y-2 ml-4">
              <li>
                <Link href="/services/ai-agentic-solutions" className="text-blue-600 hover:underline">
                  AI & Agentic Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/ai-agents" className="text-blue-600 hover:underline">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integrations" className="text-blue-600 hover:underline">
                  AI Integrations
                </Link>
              </li>
              <li>
                <Link href="/services/ai-process-automation" className="text-blue-600 hover:underline">
                  AI Process Automation
                </Link>
              </li>
              <li>
                <Link href="/services/custom-ai-solutions" className="text-blue-600 hover:underline">
                  Custom AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Services */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Business Services</h3>
            <ul className="space-y-2 ml-4">
              <li>
                <Link href="/services/customer-care" className="text-blue-600 hover:underline">
                  Customer Care
                </Link>
              </li>
              <li>
                <Link href="/services/customer-service" className="text-blue-600 hover:underline">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="/services/deployment" className="text-blue-600 hover:underline">
                  Deployment
                </Link>
              </li>
              <li>
                <Link href="/services/healthcare" className="text-blue-600 hover:underline">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/services/insurance" className="text-blue-600 hover:underline">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/services/office-automation" className="text-blue-600 hover:underline">
                  Office Automation
                </Link>
              </li>
              <li>
                <Link href="/services/property-management" className="text-blue-600 hover:underline">
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="/services/retail-automation" className="text-blue-600 hover:underline">
                  Retail Automation
                </Link>
              </li>
              <li>
                <Link href="/services/security" className="text-blue-600 hover:underline">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Legal & Resources</h2>
          <ul className="space-y-2">
            <li><Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="text-blue-600 hover:underline">Terms of Service</Link></li>
          </ul>
        </section>
      </div>

      <div className="mt-12 text-sm text-gray-600">
        <p>Last updated: December 20, 2024</p>
      </div>
    </div>
  )
}
