import React, { HTMLAttributes } from "react";

interface DivProps extends HTMLAttributes<HTMLElement> {}

const Div: React.FC<DivProps> = (props) => {
  return <caption {...props} />;
};

export default Div;
