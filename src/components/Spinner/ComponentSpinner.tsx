import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const ComponentSpinner = () => {
  return (
    <div className=" absolute left-0 top-0 w-full h-full flex items-center justify-center z-40 backdrop-blur-sm bg-[#0003]">
      <RotatingLines
        strokeColor="#d946ef"
        strokeWidth="4"
        animationDuration="0.7"
        width="50"
        visible={true}
      />
    </div>
  );
};

export default ComponentSpinner;
