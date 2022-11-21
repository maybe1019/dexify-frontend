import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfirmDialogModal from '../../components/ConfirmDialogModal';
import { DialogType } from '../../helpers/enums';
import utils from '../../helpers/utils';
import { RootState, useAppDispatch } from '../../store';
import { createOrUpdateMyAccount } from '../../store/reducers/myAccountSlice';

const Account = () => {
  const myAccount = useSelector((state: RootState) => state.myAccount.value);
  const { account, library } = useEthers();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    utils.pageMeta.handelTitle(pathname);
  }, [pathname]);

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
    } else {
      setImageUrl('');
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
    <div className="bg-bg-2 shadow-lg max-w-2xl mx-auto rounded-xl p-6 dark:bg-bg-2-dark">
      <h3 className="text-2xl font-[500] py-2">My Account</h3>
      <div
        className="account-avatar m-2 relative overflow-hidden"
        onDragEnter={handleDrag}
        onClick={() => {
          imageFileRef.current?.click();
        }}
      >
        {imageUrl !== '' && (
          <img
            src={imageUrl}
            alt="avatar"
            className=" absolute w-full h-full z-10 left-0 top-0"
          />
        )}
        Click or Drag and Drop your image.
        {dragActive && (
          <div
            className="account-avatar m-2 absolute z-20"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            Drop your file to upload
          </div>
        )}
      </div>
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
        className="p-2 outline-none border-2 w-full my-3 rounded text-gray-600 dark:bg-bg-2-dark dark:text-gray-400 dark:border-gray-600"
        value={account}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="account-input"
        value={newAccount.title}
        onChange={onChangeValue}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="account-input"
        value={newAccount.name}
        onChange={onChangeValue}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="account-input"
        value={newAccount.email}
        onChange={onChangeValue}
      />
      <textarea
        name="bio"
        placeholder="Bio"
        className="account-input"
        value={newAccount.bio}
        onChange={onChangeValue}
      />
      <button
        className=" mt-2 p-2 w-full bg-primary rounded-lg text-white hover:opacity-90"
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
