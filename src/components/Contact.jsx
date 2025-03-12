import { useState, useEffect } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the form data to a server
      console.log("Form submitted:", formData);
      
      // Show success message
      setFormStatus({ type: "success", message: "Message sent successfully! We'll be in touch soon." });
      
      // Reset form after submission
      setFormData({ name: "", email: "", message: "" });
      
      // Set a timeout to clear the message after 8 seconds
      setTimeout(() => {
        if (document.getElementById("formResponse")) {
          document.getElementById("formResponse").classList.add(styles.fadeOut);
          setTimeout(() => setFormStatus(null), 500);
        }
      }, 8000);
      
    } catch (error) {
      setFormStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const dismissMessage = () => {
    document.getElementById("formResponse").classList.add(styles.fadeOut);
    setTimeout(() => setFormStatus(null), 500);
  };

  // Cleanup timeout when component unmounts
  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      {/* Decorative elements */}
      <div className={`${styles.decorElement} ${styles.decorElement1}`}></div>
      <div className={`${styles.decorElement} ${styles.decorElement2}`}></div>
      
      <h2 className={styles.sectionTitle}>Get in Touch</h2>
      <p className={styles.sectionSubtitle}>Have a question or want to work together? Let's make it happen.</p>
      
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={`${styles.formGroup} ${styles.floatingLabel}`}>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder=" "
            required 
          />
          <label htmlFor="name">Your Name</label>
        </div>
        
        <div className={`${styles.formGroup} ${styles.floatingLabel}`}>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder=" "
            required 
          />
          <label htmlFor="email">Email Address</label>
        </div>
        
        <div className={`${styles.formGroup} ${styles.floatingLabel}`}>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder=" "
            required
          ></textarea>
          <label htmlFor="message">Your Message</label>
        </div>
        
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        
        {formStatus && (
          <div id="formResponse" className={`${styles.formResponse} ${styles[formStatus.type]}`}>
            {formStatus.message}
            <button 
              type="button" 
              className={styles.closeButton}
              onClick={dismissMessage}
              aria-label="Dismiss message"
            >
              ×
            </button>
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;