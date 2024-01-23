import React from 'react';
import styles from './Modal.module.css'; 

const Modal = ({ isOpen, onClose, title, images, description, tags }) => {
    return (
        <>
            {isOpen ? (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <span className={styles.closeModalButton} onClick={onClose}>
                            &times;
                        </span>
                        <h2>{title}</h2>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`${title} - ${index}`} />
                        ))}
                        <p>{description}</p>
                        <div>
                            {tags.map((tag, index) => (
                                <span key={index} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {/* Add more content elements as needed */}
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Modal;
