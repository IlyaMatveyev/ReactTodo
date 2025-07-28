import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modalRoot");

export default function Modal({ children, isOpen, onClose, label }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>{label}</h3>
          <button className={styles.modalCloseBtn} onClick={onClose}>
            &times;
          </button>
        </div>

        {children}
      </div>
    </div>,
    modalRoot
  );
}
