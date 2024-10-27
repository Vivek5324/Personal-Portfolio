import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Vivek Rathod. All rights reserved.</p>
      </div>
    </footer>
  );
}