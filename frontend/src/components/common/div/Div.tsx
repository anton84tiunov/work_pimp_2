import React, { HTMLAttributes } from 'react';

interface DivProps extends HTMLAttributes<HTMLDivElement> {}

const Div: React.FC<DivProps> = (props) => {
  return <div {...props} />;
};

export default Div;