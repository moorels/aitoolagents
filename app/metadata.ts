interface PageMetadata {
  title: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  keywords: string[];
  ogImage: string;
  ogType: string;
  publishedTime: string;
}

const baseUrl = 'https://aitoolagents.com.au';
const defaultOgImage = `${baseUrl}/images/ai-agents-og-image.jpg`;
const currentDate = '2024-12-19T22:32:23+11:00';

export const metadata: Record<string, PageMetadata> = {
  home: {
    title: "AI Tool Agents | Intelligent Business Automation Solutions",
    metaDescription: "Transform your business with AI Tool Agents. We deliver cutting-edge AI solutions for automation, customer service, and process optimization. Start your AI journey today.",
    ogTitle: "AI Tool Agents - Advanced Business Automation Solutions",
    ogDescription: "Revolutionize your business operations with AI Tool Agents. Discover intelligent automation solutions that boost efficiency, reduce costs, and enhance customer experience.",
    keywords: ["AI agents", "business automation", "AI solutions", "process optimization", "intelligent automation", "AI tools", "business efficiency"],
    ogImage: defaultOgImage,
    ogType: "website",
    publishedTime: currentDate,
  },
  
  aiAgentic: {
    title: "AI Agentic Solutions | Autonomous Business Intelligence",
    metaDescription: "Leverage autonomous AI agents for intelligent decision-making and business process automation. Our agentic solutions adapt and learn from your business needs.",
    ogTitle: "AI Agentic Solutions - Smart Business Intelligence",
    ogDescription: "Deploy intelligent AI agents that learn and adapt to your business needs. Experience autonomous decision-making and smart process automation.",
    keywords: ["AI agents", "autonomous AI", "business intelligence", "smart automation", "adaptive AI", "intelligent agents", "business automation"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  aiIntegrations: {
    title: "AI Integrations | Seamless System Connectivity",
    metaDescription: "Connect and enhance your systems with AI integrations. Our solutions ensure smooth connectivity between AI services and your business applications.",
    ogTitle: "AI Integrations - Smart System Connectivity",
    ogDescription: "Transform your business with seamless AI integrations. Connect your systems and applications with intelligent AI services for enhanced operations.",
    keywords: ["AI integration", "system connectivity", "AI services", "business applications", "seamless integration", "AI tools", "system enhancement"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  processAutomation: {
    title: "AI Process Automation | Smart Workflow Solutions",
    metaDescription: "Automate complex business processes with intelligent AI solutions. Our process automation services streamline operations and boost productivity.",
    ogTitle: "AI Process Automation - Intelligent Workflow Solutions",
    ogDescription: "Transform your business processes with intelligent automation. Streamline workflows, reduce manual tasks, and increase operational efficiency.",
    keywords: ["process automation", "workflow automation", "business processes", "AI automation", "operational efficiency", "smart workflows", "business optimization"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  customSolutions: {
    title: "Custom AI Solutions | Tailored Business Intelligence",
    metaDescription: "Get custom AI solutions designed for your unique business needs. Our tailored AI services deliver targeted automation and intelligent process optimization.",
    ogTitle: "Custom AI Solutions - Tailored Business Intelligence",
    ogDescription: "Experience AI solutions customized for your business needs. Get targeted automation and intelligent optimization designed specifically for your operations.",
    keywords: ["custom AI", "tailored solutions", "business intelligence", "AI customization", "process optimization", "business automation", "AI services"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  customerService: {
    title: "AI Customer Service | Intelligent Support Solutions",
    metaDescription: "Enhance customer service with AI-powered support solutions. Our intelligent agents provide 24/7 customer assistance and streamlined support operations.",
    ogTitle: "AI Customer Service - Smart Support Solutions",
    ogDescription: "Transform customer support with AI-powered service solutions. Provide 24/7 assistance, reduce response times, and enhance customer satisfaction.",
    keywords: ["AI customer service", "customer support", "intelligent support", "AI support", "customer assistance", "support automation", "customer satisfaction"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  healthcare: {
    title: "Healthcare AI Solutions | Medical Process Automation",
    metaDescription: "Optimize healthcare operations with AI-powered solutions. Our intelligent agents streamline medical processes and enhance patient care delivery.",
    ogTitle: "Healthcare AI Solutions - Medical Process Automation",
    ogDescription: "Transform healthcare delivery with AI-powered solutions. Streamline medical processes, improve patient care, and optimize healthcare operations.",
    keywords: ["healthcare AI", "medical automation", "patient care", "healthcare solutions", "medical processes", "AI in healthcare", "healthcare optimization"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  insurance: {
    title: "Insurance AI Solutions | Claims Process Automation",
    metaDescription: "Streamline insurance operations with AI-powered solutions. Our intelligent agents automate claims processing and enhance customer service delivery.",
    ogTitle: "Insurance AI Solutions - Smart Claims Processing",
    ogDescription: "Transform insurance operations with AI-powered automation. Speed up claims processing, reduce errors, and improve customer satisfaction.",
    keywords: ["insurance AI", "claims automation", "insurance processing", "AI solutions", "claims management", "insurance operations", "customer service"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  officeAutomation: {
    title: "Office Automation | AI-Powered Workplace Solutions",
    metaDescription: "Transform your office with AI-powered automation solutions. Our intelligent agents streamline administrative tasks and boost workplace productivity.",
    ogTitle: "Office Automation - Smart Workplace Solutions",
    ogDescription: "Revolutionize your office operations with AI-powered automation. Streamline administrative tasks, boost productivity, and enhance workplace efficiency.",
    keywords: ["office automation", "workplace solutions", "administrative automation", "AI office", "productivity tools", "workplace efficiency", "business automation"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  propertyManagement: {
    title: "Property Management AI | Real Estate Automation",
    metaDescription: "Optimize property management with AI-powered solutions. Our intelligent agents automate rental processes and enhance tenant service delivery.",
    ogTitle: "Property Management AI - Smart Real Estate Solutions",
    ogDescription: "Transform property management with AI-powered automation. Streamline rental processes, improve tenant services, and optimize property operations.",
    keywords: ["property management", "real estate AI", "rental automation", "property solutions", "tenant service", "property operations", "AI automation"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  retailAutomation: {
    title: "Retail Automation | AI-Powered Store Solutions",
    metaDescription: "Transform retail operations with AI-powered automation. Our intelligent agents optimize inventory management and enhance customer shopping experience.",
    ogTitle: "Retail Automation - Smart Store Solutions",
    ogDescription: "Revolutionize retail operations with AI-powered automation. Optimize inventory, enhance customer experience, and boost store efficiency.",
    keywords: ["retail automation", "store solutions", "inventory management", "AI retail", "customer experience", "store operations", "retail efficiency"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  security: {
    title: "AI Security Solutions | Intelligent Protection Systems",
    metaDescription: "Enhance security with AI-powered protection solutions. Our intelligent agents provide advanced threat detection and automated security responses.",
    ogTitle: "AI Security Solutions - Smart Protection Systems",
    ogDescription: "Transform security operations with AI-powered protection. Get advanced threat detection, automated responses, and enhanced security monitoring.",
    keywords: ["AI security", "protection systems", "threat detection", "security automation", "intelligent security", "security monitoring", "automated security"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  about: {
    title: "About AI Tool Agents | Leading AI Solutions Provider",
    metaDescription: "Learn about AI Tool Agents, Australia's leading provider of AI solutions. Discover our mission, expertise, and commitment to transforming businesses through AI innovation.",
    ogTitle: "About AI Tool Agents - Australia's AI Innovation Leader",
    ogDescription: "Meet the team behind AI Tool Agents. Learn about our mission to transform businesses through innovative AI solutions and our commitment to excellence.",
    keywords: ["about AI Tool Agents", "AI company", "AI solutions provider", "business transformation", "AI innovation", "Australian AI company", "AI expertise"],
    ogImage: defaultOgImage,
    ogType: "website",
    publishedTime: currentDate,
  },

  contact: {
    title: "Contact AI Tool Agents | Get AI Solutions Support",
    metaDescription: "Contact AI Tool Agents for expert AI solutions and support. Reach out to discuss your business needs and discover how our AI tools can transform your operations.",
    ogTitle: "Contact AI Tool Agents - Expert AI Solutions Support",
    ogDescription: "Get in touch with AI Tool Agents. Let's discuss how our AI solutions can transform your business operations and drive success.",
    keywords: ["contact AI Tool Agents", "AI support", "AI consultation", "business solutions", "AI tools support", "get in touch", "AI services contact"],
    ogImage: defaultOgImage,
    ogType: "website",
    publishedTime: currentDate,
  },

  layout: {
    title: "AI Tool Agents | Intelligent Business Solutions Australia",
    metaDescription: "AI Tool Agents delivers cutting-edge AI solutions for Australian businesses. Transform your operations with intelligent automation, customer service, and process optimization.",
    ogTitle: "AI Tool Agents - Smart Business Solutions Australia",
    ogDescription: "Transform your business with AI Tool Agents. We provide intelligent automation solutions that boost efficiency, reduce costs, and enhance customer experience.",
    keywords: ["AI Tool Agents", "business automation", "AI solutions", "process optimization", "Australian AI", "business efficiency", "intelligent automation"],
    ogImage: defaultOgImage,
    ogType: "website",
    publishedTime: currentDate,
  },

  deployment: {
    title: "AI Deployment Services | Expert Implementation Solutions",
    metaDescription: "Professional AI deployment services for seamless integration. Our expert team ensures smooth implementation, scalability, and optimal performance of your AI solutions.",
    ogTitle: "AI Deployment Services - Expert Implementation & Support",
    ogDescription: "Get expert AI deployment services for your business. Our team ensures seamless integration, optimal performance, and reliable scaling of your AI solutions.",
    keywords: ["AI deployment", "implementation services", "AI integration", "deployment solutions", "AI scalability", "system integration", "AI implementation"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  customerCare: {
    title: "AI Customer Care Solutions | Intelligent Support Systems",
    metaDescription: "Transform your customer care with AI-powered solutions. Our intelligent systems provide 24/7 support, personalized interactions, and efficient query resolution.",
    ogTitle: "AI Customer Care Solutions - Smart Support Systems",
    ogDescription: "Elevate your customer care with AI-powered solutions. Deliver 24/7 support, personalized service, and efficient resolution through intelligent automation.",
    keywords: ["AI customer care", "intelligent support", "customer service automation", "24/7 support", "automated customer care", "AI support systems", "customer experience"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  aiAgents: {
    title: "AI Agents | Intelligent Business Automation Tools",
    metaDescription: "Deploy intelligent AI agents for business automation. Our advanced agents streamline operations, enhance productivity, and deliver intelligent task execution.",
    ogTitle: "AI Agents - Smart Business Automation Tools",
    ogDescription: "Transform your business with intelligent AI agents. Automate operations, enhance productivity, and achieve smart task execution with our advanced AI solutions.",
    keywords: ["AI agents", "business automation", "intelligent agents", "task automation", "AI tools", "automated operations", "smart agents"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  aiAgenticSolutions: {
    title: "AI Agentic Solutions | Advanced Business Intelligence",
    metaDescription: "Leverage agentic AI for advanced business intelligence. Our autonomous agents provide smart decision-making, process optimization, and intelligent automation.",
    ogTitle: "AI Agentic Solutions - Smart Business Intelligence",
    ogDescription: "Transform your business with agentic AI solutions. Get intelligent decision-making, process optimization, and autonomous operations management.",
    keywords: ["agentic AI", "business intelligence", "autonomous agents", "AI decision-making", "process optimization", "intelligent automation", "AI solutions"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },

  aiProcessAutomation: {
    title: "AI Process Automation | Smart Workflow Solutions",
    metaDescription: "Transform your business processes with intelligent AI automation. Our solutions streamline workflows, reduce manual tasks, and optimize operational efficiency.",
    ogTitle: "AI Process Automation - Intelligent Workflow Solutions",
    ogDescription: "Revolutionize your business processes with AI automation. Streamline workflows, eliminate manual tasks, and achieve optimal operational efficiency.",
    keywords: ["AI process automation", "workflow automation", "business process", "intelligent automation", "operational efficiency", "process optimization", "automated workflows"],
    ogImage: defaultOgImage,
    ogType: "article",
    publishedTime: currentDate,
  },
};
