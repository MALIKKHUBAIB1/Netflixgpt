import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { getTrailerId } from "../utils/Store/ModalSlice";

function Modal({ handleBackdropClick, children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    // Prevent scrolling on the body when the modal is open
    document.body.style.overflow = "hidden";

    // Clean up: allow scrolling again when the modal is closed
    return () => {
      document.body.style.overflow = "auto";
      dispatch(getTrailerId(null));
    };
  }, [dispatch]);

  const modal = (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-blue-900 bg-opacity-50 scro"
      onClick={handleBackdropClick}
    >
      {children}
    </div>
  );

  return createPortal(modal, document.getElementById("modal-root"));
}

export default Modal;
