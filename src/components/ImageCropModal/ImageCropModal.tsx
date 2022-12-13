import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState, useCallback, useEffect } from 'react';
import Cropper, { Point, Area } from 'react-easy-crop';
import getCroppedImg from './cropImage';

type Props = {
  image: string;
  isOpen: boolean;
  onClose: () => void;
  onCrop: (cropImage: string) => void;
};

const ImageCropModal = ({ image, isOpen, onClose, onCrop }: Props) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [aspect, setAspect] = useState(0.2);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  useEffect(() => {
    setAspect(1.5);
    setTimeout(() => {
      setAspect(1);
    }, 500);
  }, [image]);

  const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const cropImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels as Area,
      );
      onCrop(croppedImage as string);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-bg-3-dark p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-[32px] font-medium my-2 text-black dark:text-white"
                >
                  Edit your avatar.
                </Dialog.Title>

                <div className="w-full h-[600px] overflow-hidden relative [&_*]:transition-none">
                  <Cropper
                    image={image}
                    crop={crop}
                    minZoom={0.5}
                    zoom={zoom}
                    aspect={aspect}
                    // cropSize={{ width: 200, height: 200 }}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                </div>

                <div className="flex justify-between my-6">
                  <div className="text-black dark:text-white">Zoom: </div>
                  <input
                    type="range"
                    min={0.5}
                    max={3}
                    step={0.05}
                    value={zoom}
                    onChange={(e) => setZoom(parseFloat(e.target.value))}
                    className="outline-none w-1/2"
                  />
                </div>

                <div className="mt-4 flex gap-6">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 dark:bg-red-600 px-4 py-2 text-sm font-medium text-red-900 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-500 dark:hover:text-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ml-auto"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 dark:bg-blue-600 px-4 py-2 text-sm font-medium text-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-500 dark:hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={cropImage}
                  >
                    Crop
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ImageCropModal;
