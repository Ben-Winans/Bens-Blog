import React, { useState } from 'react';
import styles from './Modal.module.css'; 

const Modal = ({ showModal, setShowModal, content }) => {
    return (
        <>
            {showModal ? (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <span className={styles.closeModalButton} onClick={() => setShowModal(false)}>
                            &times;
                        </span>
                        <h2>{content.title}</h2>
                        <img src={content.image} alt={content.title} />
                        {content.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        {/* Add more content elements */}
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Modal;
