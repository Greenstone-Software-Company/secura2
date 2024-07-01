import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-xl font-bold">Secura</a>
        </Link>
        <div className="space-x-4">
          <Link href="/meeting">
            <a className="text-gray-300 hover:text-white">Meeting</a>
          </Link>
          <Link href="/poll">
            <a className="text-gray-300 hover:text-white">Poll</a>
          </Link>
          <Link href="/upload">
            <a className="text-gray-300 hover:text-white">Upload</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
