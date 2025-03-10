import React, { useState, useEffect, useRef } from 'react';
import styles from './certifications.module.css';
import certificationsData from '../json/certification';

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalActive, setIsModalActive] = useState(false);
  const [expandedView, setExpandedView] = useState(false);
  const [activeTab, setActiveTab] = useState('certifications');
  const [selectedSubcourse, setSelectedSubcourse] = useState(null);
  const [displayedItems, setDisplayedItems] = useState([]);
  const modalRef = useRef(null);
  const imageViewerRef = useRef(null);
  const cardsRef = useRef([]);

  // Directly use certifications and licenses from the data
  const certifications = certificationsData.certifications;
  const licenses = certificationsData.licenses;

  // Update displayed items whenever active tab changes
  useEffect(() => {
    // Make sure to update the displayed items immediately when tab changes
    setDisplayedItems(activeTab === 'certifications' ? certifications : licenses);
  }, [activeTab, certifications, licenses]);
  
  // Calculate display limit based on expanded view
  const displayLimit = expandedView ? displayedItems.length : 3;
  
  useEffect(() => {
    // Animation for cards - fixed to use refs instead of DOM queries
    const animateCards = () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
          }, 100 * index);
        }
      });
    };

    // Run animation when displayedItems changes
    if (displayedItems.length > 0) {
      // Reset refs array to match current number of cards
      cardsRef.current = cardsRef.current.slice(0, displayLimit);
      // Run animation after a short delay to ensure DOM is updated
      setTimeout(animateCards, 50);
    }

    // Modal handlers
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target) && isModalActive) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalActive, displayedItems, displayLimit]);

  const openModal = (certificate, subcourse = null) => {
    setSelectedCertificate(certificate);
    setSelectedSubcourse(subcourse);
    setTimeout(() => {
      setIsModalActive(true);
    }, 50);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalActive(false);
    setTimeout(() => {
      setSelectedCertificate(null);
      setSelectedSubcourse(null);
    }, 300);
    document.body.style.overflow = 'auto';
  };

  const findSubcourseCertificate = (credentialId) => {
    // Find the parent certificate that contains this subcourse
    for (const cert of certificationsData.certifications) {
      if (cert.subcourses) {
        const subcourse = cert.subcourses.find(sub => sub.credentialId === credentialId);
        if (subcourse) return { parentCert: cert, subcourse };
      }
    }
    return null;
  };

  const toggleExpandView = () => {
    setExpandedView(!expandedView);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No Expiry';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isExpired = (expiryDate) => {
    if (!expiryDate) return false;
    const today = new Date();
    const expiry = new Date(expiryDate);
    return today > expiry;
  };

  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      setImagePosition(prev => ({ x: prev.x + dx, y: prev.y + dy }));
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Reset expanded view when switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setExpandedView(false);
  };

  return (
    <section id="certifications" className={styles.certificationsSection}>
      <div className={styles.certificationsContainer}>
        <div className={styles.certificationsHeader}>
          <h2 className="section-title">Professional Credentials</h2>
          <div className={styles.tabsContainer}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'certifications' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('certifications')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Certifications
              <span className={styles.itemCount}>{certifications.length}</span>
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'licenses' ? styles.activeTab : ''}`}
              onClick={() => handleTabChange('licenses')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Licenses
              <span className={styles.itemCount}>{licenses.length}</span>
            </button>
          </div>
        </div>
        <div className={styles.certificationsContent}>
          <div className={styles.certificationsGrid}>
            {displayedItems.slice(0, displayLimit).map((certificate, index) => (
              <div
                key={certificate.id}
                className={styles.certificateCard}
                onClick={() => openModal(certificate)}
                ref={el => cardsRef.current[index] = el}
                style={{ opacity: 1, transform: 'translateY(0)' }} // Set initial visible state
              >
                <div className={styles.glowBorder}></div>
                <div className={styles.certificateImgContainer}>
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className={styles.certificateImg}
                  />
                  <div className={styles.certificateImgOverlay}></div>
                </div>
                <div className={styles.certificateContent}>
                  <h3 className={styles.certificateTitle}>{certificate.title}</h3>
                  <div className={styles.certificateInfo}>
                    <span className={styles.certificateOrg}>{certificate.organization}</span>
                  </div>
                  <div className={styles.certificateMeta}>
                    <span className={styles.certificateDate}>{formatDate(certificate.issueDate)}</span>
                    {certificate.subcourses && certificate.subcourses.length > 0 && (
                      <span className={styles.subcoursesBadge}>
                        {certificate.subcourses.length} Courses
                      </span>
                    )}
                  </div>
                  <div className={styles.certificateFooter}>
                    <div className={styles.credentialId}>
                      ID: {certificate.credentialId}
                    </div>
                    <div className={styles.viewDetails}>
                      View Details
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {displayedItems.length > 6 && (
            <div className={styles.viewMoreContainer}>
              <button className={styles.viewMoreButton} onClick={toggleExpandView}>
                {expandedView ? (
                  <>
                    <span>View Less</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 15l-6-6-6 6"></path>
                    </svg>
                  </>
                ) : (
                  <>
                    <span>View All</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Enhanced Certificate Modal */}
      {selectedCertificate && (
        <div className={`${styles.modalOverlay} ${isModalActive ? styles.active : ''}`}>
          <div className={styles.modalContainer} ref={modalRef}>
            <button className={styles.modalClose} onClick={closeModal}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6L18 18"></path>
              </svg>
            </button>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <div className={styles.modalTitleSection}>
                  <h3 className={styles.modalTitle}>
                    {selectedSubcourse ? selectedSubcourse.title : selectedCertificate.title}
                  </h3>
                  <div className={styles.modalOrganization}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"></path>
                      <rect x="3" y="19" width="18" height="2" rx="1"></rect>
                    </svg>
                    {selectedCertificate.organization}
                  </div>
                  <div className={styles.modalCredential}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    Credential ID: {selectedSubcourse ? selectedSubcourse.credentialId || 'N/A' : selectedCertificate.credentialId}
                  </div>
                </div>
              </div>
              {/* Changed from column to row for better space usage */}
              <div className={styles.modalFlexContainer}>
                <div className={styles.modalImageViewer}>
                  <div 
                    className={styles.modalImageWrapper}
                    ref={imageViewerRef}
                    style={{
                      cursor: zoomLevel > 1 ? 'grab' : 'default'
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                  >
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      className={styles.modalImageLarge}
                      style={{
                        transform: `scale(${zoomLevel}) translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                        transition: isDragging ? 'none' : 'transform 0.2s ease-out'
                      }}
                      draggable="false"
                    />
                  </div>
                  <div className={styles.imageControls}>
                    <button className={styles.imageControlBtn} onClick={handleZoomOut} title="Zoom Out">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </button>
                    <span className={styles.zoomLevel}>{Math.round(zoomLevel * 100)}%</span>
                    <button className={styles.imageControlBtn} onClick={handleZoomIn} title="Zoom In">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </button>
                    <button className={styles.imageControlBtn} onClick={handleZoomReset} title="Reset Zoom">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 2v6h-6"></path>
                        <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                        <path d="M3 22v-6h6"></path>
                        <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className={styles.modalBodyScrollable}>
                  <div className={styles.modalBody}>
                    {selectedCertificate.description && (
                      <div className={styles.modalSection}>
                        <h4 className={styles.modalSectionTitle}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                          Description
                        </h4>
                        <p className={styles.modalDescription}>
                          {selectedSubcourse?.description || selectedCertificate.description || 'No description available.'}
                        </p>
                      </div>
                    )}
                    {selectedCertificate.skills && selectedCertificate.skills.length > 0 && (
                      <div className={styles.modalSection}>
                        <h4 className={styles.modalSectionTitle}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                          </svg>
                          Skills
                        </h4>
                        <div className={styles.skillsList}>
                          {(selectedSubcourse?.skills || selectedCertificate.skills).map((skill, index) => (
                            <span key={index} className={styles.skillTag}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedCertificate.subcourses && selectedCertificate.subcourses.length > 0 && !selectedSubcourse && (
                      <div className={styles.modalSection}>
                        <h4 className={styles.modalSectionTitle}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                          </svg>
                          Included Courses
                        </h4>
                        <div className={styles.subcoursesList}>
                          {selectedCertificate.subcourses.map((subcourse, index) => (
                            <div 
                              key={index} 
                              className={styles.subcourseItem}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (subcourse.credentialId) {
                                  openModal(selectedCertificate, subcourse);
                                }
                              }}
                            >
                              <div className={styles.subcourseContent}>
                                <div className={styles.subcourseTitle}>{subcourse.title}</div>
                                {subcourse.completionDate && (
                                  <div className={styles.subcourseDate}>
                                    Completed: {formatDate(subcourse.completionDate)}
                                  </div>
                                )}
                              </div>
                              {subcourse.credentialId && (
                                <button className={styles.viewSubcourseBtn} title="View Course Details">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                  </svg>
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedSubcourse && (
                      <div className={styles.modalSection}>
                        <h4 className={styles.modalSectionTitle}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                          </svg>
                          Part of Certificate
                        </h4>
                        <div className={styles.parentCertificateInfo}>
                          <span 
                            className={styles.backToMainCertLink}
                            onClick={() => setSelectedSubcourse(null)}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M19 12H5"></path>
                              <path d="M12 19l-7-7 7-7"></path>
                            </svg>
                            Back to {selectedCertificate.title}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={styles.modalFooter}>
                    <a
                      href={selectedSubcourse?.credentialURL || selectedCertificate.credentialURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.credentialVerify}
                    >
                      Verify Credential
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <div
                      className={`${styles.validityTag} ${
                        isExpired(selectedCertificate.expiryDate) ? styles.expiredTag : ''
                      }`}
                    >
                      {isExpired(selectedCertificate.expiryDate) ? (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                          </svg>
                          Expired: {formatDate(selectedCertificate.expiryDate)}
                        </>
                      ) : selectedCertificate.expiryDate ? (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                          Valid until: {formatDate(selectedCertificate.expiryDate)}
                        </>
                      ) : (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                          No Expiration Date
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;