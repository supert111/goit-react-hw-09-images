import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

 const modalRoot = document.querySelector('#modal-root');

 export default function Modal ({children, onClose}) {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    })
    // componentDidMount() {
    //     window.addEventListener('keydown', this.handleKeyDown);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('keydown', this.handleKeyDown);
    // }

    const handleKeyDown = e => {
        if(e.code === 'Escape') {
            onClose();
        }
    }

    const handleBackdropClick = e => {
        if(e.currentTarget === e.target) {
            onClose();
        }
    }


        return createPortal (
            <div className={styles.Overlay} onClick={handleBackdropClick}>
                <div className={styles.Modal}>
                    { children }
                </div>
            </div>,
             modalRoot,
        )
    }


Modal.propTypes = {
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.node,
}