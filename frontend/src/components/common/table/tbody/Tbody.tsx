import React, { HTMLAttributes } from "react";

interface TbodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

const Tbody: React.FC<TbodyProps> = (props) => {
  return <tbody {...props} />;
};

export default Tbody;
