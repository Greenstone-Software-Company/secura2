import React from 'react';
import Link from 'next/link';

const styles = {
  Header: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '70px',
    backgroundColor: '#0d111a',
    borderBottom: '1px solid #ffffff',
    boxSizing: 'border-box' as 'border-box', // Explicitly cast as 'border-box'
    boxShadow: '0px 2px 10px rgba(3,3,3,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    zIndex: 1000, /* Ensure the Navbar stays on top */
  },
  Logo: {
    display: 'flex',
    alignItems: 'center',
  },
  LogoImage: {
    width: '50px',
    height: '50px',
  },
  NavLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  },
  Link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

const Navbar = () => {
  return (
    <div style={styles.Header}>
      <div style={styles.Logo}>
        <Link href="/">
          <img style={styles.LogoImage} src="/icons/secura.png" alt="Secura Logo" />
        </Link>
      </div>
      <div style={styles.NavLinks}>
        <Link style={styles.Link} href="/home">Home</Link>
        <Link style={styles.Link} href="/about">About Us</Link>
        <Link style={styles.Link} href="/features">Features</Link>
        <Link style={styles.Link} href="/contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
