import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { toogleModal } from "../utils/Store/ModalSlice";

function Modal() {
  const keyId = useSelector((state) => state?.modal?.keyId);
  const dispatch = useDispatch();

  function closeModalHandler() {
    dispatch(toogleModal({ showModal: false }));
  }
  useEffect(() => {
    // Prevent scrolling on the body when the modal is open
    document.body.style.overflow = "hidden";

    // Clean up: allow scrolling again when the modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!keyId) return null; // Ensure the modal only renders if keyId exists

  const handleBackdropClick = (e) => {
    // Close the modal if clicking on the backdrop
    if (e.target === e.currentTarget) {
      closeModalHandler();
    }
  };

  if (!keyId) return null; // Ensure the modal only renders if keyId exists

  const modal = (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-blue-900 bg-opacity-50 scro"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-lg w-full max-w-full h-auto">
        <button
          className="absolute top-4 right-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
          onClick={closeModalHandler}
        >
          X
        </button>
        <iframe
          className="w-full h-[95vh] aspect-video"
          src={`https://www.youtube.com/embed/${keyId}?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById("modal-root"));
}

export default Modal;
