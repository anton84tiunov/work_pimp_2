import React, { HTMLAttributes } from "react";

interface TrProps extends HTMLAttributes<HTMLTableRowElement> {}

const Tr: React.FC<TrProps> = (props) => {
  return <tr {...props} />;
};

export default Tr;
