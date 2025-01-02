'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Chat from '../components/Chat';



interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
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
    description: 'With a Masters degree in Artificial Intelligence from Monash University, Sophia is our go-to expert on all things AI. Her background includes roles at Google and IBM, where she developed and deployed machine learning models to solve complex business problems.',
    imageUrl: '/team/Sophia.jpg'
  },
  {
    name: 'Ethan Brown',
    role: 'AI Solutions Architect',
    description: 'Ethan combines his Bachelors degree in Computer Science with a wealth of experience in AI solutions for retail businesses. His work has been recognized by both local startups and Fortune 500 companies, making him a key player on our team.',
    imageUrl: '/team/Ethan.jpg'
  },
  {
    name: 'Morgan Lee',
    role: 'Project Manager & Software Engineer',
    description: 'Morgans journey began at the University of New South Wales, where she earned her degree in Information Technology. Her extensive background in software engineering and project management has made her an invaluable asset to our team, ensuring that every client receives the best possible solution.',
    imageUrl: '/team/Morgan.jpg'
  },
  {
    name: 'Brett Doherty',
    role: 'AI Development Specialist',
    description: 'Brett, our AI development specialist, holds a Bachelors in Computer Science from Macquarie University complements her natural affinity for AI. She has worked across various sectors, including healthcare and finance, helping businesses leverage data-driven insights to drive growth.',
    imageUrl: '/team/Brett.jpg'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen  text-white">
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
            
            <h1 className="text-4xl font-bold mb-6 text-[#c49d17]">
              About Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">AI Tool Agents was founded in 2021 with a vision to make business automation accessible and efficient for companies of all sizes. Since then, we have helped over 70 businesses streamline their operations and enhance customer experiences.
              We&apos;re a passionate community dedicated to transforming the way businesses operate through cutting-edge AI solutions. Our journey began with a shared vision, and we&apos;re committed to harness the power of artificial intelligence to help organizations thrive in an ever-evolving digital landscape.
            </p>
          </motion.div>
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
                    fill
                    className="rounded-full object-cover"
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
