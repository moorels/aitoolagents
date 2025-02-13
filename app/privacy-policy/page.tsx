'use client'
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#dfb406] to-[#915b07]">
            Privacy Policy
          </h1>

          <div className="space-y-8">
            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                1. We respect your privacy
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                <div className="space-y-4 text-gray-200">
                  <p>1.1. AI Business Tools Australia respects your right to privacy and is committed to safeguarding the privacy of our customers and website visitors. We adhere to the Australian Privacy Principles contained in the Privacy Act 1988 (Cth). This policy sets out how we collect and treat your personal information.</p>
                  <p>1.2. Personal information is information we hold which is identifiable as being about you.</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                2. Collection of personal information
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                <div className="space-y-4 text-gray-200">
                  <p>2.1. AI Business Tools Australia will, from time to time, receive and store personal information you enter onto our website, provided to us directly or given to us in other forms.</p>
                  <p>2.2. You may provide basic information such as your name, phone number, address and email address to enable us to send information, provide updates and process your product or service order. We may collect additional information at other times, including but not limited to, when you provide feedback, when you provide information about your personal or business affairs, change your content or email preference, respond to surveys and/or promotions, provide financial or credit card information, or communicate with our customer support.</p>
                  <p>2.3. Additionally, we may also collect any other information you provide while interacting with us.</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                3. How we collect your personal information
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                <div className="space-y-4 text-gray-200">
                  <p>3.1. AI Business Tools Australia collects personal information from you in a variety of ways, including when you interact with us electronically or in person, when you access our website and when we provide our services to you. We may receive personal information from third parties. If we do, we will protect it as set out in this Privacy Policy.</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                4. Use of your personal information
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                <div className="space-y-4 text-gray-200">
                  <p>4.1. AI Business Tools Australia may use personal information collected from you to provide you with information, updates and our services. We may also make you aware of new and additional products, services and opportunities available to you. We may use your personal information to improve our products and services and better understand your needs.</p>
                  <p>4.2. AI Business Tools Australia may contact you by a variety of measures including, but not limited to telephone, email, sms or mail.</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                5. Disclosure of your personal information
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                <div className="space-y-4 text-gray-200">
                  <p>5.1. We may disclose your personal information to any of our employees, officers, insurers, professional advisers, agents, suppliers or subcontractors insofar as reasonably necessary for the purposes set out in this Policy. Personal information is only supplied to a third party when it is required for the delivery of our services.</p>
                  <p>5.2. We may from time to time need to disclose personal information to comply with a legal requirement, such as a law, regulation, court order, subpoena, warrant, in the course of a legal proceeding or in response to a law enforcement agency request.</p>
                  <p>5.3. We may also use your personal information to protect the copyright, trademarks, legal rights, property or safety of AI Business Tools Australia, its customers or third parties.</p>
                  <p>5.4. Information that we collect may from time to time be stored, processed in or transferred between parties located in countries outside of Australia.</p>
                  <p>5.5. If there is a change of control in our business or a sale or transfer of business assets, we reserve the right to transfer to the extent permissible at law our user databases, together with any personal information and non-personal information contained in those databases.</p>
                  <p>5.6. By providing us with personal information, you consent to the terms of this Privacy Policy and the types of disclosure covered by this Policy. Where we disclose your personal information to third parties, we will request that the third party follow this Policy regarding handling your personal information.</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                6. Security of your personal information
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                <div className="space-y-4 text-gray-200">
                  <p>6.1. AI Business Tools Australia is committed to ensuring that the information you provide to us is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure information and protect it from misuse, interference, loss and unauthorised access, modification and disclosure.</p>
                  <p>6.2. The transmission and exchange of information is carried out at your own risk. We cannot guarantee the security of any information that you transmit to us, or receive from us. Although we take measures to safeguard against unauthorised disclosures of information, we cannot assure you that personal information that we collect will not be disclosed in a manner that is inconsistent with this Privacy Policy.</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                6A. Database Security and Data Protection Measures
              </h2>
              <div className="space-y-8">
                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">6A.1. Data Storage and Encryption</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <ul className="space-y-3 text-sm sm:text-base">
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">All personal data is stored in secure, enterprise-grade database systems with industry-standard encryption at rest</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">We utilize AES-256 encryption for all sensitive data fields</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Database backups are encrypted and stored in geographically distributed locations within Australia</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">All data transmission occurs over secure TLS 1.3 connections</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">6A.2. Access Control and Authentication</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <ul className="space-y-3 text-sm sm:text-base">
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Strict role-based access control (RBAC) is implemented for all database access</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Multi-factor authentication is required for all administrative access</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Regular access audits are performed to ensure compliance</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">All database access attempts are logged and monitored</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">6A.3. Data Retention and Deletion</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <ul className="space-y-3 text-sm sm:text-base">
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Personal data is retained only for as long as necessary to provide our services</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Automated data retention policies ensure data is securely deleted when no longer needed</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Customers can request complete deletion of their data at any time</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Secure data wiping procedures are used for all data deletion</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">6A.4. Security Monitoring and Incident Response</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <ul className="space-y-3 text-sm sm:text-base">
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">24/7 security monitoring of all database systems</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Automated threat detection and prevention systems</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Incident response team on standby for immediate security incident handling</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Regular security assessments and penetration testing</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">6A.5. Compliance and Certifications</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <ul className="space-y-3 text-sm sm:text-base">
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Compliance with Australian Privacy Principles (APPs)</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Regular independent security audits</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">ISO 27001 information security management practices</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Compliance with GDPR requirements for international data handling</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">6A.6. Employee Training and Policies</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <ul className="space-y-3 text-sm sm:text-base">
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Mandatory security awareness training for all employees</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Strict data handling policies and procedures</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Regular updates and refresher training on security best practices</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Background checks for all employees with database access</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">6A.7. Third-Party Risk Management</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <ul className="space-y-3 text-sm sm:text-base">
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Thorough security assessments of all third-party service providers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Contractual obligations for data protection and security</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Regular audits of third-party security practices</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Data processing agreements with all data processors</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-yellow-500">6A.8. Business Continuity and Disaster Recovery</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <ul className="space-y-3 text-sm sm:text-base">
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Comprehensive disaster recovery plans for all database systems</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Regular backup testing and verification procedures</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Redundant systems and failover capabilities</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span className="flex-1">Maximum 4-hour recovery time objective (RTO) for critical systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                7. Access to your personal information
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                <div className="space-y-4 text-gray-200">
                  <p>7.1. You may request details of personal information that we hold about you in accordance with the provisions of the Privacy Act 1988 (Cth). A small administrative fee may be payable for the provision of information. If you would like a copy of the information which we hold about you or believe that any information we hold on you is inaccurate, out of date, incomplete, irrelevant or misleading, please email us at support@aibusinesstools.com.au.</p>
                  <p>7.2. We reserve the right to refuse to provide you with information that we hold about you, in certain circumstances set out in the Privacy Act.</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                8. Complaints about privacy
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                <div className="space-y-4 text-gray-200">
                  <p>8.1. If you have any complaints about our privacy practices, please feel free to send in details of your complaints to our support team. We take complaints very seriously and will respond shortly after receiving written notice of your complaint.</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                9. Changes to Privacy Policy
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                <div className="space-y-4 text-gray-200">
                  <p>9.1. Please be aware that we may change this Privacy Policy in the future. We may modify this Policy at any time, in our sole discretion and all modifications will be effective immediately upon our posting of the modifications on our website or notice board. Please check back from time to time to review our Privacy Policy.</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#dfb406] border-b border-[#dfb406] pb-2">
                10. Website
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6">
                <div className="space-y-4 text-gray-200">
                  <p>10.1. When you visit our website, we may collect certain information such as browser type, operating system, website visited immediately before coming to our site, etc. This information is used in an aggregated manner to analyse how people use our site, such that we can improve our service.</p>
                  <p>10.2. We may from time to time use cookies on our website. Cookies are very small files which a website uses to identify you when you come back to the site and to store details about your use of the site. Cookies are not malicious programs that access or damage your computer. Most web browsers automatically accept cookies but you can choose to reject cookies by changing your browser settings. However, this may prevent you from taking full advantage of our website.</p>
                  <p>10.3. Our site may from time to time have links to other websites not owned or controlled by us. These links are meant for your convenience only. Links to third party websites do not constitute sponsorship or endorsement or approval of these websites. Please be aware that AI Business Tools Australia is not responsible for the privacy practices of other such websites. We encourage our users to be aware, when they leave our website, to read the privacy statements of each and every website that collects personal identifiable information.</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
