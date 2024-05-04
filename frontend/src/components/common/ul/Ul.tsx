import React, { HTMLAttributes } from 'react';

interface UlProps extends HTMLAttributes<HTMLUListElement> {}

const Ul: React.FC<UlProps> = (props) => {
  return <ul {...props} />;
};

export default Ul;