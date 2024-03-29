import { XMarkIcon } from '@heroicons/react/24/solid';
import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ConfirmDialogModal from '../../components/ConfirmDialogModal';
import { DialogType } from '../../helpers/enums';
import { RootState, useAppDispatch } from '../../store';
import { createOrUpdateMyAccount } from '../../store/reducers/myAccountSlice';

const Account = () => {
  const myAccount = useSelector((state: RootState) => state.myAccount.value);
  const { account, library } = useEthers();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const imageFileRef = useRef<HTMLInputElement | null>(null);

  const [newAccount, setNewAccount] = useState<User>(myAccount);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const [imageUrl, setImageUrl] = useState<string>('');
  let imageFile: File;

  useEffect(() => {
    if (!account) {
      navigate('/');
    }
  }, [account]); //eslint-disable-line

  const onChangeValue = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    const newValue: any = { ...newAccount };
    newValue[name] = value;
    setNewAccount(newValue as User);
  };

  const handleDrag = function (e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  const handleFile = (files: FileList) => {
    if (files && files[0]) {
      imageFile = files[0];
      setImageUrl(URL.createObjectURL(files[0]));
    }
  };

  const handleUpdate = () => {
    if (newAccount.title === '') {
      return;
    }

    try {
      dispatch(
        createOrUpdateMyAccount({
          library: library as ethers.providers.JsonRpcProvider,
          file: imageFile,
          newAccount,
        }),
      );
    } catch (error) {
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="md:bg-white dark:md:bg-bg-2-dark rounded-3xl max-w-4xl px-4 lg:px-24 py-0 md:py-12 mx-auto my-20">
      <h1 className=" text-3xl lg:text-4xl my-8 text-center font-bold">
        My Account
      </h1>
      <div className="account-avatar relative" onDragEnter={handleDrag}>
        {imageUrl !== '' && (
          <button
            className="w-6 h-6 flex items-center justify-center rounded-full absolute right-[-10px] top-[-10px] z-20 bg-bg-1 dark:bg-bg-1-dark shadow-lg"
            onClick={() => setImageUrl('')}
          >
            <XMarkIcon width={16} className="hover:text-primary" />
          </button>
        )}
        <div
          className="w-full h-full account-avatar overflow-hidden"
          onClick={() => {
            imageFileRef.current?.click();
          }}
        >
          {imageUrl !== '' ? (
            <img
              src={imageUrl}
              alt="avatar"
              className="w-full h-full z-10 left-0 top-0"
            />
          ) : (
            'Click or Drag and Drop your image.'
          )}
        </div>
        {dragActive && (
          <div
            className="account-avatar absolute z-10 bg-gray-300 dark:bg-slate-800"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            Drop your file to upload
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 my-8">
        <input
          type="file"
          name="image"
          accept="image/png, image/jpeg"
          className=" hidden"
          onChange={handleChange}
          ref={imageFileRef}
        />
        <input
          type="text"
          readOnly
          className="bg-[#8881] rounded-lg p-4 sm:px-6 text-sm sm:text-lg outline-none lg:col-span-2 focus:shadow w-full"
          value={account}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="bg-[#8881] rounded-lg p-4 sm:px-6 text-sm sm:text-lg outline-none lg:col-span-2 focus:shadow w-full"
          value={newAccount.title}
          onChange={onChangeValue}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="bg-[#8881] rounded-lg p-4 sm:px-6 text-sm sm:text-lg outline-none lg:col-span-2 focus:shadow w-full"
          value={newAccount.name}
          onChange={onChangeValue}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="bg-[#8881] rounded-lg p-4 sm:px-6 text-sm sm:text-lg outline-none lg:col-span-2 focus:shadow w-full"
          value={newAccount.email}
          onChange={onChangeValue}
        />
        <textarea
          name="bio"
          placeholder="Bio"
          className=" resize-none bg-[#8881] rounded-lg p-4 sm:p-6 text-sm sm:text-lg outline-none w-full h-48 focus:shadow"
          value={newAccount.bio}
          onChange={onChangeValue}
        />
      </div>
      <button
        className="p-3 w-full bg-primary rounded-lg text-white hover:opacity-90"
        onClick={() => setIsDialogOpen(true)}
      >
        {myAccount.id ? 'Update Account' : 'Create Account'}
      </button>
      <ConfirmDialogModal
        isOpen={isDialogOpen}
        dialogType={
          myAccount.id ? DialogType.UPDATE_ACCOUNT : DialogType.CREATE_ACCOUNT
        }
        onCancel={() => setIsDialogOpen(false)}
        onConfirm={handleUpdate}
      />
    </div>
  );
};

export default Account;
