import React from 'react';

const Footer = (props: {bgColor: string}) => (
  <footer className={"bg-" + props.bgColor + " p-0 m-0 text-center"} data-testid="footer" style={{zIndex: 2}}>
    {/* <div className="logo" data-testid="footer-logo" />
    <p data-testid="footer-text">
      Sample project provided by <a href="https://auth0.com">Auth0</a>
    </p> */}
  </footer>
);

export default Footer;
