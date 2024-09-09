import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrailerId, toogleModal } from "../utils/Store/ModalSlice";
import Modal from "./Modal";
function VideoDetailPage() {
  const keyId = useSelector((state) => state?.modal?.keyId);
  const dispatch = useDispatch();
  function closeModalHandler() {
    dispatch(toogleModal({ showModal: false }));
    dispatch(getTrailerId(null));
  }
  const handleBackdropClick = (e) => {
    // Close the modal if clicking on the backdrop
    if (e.target === e.currentTarget) {
      closeModalHandler();
    }
  };
  if (!keyId) return null; // Ensure the modal only renders if keyId exists

  return (
    <Modal handleBackdropClick={handleBackdropClick}>
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
    </Modal>
  );
}

export default VideoDetailPage;
