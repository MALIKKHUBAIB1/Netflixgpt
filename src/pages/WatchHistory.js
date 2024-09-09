import React from "react";
import WatchListItem from "../Component/WatchListItem";
import { useSelector } from "react-redux";

function WatchHistory() {
  const history = useSelector((state) => state?.history?.watchHistory);
  console.log(history);

  return (
    <div className="p-10 bg-slate-900 overflow-y-auto min-h-screen">
      {history?.length === 0 && (
        <div className="text-white text-4xl my-14 flex justify-center items-center">
          WatchList is Empty
        </div>
      )}
      {history?.length !== 0 &&
        history.map((historyItem) => {
          return <WatchListItem movie={historyItem} key={historyItem.id} />;
        })}
    </div>
  );
}

export default WatchHistory;
