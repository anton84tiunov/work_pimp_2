import React, { LiHTMLAttributes } from 'react';

interface LiProps extends LiHTMLAttributes<HTMLLIElement> {}

const Li: React.FC<LiProps> = (props) => {
  return <li {...props} />;
};

export default Li;