import React from "react";
import { IMAGE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTrailerId, toogleModal } from "../utils/Store/ModalSlice";

function Moviecard({ imageId, id }) {
  const dispatch = useDispatch();
  function handleMovieId(id) {
    dispatch(toogleModal({ showModal: true }));
    dispatch(getTrailerId(id));
  }
  return (
    <>
      <div className="w-52 pr-4" onClick={() => handleMovieId(id)}>
        <img
          src={IMAGE_URL + imageId}
          alt="movieCard"
          className="rounded-md cursor-pointer"
        />
      </div>
    </>
  );
}

export default Moviecard;
