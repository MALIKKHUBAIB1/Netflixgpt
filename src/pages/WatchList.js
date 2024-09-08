import React from "react";
import WatchListItem from "../Component/WatchListItem";
import { useSelector } from "react-redux";

function WatchList() {
  const watchItem = useSelector((state) => state.watch?.watchList);
  console.log(watchItem);
  return (
    <div className="p-10 bg-slate-900 overflow-y-auto min-h-screen">
      {watchItem.length === 0 && (
        <div className="text-white text-4xl my-14 flex justify-center items-center">
          WatchList is Empty
        </div>
      )}
      {watchItem.map((item) => {
        return <WatchListItem key={item.id} movie={item} />;
      })}
    </div>
  );
}

export default WatchList;
