import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, title, titleImages, content }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        // Cleanup function
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleClose = (e) => {
        if (e.target.classList.contains(styles.modalOverlay)) {
            onClose();
        }
    };

    const renderTitleImages = () => {
        return titleImages.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={`${title} - ${index}`} className={styles.modalTitleImage} />
        ));
    };

    const parseBoldText = (text) => {
        const parts = text.split(/(\*.*?\*)/).filter(part => part); 
      
        return parts.map((part, index) => {
          if (part.startsWith('*') && part.endsWith('*')) {
            return <strong key={index}>{part.slice(2, -2)}</strong>; 
          }
          return part; 
        });
      };

    const renderContent = () => {
        return content && content.map((item, index) => (
            <div key={index}>
                {item.subHeading && <h3 className={styles.modalSubheading}>{parseBoldText(item.subHeading)}</h3>}
                {item.image && <img src={item.image} alt={`Section ${index}`} className={styles.modalImage} />}
                {item.body && item.body.map((paragraph, idx) => (
                    <p key={idx} className={styles.modalBody}>{parseBoldText(paragraph)}</p>
                ))}
            </div>
        ));
    };

    return (
        <>
            {isOpen && (
                <div className={styles.modalOverlay} onClick={handleClose}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <span className={styles.closeModalButton} onClick={onClose}>&times;</span>
                        <h2>{title}</h2>
                        {renderTitleImages()}
                        {renderContent()}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
