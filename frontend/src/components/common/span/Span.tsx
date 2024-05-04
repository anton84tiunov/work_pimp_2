import React, { HTMLAttributes } from 'react';

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {}

const Span: React.FC<SpanProps> = (props) => {
  return <span {...props} />;
};

export default Span;