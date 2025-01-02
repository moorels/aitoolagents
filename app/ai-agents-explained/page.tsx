'use client'
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

interface ImplementationStep {
  sector: string;
  description: string;
  steps: {
    title: string;
    description: string;
    example: string;
  }[];
}

const implementationSteps: ImplementationStep[] = [
  {
    sector: "Customer Service",
    description: "Customer service is often the first place businesses start with AI agents because it offers immediate value and relatively straightforward implementation. Think of AI agents as helpful assistants that can handle customer questions 24/7.",
    steps: [
      {
        title: "Starting Small: Basic Customer Support",
        description: "Begin with simple chatbots that can answer frequently asked questions like What are your business hours? or How do I reset my password? These AI agents work like a very smart FAQ system that can understand questions even when they are asked in different ways.",
        example: "For example, if someone asks When do you close ? or Are you open now ?, the AI understands they are asking about business hours."
      },
      {
        title: "Building the Knowledge Base",
        description: "Next, we teach the AI agent about your specific business. This is like creating a digital library of all your company, information, products, and services. The AI learns to use this information to give accurate, helpful answers about your specific offerings.",
        example: "If you have a retail store, the AI can learn about your return policy, shipping options, and current inventory to provide precise answers about these topics."
      },
      {
        title: "Adding Problem-Solving Abilities",
        description: "Now we give the AI agent more capabilities, like helping customers track orders, process returns, or solve technical issues. It is like training a virtual employee who can handle multiple tasks at once.",
        example: "The AI can now help a customer track their package, initiate a return, and suggest similar products they might like - all in one conversation."
      },
      {
        title: "Human-AI Collaboration",
        description: "Finally, we set up a system where AI agents work alongside human staff. The AI handles routine questions and tasks, while smoothly transferring complex issues to human agents. This creates a perfect balance of efficiency and personal touch.",
        example: "If a customer starts with a simple question about shipping but then needs to discuss a unique situation, the AI can seamlessly transfer them to a human agent with all the conversation history."
      }
    ]
  },
  {
    sector: "Operations & Logistics",
    description: "In operations and logistics, AI agents act like super-powered assistants that can monitor, predict, and optimize various aspects of your business processes. They help make everything run more smoothly and efficiently.",
    steps: [
      {
        title: "Watching and Learning",
        description: "First, AI agents observe how your business operates. They collect and analyze data about things like how long tasks take, where delays happen, and what patterns exist in your daily operations. It is like having a very attentive assistant who never misses a detail.",
        example: "The AI might notice that shipping delays often occur on Mondays due to weekend order buildups, allowing you to adjust staffing accordingly."
      },
      {
        title: "Predictive Planning",
        description: "Next, the AI starts predicting what might happen in the future based on past patterns. This helps prevent problems before they occur and helps you plan better. It is similar to having a weather forecast, but for your business operations.",
        example: "The AI can predict when a machine might need maintenance based on its performance patterns, helping you schedule repairs before it breaks down."
      },
      {
        title: "Smart Inventory Management",
        description: "The AI then helps manage your inventory by automatically tracking stock levels, predicting when you might need to reorder, and even suggesting optimal quantities. It is like having a manager who always knows exactly what is in stock and what is needed.",
        example: "If a product typically sells more during summer, the AI will automatically suggest ordering more stock as summer approaches."
      },
      {
        title: "Process Automation",
        description: "Finally, the AI can start automating routine tasks and making real-time adjustments to improve efficiency. This is like having a skilled coordinator who can instantly respond to changes and keep everything running smoothly.",
        example: "If a delivery truck is running late, the AI can automatically adjust the day of schedule and notify affected customers."
      }
    ]
  },
  {
    sector: "Finance & Accounting",
    description: "In finance and accounting, AI agents serve as highly accurate assistants that can process numbers, detect patterns, and help make financial decisions. They help make everything run more smoothly and efficiently. They like having a team of accountants who can work instantly and never make calculation errors.",
    steps: [
      {
        title: "Basic Document Processing",
        description: "We start by teaching AI agents to read and understand financial documents like invoices, receipts, and bank statements. The AI can extract important information automatically, saving hours of manual data entry.",
        example: "Instead of manually typing in invoice details, you can scan them and the AI will automatically record the date, amount, and vendor information."
      },
      {
        title: "Financial Monitoring",
        description: "Next, the AI begins monitoring financial transactions in real-time. It can spot unusual patterns, potential errors, or fraud much faster than humans. Think of it as having a security guard watching your financial transactions 24/7.",
        example: "If someone makes an unusually large purchase from an unusual location, the AI can flag it for review immediately."
      },
      {
        title: "Automated Reporting",
        description: "The AI then starts generating automated financial reports and analysis. It can create daily, weekly, or monthly reports automatically, saving time and ensuring consistency. It is like having a financial analyst who can instantly create detailed reports whenever needed.",
        example: "At the end of each month, the AI can automatically generate profit and loss statements, expense reports, and budget comparisons."
      },
      {
        title: "Financial Planning Support",
        description: "Finally, the AI helps with financial planning and forecasting. It can analyze trends, suggest budget adjustments, and help make informed financial decisions. This is like having a financial advisor who knows your entire financial history and can make data-driven recommendations.",
        example: "The AI might notice that certain expenses always increase in Q4 and automatically suggest adjusting the budget to account for this pattern."
      }
    ]
  }
];

