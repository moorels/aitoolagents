'use client'
import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop';

export default function CustomerAgreement() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#dfb406] to-[#915b07]">
              AI Business Tools Australia
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#dfb406]">
              Customer Relationship Agreement
            </h2>
          </div>

          <div className="space-y-8 text-gray-200">
            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                1. DEFINITIONS AND INTERPRETATION
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">1.1 Definitions</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-2">AI Services</p>
                      <p className="text-sm sm:text-base leading-relaxed">The artificial intelligence and machine learning services provided by AI Business Tools Australia, including but not limited to natural language processing, computer vision, predictive analytics, and automated decision-making systems</p>
                    </div>
                    
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-2">AI Models</p>
                      <p className="text-sm sm:text-base leading-relaxed">The machine learning models, algorithms, neural networks, and any associated weights, parameters, or configurations used to provide the AI Services</p>
                    </div>
                    
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-2">API</p>
                      <p className="text-sm sm:text-base leading-relaxed">The application programming interface, including all endpoints, documentation, and associated tools provided for accessing and integrating with the AI Services</p>
                    </div>
                    
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-2">Training Data</p>
                      <p className="text-sm sm:text-base leading-relaxed">Any data, including text, images, audio, video, or structured data, provided by the Customer for training or fine-tuning AI Models</p>
                    </div>
                    
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-2">Output Data</p>
                      <p className="text-sm sm:text-base leading-relaxed">Any results, predictions, generations, or insights produced by the AI Services in response to Customer inputs or queries</p>
                    </div>
                    
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-2">Service Credits</p>
                      <p className="text-sm sm:text-base leading-relaxed">Credits issued for service level breaches, calculated as a percentage of monthly service fees</p>
                    </div>
                    
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-2">Intellectual Property Rights</p>
                      <p className="text-sm sm:text-base leading-relaxed">Includes all patents, trademarks, copyrights, trade secrets, know-how, database rights, and any other intellectual property rights recognized by law</p>
                    </div>
                    
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-2">Authorized Users</p>
                      <p className="text-sm sm:text-base leading-relaxed">Employees, contractors, or agents of the Customer who are authorized to access and use the AI Services</p>
                    </div>
                    
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-2">Service Tier</p>
                      <p className="text-sm sm:text-base leading-relaxed">The specific level of AI Services subscribed to by the Customer, including associated features, limitations, and performance guarantees</p>
                    </div>
                    
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-2">Confidential Information</p>
                      <p className="text-sm sm:text-base leading-relaxed">Any non-public information disclosed by either party in connection with this agreement</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">1.2 Interpretation</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <ul className="space-y-4 text-sm sm:text-base">
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">This agreement is governed by and interpreted according to the laws of Victoria, Australia</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Any reference to legislation includes amendments, replacements, and subordinate legislation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Headings are for convenience only and do not affect interpretation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Words importing the singular include the plural and vice versa</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">References to a party include its successors and permitted assigns</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">The word including means including but not limited to</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">If any provision is invalid or unenforceable, it will be severed, and the remaining provisions continue in full force</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                2. AI SERVICES AND LICENSING
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">2.1 Grant of License</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">API Access</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Make API calls within allocated quota</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Use provided SDKs and client libraries</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Access documentation and support resources</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Integration Rights</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Embed AI capabilities in your software</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Create custom integrations</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Develop automated workflows</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Output Usage</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Use outputs for business purposes</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Create derivative works</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Incorporate into your products</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Support Access</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">24/7 technical support</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Implementation assistance</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Training resources</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">2.2 License Restrictions</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Technical Restrictions</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">No reverse engineering of AI Models</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">No extraction of model weights</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">No modification of core algorithms</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Usage Restrictions</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">No exceeding API call limits</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">No sharing of credentials</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">No unauthorized resale</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Competition Restrictions</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">No development of competing services</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">No benchmarking for competitors</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">No training competitive models</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Legal Compliance</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">No illegal activities</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">No violation of third-party rights</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Compliance with data protection laws</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                3. DATA RIGHTS AND PRIVACY
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">3.1 Data Ownership</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Customer Data Rights</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Retain ownership of all Training Data</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Control access to Customer Data</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Request data export or deletion</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">AI Model Rights</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Model improvements from training</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Aggregated insights ownership</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Algorithm enhancements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">3.2 Data Protection</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Security Measures</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Encryption at rest and in transit</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Access controls and authentication</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Regular security audits</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Compliance</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Australian Privacy Principles</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">GDPR compliance where applicable</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Industry-specific regulations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">3.3 Data Processing</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Processing Activities</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Model training and optimization</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Performance monitoring</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Quality assurance</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Data Retention</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">30-day default retention period</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Custom retention policies available</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Secure data disposal procedures</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                4. SERVICE LEVEL AGREEMENT (SLA)
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">4.1 Service Availability</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Uptime Guarantee</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">99.9% monthly uptime guarantee</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Calculated from total available minutes</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Excludes scheduled maintenance</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Response Times</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Critical incidents: 15 minutes</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Major incidents: 1 hour</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Minor incidents: 4 hours</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">4.2 Performance Metrics</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">API Performance</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">95th percentile response time under 500ms</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">99th percentile response time under 1000ms</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Error rate below 0.1%</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Model Performance</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Accuracy maintenance within 1% of baseline</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Regular model retraining</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Performance monitoring and alerts</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                5. COMPLIANCE AND LIABILITY
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">5.1 Regulatory Compliance</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Australian Law</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Privacy Act 1988 compliance</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Consumer protection laws</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Data breach notification</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Industry Standards</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">ISO 27001 certification</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">SOC 2 Type II compliance</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Regular third-party audits</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">5.2 Liability Limitations</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Service Liability</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Limited to direct damages only</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Capped at 12 months of fees</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Excludes consequential losses</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Excluded Claims</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Gross negligence</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Willful misconduct</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Intellectual property claims</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">5.3 Indemnification</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Customer Obligations</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Misuse of services</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Data rights violations</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Regulatory non-compliance</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Provider Obligations</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">IP infringement claims</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Data breaches</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Service non-compliance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                6. TERM AND TERMINATION
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">6.1 Agreement Term</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Initial Term</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">12-month minimum commitment</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Starts upon service activation</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Auto-renewal unless cancelled</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Renewal Terms</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">12-month renewal periods</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">30-day notice for changes</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Updated terms may apply</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">6.2 Termination Rights</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Customer Rights</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">30-day written notice</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Material breach by provider</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Service level failures</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Provider Rights</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Non-payment of fees</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Material breach by customer</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Regulatory requirements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">6.3 Post-Termination</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Data Handling</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">30-day data retrieval period</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Secure data deletion</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Data export options</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Ongoing Obligations</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Confidentiality duties</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Payment obligations</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">IP restrictions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                7. DISPUTE RESOLUTION
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">7.1 Initial Resolution</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Notification Process</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Written notice of dispute</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Detailed description required</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Supporting documentation</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Response Timeline</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">5 business days acknowledgment</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">15 business days investigation</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Written response provided</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">7.2 Mediation</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Process</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Independent mediator selection</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Melbourne-based mediation</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Shared cost arrangement</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Requirements</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Good faith participation</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Confidentiality maintained</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Documentation exchange</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">7.3 Legal Proceedings</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Jurisdiction</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Victorian courts jurisdiction</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Australian law applies</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Melbourne as venue</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Conditions</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">After mediation attempt</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Written notice required</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Each party bears own costs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                8. INTELLECTUAL PROPERTY
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">8.1 Ownership Rights</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Provider IP</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">AI models and algorithms</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Platform and infrastructure</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Documentation and materials</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Customer IP</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Training data provided</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Custom configurations</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Business processes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">8.2 License Grants</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">To Customer</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Use of AI services</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Access to platform</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Integration rights</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">To Provider</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Use of training data</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Model improvements</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Feedback incorporation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">8.3 IP Protection</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Safeguards</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Confidentiality measures</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Access controls</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Security protocols</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-yellow-400 mb-3">Enforcement</p>
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Rights protection</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Infringement remedies</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span className="flex-1">Legal action if needed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-12 sm:mt-16 bg-gray-800/50 rounded-lg p-6 sm:p-8">
              <div className="max-w-2xl mx-auto">
                <div className="text-center space-y-4">
                  <div className="mb-6 pb-6 border-b border-gray-700">
                    <p className="text-sm sm:text-base text-yellow-400 font-semibold">Last Updated: February 13, 2025</p>
                  </div>
                  
                  <div className="space-y-2 text-gray-300">
                    <p className="text-lg font-semibold">AI Business Tools Australia</p>
                    <p className="text-sm sm:text-base">ABN: 79 338 920 277</p>
                    <p className="text-sm sm:text-base">350 Collins St, Melbourne VIC 3000</p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <p className="text-xs sm:text-sm text-gray-400">This agreement is subject to change. Please check regularly for updates.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
        <ScrollToTop />
      </div>
    </div>
  );
}
