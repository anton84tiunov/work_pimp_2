import React, { HTMLAttributes } from "react";

interface ThProps extends HTMLAttributes<HTMLTableCellElement> {}

const Th: React.FC<ThProps> = (props) => {
  return <th {...props} />;
};

export default Th;
