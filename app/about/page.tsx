'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Chat from '../components/Chat';
import StatisticsCharts from '../components/StatisticsCharts';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

interface Statistic {
  value: string;
  label: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Robert Morels',
    role: 'Founding Member & Software Developer',
    description: 'As one of the founding members, Robert brings over 10 years of experience in software development and a deep-seated love for AI. He holds a Bachelor&apos;s degree in Computer Science from the University of Technology Sydney and has worked with several startups to bring their ideas to life.',
    imageUrl: '/team/Robert.jpg'
  },
  {
    name: 'Sophia White',
    role: 'AI Research Lead',
    description: 'With a Master&apos;s degree in Artificial Intelligence from Monash University, Sophia is our go-to expert on all things AI. Her background includes roles at Google and IBM, where she developed and deployed machine learning models to solve complex business problems.',
    imageUrl: '/team/Sophia.jpg'
  },
  {
    name: 'Ethan Brown',
    role: 'AI Solutions Architect',
    description: 'Ethan combines his Bachelor&apos;s degree in Computer Science with a wealth of experience in AI solutions for retail businesses. His work has been recognized by both local startups and Fortune 500 companies, making him a key player on our team.',
    imageUrl: '/team/Ethan.jpg'
  },
  {
    name: 'Morgan Lee',
    role: 'Project Manager & Software Engineer',
    description: 'Morgan&apos;s journey began at the University of New South Wales, where she earned her degree in Information Technology. Her extensive background in software engineering and project management has made her an invaluable asset to our team, ensuring that every client receives the best possible solution.',
    imageUrl: '/team/Morgan.jpg'
  },
  {
    name: 'Brett Doherty',
    role: 'AI Development Specialist',
    description: 'Brett, our AI development specialist, holds a Bachelor&apos;s in Computer Science from Macquarie University complements her natural affinity for AI. She has worked across various sectors, including healthcare and finance, helping businesses leverage data-driven insights to drive growth.',
    imageUrl: '/team/Brett.jpg'
  }
];

const statistics: Statistic[] = [
  {
    value: "197+",
    label: "Clients Served",
    description: "Businesses transformed through our AI solutions"
  },
  {
    value: "95%",
    label: "Client Satisfaction",
    description: "Average satisfaction rate from our clients"
  },
  {
    value: "1500+",
    label: "AI Services Deployed",
    description: "Custom AI solutions implemented"
  },
  {
    value: "99% Uptime",
    label: "Services Uptime",
    description: "Our services run without interruption 24/7, ensuring uninterrupted access to our solutions."
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          > 
            <div className="flex justify-center mb-12">
              <div className="relative">
                <Image
                  src="/About/1.jpg"
                  alt="About Image 1"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-6 text-[#c49d17]">
              About Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              AI Tool Agents was founded in 2021 with a vision to make business automation accessible and efficient for companies of all sizes. Since then, we have helped over 70 businesses streamline their operations and enhance customer experiences.
            </p>
            <div className="max-w-4xl mx-auto bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-semibold mb-4 text-[#c49d17]">Our Mission</h3>
              <p className="text-lg text-gray-300 mb-6">
                To democratize AI technology by making powerful, intuitive tools accessible to businesses of all sizes, enabling them to thrive in the digital age.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#c49d17]">Our Vision</h3>
              <p className="text-lg text-gray-300">
                To create a future where AI enhances human potential, making businesses more efficient, innovative, and sustainable while maintaining the human touch that makes each organization unique.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Values and Passions Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-[#c49d17]">Our Values & Passions</h2>
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-[#c49d17]">Innovation First</h3>
                  <p className="text-gray-300">We&apos;re passionate about pushing the boundaries of what&apos;s possible with AI, constantly exploring new technologies and approaches to solve complex business challenges.</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-[#c49d17]">Human-Centered Design</h3>
                  <p className="text-gray-300">We believe that the best AI solutions are those that enhance human capabilities rather than replace them, focusing on intuitive interfaces and meaningful interactions.</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-[#c49d17]">Continuous Learning</h3>
                  <p className="text-gray-300">Our team is driven by curiosity and a commitment to staying at the forefront of AI advancement, ensuring our clients always benefit from the latest innovations.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/About/2.jpg"
                alt="About Image 2"
                width={600}
                height={450}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#c49d17]">Our Impact in Numbers</h2>
          <StatisticsCharts />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#c49d17] transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-[#c49d17] mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2 text-[#c49d17]">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Goals and Future Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/About/3.jpg"
                alt="About Image 3"
                width={600}
                height={450}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-[#c49d17]">Our Goals & Future</h2>
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-[#c49d17]">Australian Impact</h3>
                  <p className="text-gray-300">We&apos;re dedicated to transforming the Australian business landscape through innovative AI solutions.</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-[#c49d17]">Sustainable Solutions</h3>
                  <p className="text-gray-300">We&apos;re committed to developing AI solutions that not only drive business success but also promote environmental sustainability and responsible resource usage.</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-[#c49d17]">Community Building</h3>
                  <p className="text-gray-300">We&apos;re building a vibrant community of AI-powered businesses, fostering knowledge sharing and collaborative innovation across industries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Work Process Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#c49d17]">Our Work Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-[#c49d17]">Discovery</h3>
              <p className="text-gray-400">Understanding your unique business needs and challenges</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3 text-[#c49d17]">Development</h3>
              <p className="text-gray-400">Creating tailored AI solutions that fit your requirements</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3 text-[#c49d17]">Deployment</h3>
              <p className="text-gray-400">Seamless integration and continuous support</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="flex flex-col md:flex-row items-center gap-8 bg-gray-900/50 p-8 rounded-lg border border-gray-800/50 hover:border-[#c49d17] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-32 h-32 relative flex-shrink-0">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-[#c49d17]"></div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2 text-[#c49d17]">{member.name}</h3>
                  <h4 className="text-lg font-semibold mb-4 text-[#c49d17]">{member.role}</h4>
                  <p className="text-gray-300 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Together, we bring together a wealth of experience, creativity, and innovation to offer bespoke AI solutions that are tailored to the unique needs of our clients. Whether you&apos;re looking to enhance customer service with chatbots, optimize your operations through process automation, or gain deeper insights from your data, we&apos;re here to make it happen.
          </p>
          <p className="text-2xl font-bold text-[#c49d17]">
            Join us as we continue to shape the future of AI in business across Australia!
          </p>
        </div>
      </motion.section>

      {/* Chat Component */}
      <div className="fixed bottom-8 right-8 z-50">
        <Chat />
      </div>
    </div>
  );
}
