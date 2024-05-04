import React, { HTMLAttributes } from "react";

interface TableProps extends HTMLAttributes<HTMLTableElement> {}

const Table: React.FC<TableProps> = (props) => {
  return <table {...props} />;
};

export default Table;
