'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './TabView.module.css';

const tabData = [
  {
    title: 'Helpdesk and Ticketing',
    image: '/flow1.png',
    description: 'Our advanced helpdesk system streamlines support operations with automated ticket routing and intelligent categorization. This workflow demonstrates how incoming requests are processed, prioritized, and assigned to the appropriate teams for efficient resolution.'
  },
  {
    title: 'Employee Lifecycle',
    image: '/flow2.png',
    description: 'Manage the complete employee journey from onboarding to offboarding. This automated workflow ensures smooth transitions, proper access management, and compliance with company policies at every stage of the employee lifecycle.'
  },
  {
    title: 'Alerts and Incidents',
    image: '/flow3.png',
    description: 'Real-time incident management system that automatically detects, categorizes, and escalates critical issues. The workflow shows how alerts are processed, prioritized, and routed to the appropriate response teams.'
  },
  {
    title: 'IT Infrastructure',
    image: '/flow4.png',
    description: 'Comprehensive IT infrastructure management workflow that monitors, maintains, and optimizes your technical resources. This system ensures high availability, security, and performance of your IT assets.'
  },
  {
    title: 'Compliance',
    image: '/flow5.png',
    description: 'Automated compliance monitoring and reporting system that helps maintain regulatory standards. This workflow illustrates how compliance checks are performed, documented, and reported to relevant stakeholders.'
  }
];

export default function TabView() {
  const [activeTab, setActiveTab] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('scale(1) translate(0, 0)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    // Calculate the transform offset based on mouse position
    const offsetX = (x - 0.5) * 200;
    const offsetY = (y - 0.5) * 200;

    setTransform(`scale(2.5) translate(${-offsetX}px, ${-offsetY}px)`);
  };

  const handleMouseLeave = () => {
    setTransform('scale(1) translate(0, 0)');
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h2>{tabData[activeTab].title}</h2>
          <p>{tabData[activeTab].description}</p>
        </div>
        <div 
          className={styles.imageContent}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={imageRef}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={tabData[activeTab].image}
              alt={tabData[activeTab].title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 800px"
              style={{ 
                objectFit: 'contain',
                transform,
                transition: 'transform 0.1s ease-out'
              }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
