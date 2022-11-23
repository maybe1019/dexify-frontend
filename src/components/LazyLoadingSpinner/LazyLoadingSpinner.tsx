import React from 'react';

export default function LazyLoadingSpinner() {
  return (
    <div className="flex h-screen bg-bg-1-dark">
      <img src="/images/spinner.jpg" alt="spinner" className="w-24 m-auto" />
    </div>
  );
}