export default function AIAgentsExplainedPage() {
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
            <h1 className="text-4xl font-bold mb-6 text-[#c49d17]">
              Understanding AI Agents: Your Digital Workforce
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
              Imagine having helpful assistants who never get tired, can work 24/7, and keep getting better at their jobs. That is what AI agents are - they are like smart digital employees that can help your business in many different ways.
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you are new to AI or just exploring possibilities, we want to explain everything in simple terms and show you how these digital helpers can transform your business operations.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* What Are AI Agents Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#c49d17]">What Exactly Are AI Agents?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-[#c49d17]">Think of Them As Digital Employees</h3>
              <p className="text-gray-300">
                AI agents are like smart computer programs that can understand and perform tasks just like human employees would. They can read documents, answer questions, make decisions, and even learn from experience to get better at their jobs.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-[#c49d17]">They Are Always Learning</h3>
              <p className="text-gray-300">
                Just like new employees learn and improve over time, AI agents get better at their tasks the more they work. They learn from every interaction and can adapt to new situations, making them increasingly valuable to your business.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#c49d17]">How AI Agents Help Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "They Never Sleep",
                description: "Unlike human employees, AI agents can work 24 hours a day, 7 days a week. They can handle customer questions, monitor systems, and process work at any time, ensuring your business never stops.",
                icon: "🌙"
              },
              {
                title: "They Are Fast and Accurate",
                description: "AI agents can process information and complete tasks much faster than humans, and they can never make mistakes from being tired or distracted. They can handle hundreds of tasks simultaneously with consistent accuracy.",
                icon: "⚡"
              },
              {
                title: "They Save Money",
                description: "By handling routine tasks automatically, AI agents free up your human employees to focus on more important work. This means you can get more done without having to hire additional staff.",
                icon: "💰"
              },
              {
                title: "They Remember Everything",
                description: "AI agents can instantly access and use all of your business information and past interactions. They never forget details and can use this knowledge to provide better service and make better decisions.",
                icon: "🧠"
              },
              {
                title: "They Make Customers Happy",
                description: "By providing instant, helpful responses at any time, AI agents improve customer satisfaction. They can handle multiple customers at once, so no one has to wait in long queues for help.",
                icon: "😊"
              },
              {
                title: "They Help You Grow",
                description: "As your business grows, AI agents can easily scale up to handle more work. They can also provide valuable insights from data to help you make better business decisions.",
                icon: "📈"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#c49d17]">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Implementation Strategy Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#c49d17]">Getting Started with AI Agents</h2>
          <p className="text-xl text-gray-300 mb-12">
            Starting with AI agents does not mean completely changing how your business works overnight. Instead, we recommend a step-by-step approach in different areas of your business. Here is how we can help you begin:
          </p>
          <div className="space-y-16">
            {implementationSteps.map((sector, sectorIndex) => (
              <motion.div
                key={sector.sector}
                className="bg-gray-800/50 p-8 rounded-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectorIndex * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#c49d17]">{sector.sector}</h3>
                <p className="text-gray-300 mb-8">{sector.description}</p>
                <div className="space-y-6">
                  {sector.steps.map((step, stepIndex) => (
                    <div
                      key={step.title}
                      className="bg-gray-900/50 p-6 rounded-lg border border-gray-600"
                    >
                      <h4 className="text-xl font-semibold mb-3 text-[#c49d17]">
                        Step {stepIndex + 1}: {step.title}
                      </h4>
                      <p className="text-gray-300 mb-4">{step.description}</p>
                      <p className="text-gray-400 italic">{step.example}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Common Concerns Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#c49d17]">Common Questions About AI Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Will AI agents replace my employees?",
                answer: "No - AI agents are designed to work alongside your employees, not replace them. They handle routine tasks so your team can focus on more important work that requires human skills like creativity, empathy, and complex problem-solving."
              },
              {
                question: "Is it difficult to start using AI agents?",
                answer: "Not at all! We help you start small with simple tasks and gradually expand as you get comfortable. Our team guides you through each step, ensuring a smooth transition that works for your business."
              },
              {
                question: "What if the AI makes a mistake?",
                answer: "AI agents are designed with safety measures and can be configured to check with humans before making important decisions. They also learn from any mistakes to prevent them from happening again."
              },
              {
                question: "How long does it take to see results?",
                answer: "Many businesses see immediate benefits in areas like customer service and basic task automation. As the AI learns more about your business, the benefits continue to grow over time."
              }
            ].map((item, index) => (
              <motion.div
                key={item.question}
                className="p-6 bg-gray-800/50 rounded-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-[#c49d17]">{item.question}</h3>
                <p className="text-gray-300">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#c49d17]">Ready to Explore AI Agents?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us start with a friendly chat about your business and how AI agents could help. We will explain everything in plain language and help you find the perfect starting point for your journey into AI.
          </p>
          
        </div>
        <div className="max-w-4xl mx-auto text-center">
         
          <a 
            href="/contact" 
            className="inline-block bg-[#c49d17] text-white px-8 py-4 text-lg font-semibold hover:bg-[#f49d17] transition-colors duration-300"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </motion.section>
    </div>
  );
}
