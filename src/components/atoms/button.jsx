import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

function Button({ children, ...props }) {
  return (
    <BootstrapButton
      {...props}
      style={{ backgroundColor: '#6c757d', borderColor: '#6c757d', ...props.style }}
    >
      {children}
    </BootstrapButton>
  );
}

export default Button;