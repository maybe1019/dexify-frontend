import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

export default function LazyLoadingSpinner() {
  return (
    <div className="flex h-screen bg-bg-1 dark:bg-bg-1-dark items-center justify-center">
      <InfinitySpin width="200" color="#d946ef" />
    </div>
  );
}
