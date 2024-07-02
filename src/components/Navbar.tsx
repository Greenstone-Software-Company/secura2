import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav>
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="font-bold">
        Secura
      </Link>
      <div className="flex space-x-4">
        <Link href="/meeting" className="text-white">
          Meeting
        </Link>
        <Link href="/poll" className="text-white">
          Poll
        </Link>
        <Link href="/upload" className="text-white">
          Upload
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
