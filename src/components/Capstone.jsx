import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Database, BarChart3, Cloud, TrendingUp, Shield, Users, DollarSign, MapPin, Activity, ExternalLink, Play, ChevronRight } from 'lucide-react';

export default function CapstoneProjectSection() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoaded, setIsLoaded] = useState(false);
  
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [overviewRef, overviewInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [part1Ref, part1InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [part2Ref, part2InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Database, label: "Data Points Processed", value: "2.3M+", delay: "0ms" },
    { icon: BarChart3, label: "Interactive Visualizations", value: "4", delay: "200ms" },
    { icon: TrendingUp, label: "Real-time Dashboards", value: "1", delay: "400ms" },
    { icon: Shield, label: "Compliance Standards", value: "SOX", delay: "600ms" }
  ];

  const technologies = [
    { name: "Google BigQuery", category: "Data Warehouse", icon: "🏗️" },
    { name: "Looker Studio", category: "Business Intelligence", icon: "📊" },
    { name: "Google Cloud Storage", category: "Data Lake", icon: "☁️" },
    { name: "SQL", category: "Query Language", icon: "🔍" }
  ];

  const keyInsights = [
    { 
      icon: DollarSign, 
      title: "Treasury Risk Management", 
      description: "Built automated alerts for loan portfolios exceeding $3B threshold",
      impact: "Real-time risk monitoring"
    },
    { 
      icon: MapPin, 
      title: "Geographic Distribution Analysis", 
      description: "Mapped loan concentration across US states and regions",
      impact: "Reduced regional overexposure"
    },
    { 
      icon: Users, 
      title: "Customer Segmentation", 
      description: "Profiled top 10 customers by income with current loan status",
      impact: "Enhanced lending strategy"
    },
    { 
      icon: Activity, 
      title: "Portfolio Health Monitoring", 
      description: "Real-time tracking of loan status distribution and delinquency rates",
      impact: "Proactive portfolio management"
    }
  ];

  return (
    <section className="capstone-section">
      {/* Animated Background */}
      <div className="background-animation">
        <div className="floating-particles"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Header */}
      <div 
        ref={headerRef}
        className={`section-header ${headerInView ? 'animate-in' : 'animate-out'}`}
      >
        <div className="header-badge">
          <Cloud className="badge-icon" />
          <span>Google Cloud Certified</span>
        </div>
        <h2 className="section-title">
          Data Analytics
          Capstone Project
        </h2>
        <p className="section-subtitle">
          End-to-end data analytics pipeline demonstrating enterprise-grade 
          data processing, transformation, and visualization using Google Cloud Platform
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="tab-navigation">
        {[
          { key: 'overview', label: 'Project Overview', icon: Activity },
          { key: 'part1', label: 'BigQuery Processing', icon: Database },
          { key: 'part2', label: 'Looker Visualization', icon: BarChart3 }
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`tab-button ${activeTab === key ? 'active' : ''}`}
          >
            <Icon className="tab-icon" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="content-container">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div 
            ref={overviewRef}
            className={`content-panel ${overviewInView ? 'animate-in' : 'animate-out'}`}
          >
            <div className="overview-grid">
              <div className="overview-main">
                <div className="project-context">
                  <h3 className="context-title">TheLook Fintech Case Study</h3>
                  <p className="context-description">
                    As a Cloud Data Analyst, I architected a comprehensive data analytics 
                    solution to provide the Treasury department with real-time insights into 
                    loan portfolios, risk assessment, and customer segmentation.
                  </p>
                </div>

                <div className="tech-stack">
                  <h4 className="stack-title">Technology Stack</h4>
                  <div className="tech-grid">
                    {technologies.map((tech, index) => (
                      <div key={index} className="tech-card">
                        <span className="tech-icon">{tech.icon}</span>
                        <div className="tech-info">
                          <span className="tech-name">{tech.name}</span>
                          <span className="tech-category">{tech.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="overview-sidebar">
                <div className="business-impact">
                  <h4 className="impact-title">Business Impact</h4>
                  <div className="impact-list">
                    {keyInsights.map((insight, index) => (
                      <div key={index} className="impact-item">
                        <div className="impact-icon-container">
                          <insight.icon className="impact-icon" />
                        </div>
                        <div className="impact-content">
                          <h5 className="impact-name">{insight.title}</h5>
                          <p className="impact-desc">{insight.description}</p>
                          <span className="impact-result">{insight.impact}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Part 1 Tab */}
        {activeTab === 'part1' && (
          <div 
            ref={part1Ref}
            className={`content-panel ${part1InView ? 'animate-in' : 'animate-out'}`}
          >
            <div className="part-layout">
              <div className="part-visual">
                <div className="visual-container">
                  <div className="data-flow-diagram">
                    <div className="flow-step">
                      <div className="step-icon">☁️</div>
                      <span>GCS Import</span>
                    </div>
                    <ChevronRight className="flow-arrow" />
                    <div className="flow-step">
                      <div className="step-icon">🏗️</div>
                      <span>BigQuery ETL</span>
                    </div>
                    <ChevronRight className="flow-arrow" />
                    <div className="flow-step">
                      <div className="step-icon">🔗</div>
                      <span>Data Joining</span>
                    </div>
                    <ChevronRight className="flow-arrow" />
                    <div className="flow-step">
                      <div className="step-icon">📊</div>
                      <span>Clean Dataset</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="part-content">
                <div className="part-header">
                  <Database className="part-icon" />
                  <div className="part-title-group">
                    <h3 className="part-title">BigQuery Data Processing</h3>
                    <p className="part-subtitle">Collect, Process & Store</p>
                  </div>
                </div>

                <div className="activities-grid">
                  <div className="activity-card">
                    <h4 className="activity-title">Data Ingestion</h4>
                    <ul className="activity-list">
                      <li>Imported external CSV from Google Cloud Storage</li>
                      <li>Created BigQuery tables using LOAD DATA OVERWRITE</li>
                      <li>Mapped US states to regions and subregions</li>
                    </ul>
                  </div>

                  <div className="activity-card">
                    <h4 className="activity-title">Data Transformation</h4>
                    <ul className="activity-list">
                      <li>Advanced SQL joins to enrich loan records</li>
                      <li>Nested field extraction using dot notation</li>
                      <li>Deduplication using DISTINCT operations</li>
                    </ul>
                  </div>

                  <div className="activity-card">
                    <h4 className="activity-title">Data Modeling</h4>
                    <ul className="activity-list">
                      <li>Built reusable datasets with CREATE TABLE AS SELECT</li>
                      <li>Aggregated metrics using GROUP BY and SUM</li>
                      <li>Generated loan_with_region master table</li>
                    </ul>
                  </div>
                </div>

                <div className="cta-group">
                  <button className="primary-button">
                    <Play className="button-icon" />
                    View SQL Queries
                  </button>
                  <button className="secondary-button">
                    <ExternalLink className="button-icon" />
                    BigQuery Console
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Part 2 Tab */}
        {activeTab === 'part2' && (
          <div 
            ref={part2Ref}
            className={`content-panel ${part2InView ? 'animate-in' : 'animate-out'}`}
          >
            <div className="part-layout">
              <div className="part-content">
                <div className="part-header">
                  <BarChart3 className="part-icon" />
                  <div className="part-title-group">
                    <h3 className="part-title">Looker Data Visualization</h3>
                    <p className="part-subtitle">Analyze & Activate</p>
                  </div>
                </div>

                <div className="dashboard-features">
                  <div className="feature-card featured">
                    <div className="feature-header">
                      <DollarSign className="feature-icon" />
                      <h4 className="feature-title">Total Outstanding Loan Amount</h4>
                    </div>
                    <p className="feature-desc">
                      Real-time monitoring with conditional alerts when portfolio exceeds $3B threshold
                    </p>
                    <div className="feature-badge">Risk Management</div>
                  </div>

                  <div className="feature-card">
                    <div className="feature-header">
                      <Activity className="feature-icon" />
                      <h4 className="feature-title">Loan Status Distribution</h4>
                    </div>
                    <p className="feature-desc">
                      Interactive pie charts showing loan health across Current, Late, and Defaulted statuses
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-header">
                      <MapPin className="feature-icon" />
                      <h4 className="feature-title">Geographic Analysis</h4>
                    </div>
                    <p className="feature-desc">
                      Top 10 states by loan count with regional concentration insights
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-header">
                      <Users className="feature-icon" />
                      <h4 className="feature-title">Customer Segmentation</h4>
                    </div>
                    <p className="feature-desc">
                      High-income customer analysis with homeownership and interest rate correlation
                    </p>
                  </div>
                </div>

                <div className="dashboard-specs">
                  <div className="spec-item">
                    <span className="spec-label">Refresh Rate:</span>
                    <span className="spec-value">Hourly Auto-Refresh</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Interactivity:</span>
                    <span className="spec-value">Cross-filtering Enabled</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Data Source:</span>
                    <span className="spec-value">BigQuery Live Connection</span>
                  </div>
                </div>

                <div className="cta-group">
                  <button className="primary-button">
                    <BarChart3 className="button-icon" />
                    View Live Dashboard
                  </button>
                  <button className="secondary-button">
                    <ExternalLink className="button-icon" />
                    Looker Studio
                  </button>
                </div>
              </div>

              <div className="part-visual">
                <div className="dashboard-preview">
                  <div className="preview-header">
                    <div className="preview-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <span className="preview-title">Loan Insights Dashboard</span>
                  </div>
                  <div className="preview-content">
                    <div className="chart-placeholder large">
                      <TrendingUp className="chart-icon" />
                      <span>$3.2B Total Outstanding</span>
                    </div>
                    <div className="chart-grid">
                      <div className="chart-placeholder">
                        <Activity className="chart-icon" />
                        <span>Status Distribution</span>
                      </div>
                      <div className="chart-placeholder">
                        <MapPin className="chart-icon" />
                        <span>Geographic Heat Map</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div 
        ref={statsRef}
        className={`stats-section ${statsInView ? 'animate-in' : 'animate-out'}`}
      >
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card"
              style={{ animationDelay: stat.delay }}
            >
              <div className="stat-icon-container">
                <stat.icon className="stat-icon" />
              </div>
              <div className="stat-content">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .capstone-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
        //   background: #0b1117;
          color: #ffffff;
          padding: 6rem 2rem 4rem;
          overflow: hidden;
        }

        /* Animated Background */
        .background-animation {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }

        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 20%, rgba(0, 204, 204, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 40%, rgba(0, 204, 204, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(0, 204, 204, 0.08) 0%, transparent 50%);
          animation: floatParticles 20s ease-in-out infinite;
        }

        .grid-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 204, 204, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 204, 204, 0.03) 1px, transparent 1px);
          background-size: 100px 100px;
          animation: gridPulse 4s ease-in-out infinite;
        }

        @keyframes floatParticles {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(10px) rotate(-1deg); }
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }

        /* Header Styles */
        .section-header {
          position: relative;
          z-index: 2;
          text-align: center;
          margin-bottom: 4rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 204, 204, 0.1);
          border: 1px solid rgba(0, 204, 204, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .badge-icon {
          width: 1rem;
          height: 1rem;
          color: #00cccc;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #00cccc 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 40px rgba(0, 204, 204, 0.3);
        }

        .title-highlight {
          position: relative;
        }

        .title-highlight::after {
          content: '';
          position: absolute;
          bottom: -0.2rem;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, transparent, #00cccc, transparent);
          animation: highlightGlow 2s ease-in-out infinite;
        }

        @keyframes highlightGlow {
          0%, 100% { opacity: 0.5; transform: scaleX(0.8); }
          50% { opacity: 1; transform: scaleX(1); }
        }

        .section-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Tab Navigation */
        .tab-navigation {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 16px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 204, 204, 0.1);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 3rem;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 500;
          position: relative;
          overflow: hidden;
        }

        .tab-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 204, 204, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .tab-button:hover::before {
          left: 100%;
        }

        .tab-button:hover {
          border-color: rgba(0, 204, 204, 0.3);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .tab-button.active {
          background: rgba(0, 204, 204, 0.1);
          border-color: #00cccc;
          color: #00cccc;
          box-shadow: 0 0 20px rgba(0, 204, 204, 0.2);
        }

        .tab-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        /* Content Container */
        .content-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
        }

        .content-panel {
          min-height: 600px;
        }

        /* Overview Styles */
        .overview-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .project-context {
          background: rgba(255, 255, 255, 0.02);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(0, 204, 204, 0.1);
          margin-bottom: 2rem;
          backdrop-filter: blur(20px);
        }

        .context-title {
          color: #00cccc;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .context-description {
          line-height: 1.7;
          opacity: 0.9;
        }

        .tech-stack {
          background: rgba(255, 255, 255, 0.02);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(0, 204, 204, 0.1);
          backdrop-filter: blur(20px);
        }

        .stack-title {
          color: #00cccc;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .tech-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(0, 204, 204, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(0, 204, 204, 0.1);
          transition: all 0.3s ease;
        }

        .tech-card:hover {
          background: rgba(0, 204, 204, 0.1);
          border-color: rgba(0, 204, 204, 0.3);
          transform: translateY(-2px);
        }

        .tech-icon {
          font-size: 1.5rem;
        }

        .tech-info {
          display: flex;
          flex-direction: column;
        }

        .tech-name {
          font-weight: 600;
          color: #ffffff;
        }

        .tech-category {
          font-size: 0.875rem;
          opacity: 0.7;
        }

        .business-impact {
          background: rgba(255, 255, 255, 0.02);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(0, 204, 204, 0.1);
          backdrop-filter: blur(20px);
          position: sticky;
          top: 2rem;
        }

        .impact-title {
          color: #00cccc;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .impact-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .impact-item:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .impact-icon-container {
          flex-shrink: 0;
          width: 3rem;
          height: 3rem;
          background: rgba(0, 204, 204, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 204, 204, 0.2);
        }

        .impact-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #00cccc;
        }

        .impact-name {
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .impact-desc {
          font-size: 0.875rem;
          line-height: 1.5;
          opacity: 0.8;
          margin-bottom: 0.5rem;
        }

        .impact-result {
          font-size: 0.75rem;
          color: #00cccc;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Part Layout */
        .part-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .part-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .part-icon {
          width: 3rem;
          height: 3rem;
          color: #00cccc;
          padding: 0.5rem;
          background: rgba(0, 204, 204, 0.1);
          border-radius: 12px;
          border: 1px solid rgba(0, 204, 204, 0.2);
        }

        .part-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .part-subtitle {
          color: #00cccc;
          font-size: 1rem;
          opacity: 0.8;
        }

        /* Data Flow Diagram */
        .visual-container {
          background: rgba(255, 255, 255, 0.02);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(0, 204, 204, 0.1);
          backdrop-filter: blur(20px);
        }

        .data-flow-diagram {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .flow-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
          min-width: 100px;
        }

        .step-icon {
          width: 4rem;
          height: 4rem;
          background: rgba(0, 204, 204, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          border: 2px solid rgba(0, 204, 204, 0.3);
          animation: stepPulse 2s ease-in-out infinite;
        }

        @keyframes stepPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0, 204, 204, 0.4); }
          50% { box-shadow: 0 0 0 10px rgba(0, 204, 204, 0); }
        }

        .flow-arrow {
          color: #00cccc;
          width: 1.5rem;
          height: 1.5rem;
          opacity: 0.6;
        }

        /* Activities Grid */
        .activities-grid {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .activity-card {
          background: rgba(255, 255, 255, 0.02);
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid rgba(0, 204, 204, 0.1);
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .activity-card:hover {
          background: rgba(0, 204, 204, 0.05);
          border-color: rgba(0, 204, 204, 0.3);
          transform: translateY(-2px);
        }

        .activity-title {
          color: #00cccc;
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .activity-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .activity-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.5;
          opacity: 0.9;
        }

        .activity-list li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #00cccc;
          font-size: 0.75rem;
        }

        /* Dashboard Features */
        .dashboard-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.02);
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid rgba(0, 204, 204, 0.1);
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00cccc, transparent);
          transition: left 0.5s ease;
        }

        .feature-card:hover::before {
          left: 100%;
        }

        .feature-card:hover {
          background: rgba(0, 204, 204, 0.05);
          border-color: rgba(0, 204, 204, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 10px 40px rgba(0, 204, 204, 0.1);
        }

        .feature-card.featured {
          background: rgba(0, 204, 204, 0.05);
          border-color: rgba(0, 204, 204, 0.3);
          box-shadow: 0 0 30px rgba(0, 204, 204, 0.1);
        }

        .feature-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .feature-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #00cccc;
        }

        .feature-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #ffffff;
        }

        .feature-desc {
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 1rem;
        }

        .feature-badge {
          display: inline-block;
          background: rgba(0, 204, 204, 0.2);
          color: #00cccc;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Dashboard Specs */
        .dashboard-specs {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          border: 1px solid rgba(0, 204, 204, 0.1);
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .spec-label {
          font-size: 0.875rem;
          opacity: 0.7;
        }

        .spec-value {
          font-weight: 600;
          color: #00cccc;
        }

        /* Dashboard Preview */
        .dashboard-preview {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(0, 204, 204, 0.1);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(20px);
        }

        .preview-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: rgba(0, 204, 204, 0.05);
          border-bottom: 1px solid rgba(0, 204, 204, 0.1);
        }

        .preview-dots {
          display: flex;
          gap: 0.5rem;
        }

        .preview-dots span {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background: rgba(0, 204, 204, 0.3);
        }

        .preview-title {
          font-size: 0.875rem;
          font-weight: 500;
          color: #00cccc;
        }

        .preview-content {
          padding: 2rem;
        }

        .chart-placeholder {
          background: rgba(0, 204, 204, 0.05);
          border: 1px dashed rgba(0, 204, 204, 0.3);
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-align: center;
          margin-bottom: 1rem;
        }

        .chart-placeholder.large {
          min-height: 150px;
          background: rgba(0, 204, 204, 0.1);
        }

        .chart-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .chart-icon {
          width: 2rem;
          height: 2rem;
          color: #00cccc;
          opacity: 0.7;
        }

        /* CTA Buttons */
        .cta-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .primary-button, .secondary-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .primary-button {
          background: linear-gradient(135deg, #00cccc, #00b3b3);
          color: #0b1117;
          box-shadow: 0 4px 20px rgba(0, 204, 204, 0.3);
        }

        .primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 204, 204, 0.4);
        }

        .secondary-button {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          border: 1px solid rgba(0, 204, 204, 0.3);
        }

        .secondary-button:hover {
          background: rgba(0, 204, 204, 0.1);
          border-color: #00cccc;
          transform: translateY(-2px);
        }

        .button-icon {
          width: 1.125rem;
          height: 1.125rem;
        }

        /* Stats Section */
        .stats-section {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(0, 204, 204, 0.1);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(0, 204, 204, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(0, 204, 204, 0.05);
          border-color: rgba(0, 204, 204, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 10px 40px rgba(0, 204, 204, 0.1);
        }

        .stat-icon-container {
          flex-shrink: 0;
          width: 4rem;
          height: 4rem;
          background: rgba(0, 204, 204, 0.1);
          border: 1px solid rgba(0, 204, 204, 0.2);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon {
          width: 2rem;
          height: 2rem;
          color: #00cccc;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: #00cccc;
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          opacity: 0.8;
          line-height: 1.3;
        }

        /* Animations */
        .animate-in {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-out {
          opacity: 0;
          transform: translateY(40px);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .overview-grid, .part-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .business-impact {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .capstone-section {
            padding: 4rem 1rem 2rem;
          }

          .tab-navigation {
            flex-direction: column;
            gap: 0.5rem;
          }

          .tab-button {
            justify-content: center;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .dashboard-features {
            grid-template-columns: 1fr;
          }

          .chart-grid {
            grid-template-columns: 1fr;
          }

          .cta-group {
            flex-direction: column;
          }

          .primary-button, .secondary-button {
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .dashboard-specs {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .data-flow-diagram {
            flex-direction: column;
          }

          .flow-arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </section>
  );
}