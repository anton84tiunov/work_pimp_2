import React, { HTMLAttributes } from "react";

interface TdProps extends HTMLAttributes<HTMLTableCellElement> {}

const Td: React.FC<TdProps> = (props) => {
  return <td {...props} />;
};

export default Td;
