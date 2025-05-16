import React from "react";
import "../styles/ConfirmModal.css";

const ConfirmModal = ({ open, onClose, onConfirm, message }) => {
  if (!open) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="confirm-btn">Yes</button>
          <button onClick={onClose} className="cancel-btn">No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;