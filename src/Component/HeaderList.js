import React from "react";

function HeaderList({ listName }) {
  return (
    <ul className="flex m-1">
      <li className="m-2  hover:text-slate-500 cursor-pointer">{listName}</li>
    </ul>
  );
}

export default HeaderList;
