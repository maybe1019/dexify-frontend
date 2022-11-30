import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const ComponentSpinner = () => {
  return (
    <div className=" absolute left-0 top-0 w-full h-full flex items-center justify-center z-40 backdrop-blur-sm bg-[#0003]">
      <InfinitySpin width="150" color="#d946ef" />
    </div>
  );
};

export default ComponentSpinner;
