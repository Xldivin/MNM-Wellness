import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LinkComponent = React.forwardRef((props, ref) => {
  const {
    children,
    to,
    ...rest
  } = props;

  const handleClick = (event) => {
    event.preventDefault();
    const target = document.getElementById(to);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
});

export default LinkComponent;
