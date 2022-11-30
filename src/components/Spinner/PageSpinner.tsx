import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const PageSpinner = () => {
  return (
    <div className=" fixed left-0 top-0 w-screen h-screen flex items-center justify-center z-50 backdrop-blur-sm bg-[#0003]">
      <InfinitySpin width="200" color="#d946ef" />
    </div>
  );
};

export default PageSpinner;
