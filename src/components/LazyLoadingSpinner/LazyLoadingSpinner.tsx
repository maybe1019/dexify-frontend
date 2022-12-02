import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

export default function LazyLoadingSpinner() {
  return (
    <div
      className="flex h-screen items-center justify-center"
      style={{ backgroundColor: 'var(--theme-bg-color)' }}
    >
      <InfinitySpin width="200" color="#d946ef" />
    </div>
  );
}
