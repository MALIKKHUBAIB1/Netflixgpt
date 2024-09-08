import React, { memo } from "react";
import { Link } from "react-router-dom";

const HeaderList = memo(function HeaderList({ listName, path }) {
  return (
    <ul className="flex m-1">
      <Link
        to={`${path.replaceAll(" ", "").toLowerCase()}`}
        className="m-2  hover:text-slate-500 cursor-pointer"
      >
        {listName}
      </Link>
    </ul>
  );
});

export default HeaderList;
