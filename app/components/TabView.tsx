'use client';
import { useState } from 'react';
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
        <div className={styles.imageContent}>
          <Image
            src={tabData[activeTab].image}
            alt={tabData[activeTab].title}
            width={600}
            height={400}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}
