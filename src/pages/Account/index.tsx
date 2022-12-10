import { XMarkIcon } from '@heroicons/react/24/solid';
import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ConfirmDialogModal from '../../components/ConfirmDialogModal';
import { DialogType, PageName, ThunkStatus } from '../../helpers/enums';
import { RootState, useAppDispatch } from '../../store';
import {
  createOrUpdateMyAccount,
  logoutTwitterUser,
} from '../../store/reducers/myAccountSlice';
import { setPageLoading } from '../../store/reducers/pageLoadingSlice';
import { ReactComponent as TwitterIcon } from '../../assets/images/svg/twitter-icon.svg';
import { twitterLogin } from '../../api/twitter';
import PageMeta from '../../layouts/PageMeta';

const Account = () => {
  const myAccountState = useSelector((state: RootState) => state.myAccount);
  const { account, library } = useEthers();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // page loading
  dispatch(setPageLoading(myAccountState.status === ThunkStatus.PENDING));

  const imageFileRef = useRef<HTMLInputElement | null>(null);

  const [newAccount, setNewAccount] = useState<User>(myAccountState.value);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File | undefined>();

  const [imageUrl, setImageUrl] = useState<string>(
    myAccountState.value.image || myAccountState.value.twitterImage,
  );

  useEffect(() => {
    setNewAccount(myAccountState.value);
  }, [myAccountState]);
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
      setImageFile(files[0]);
      setImageUrl(URL.createObjectURL(files[0]));
    }
  };

  const handleUpdate = () => {
    if (newAccount.title === '') {
      return;
    }

    console.log(imageFile);

    dispatch(
      createOrUpdateMyAccount({
        library: library as ethers.providers.JsonRpcProvider,
        file: imageFile,
        newAccount,
      }),
    );
    setIsDialogOpen(false);
  };

  const onTwitterLogin = () => {
    localStorage.setItem('twitter_login_location', 'account');
    twitterLogin();
  };

  const onTwitterLogout = () => {
    dispatch(logoutTwitterUser(library as ethers.providers.JsonRpcProvider));
  };

  return (
    <>
      <PageMeta pageName={PageName.ACCOUNT} />
      <div className="md:bg-white dark:md:bg-bg-2-dark rounded-3xl max-w-4xl px-4 lg:px-24 py-0 md:py-12 mx-auto my-20">
        <h1 className=" text-3xl lg:text-4xl my-8 text-center font-bold">
          My Account
        </h1>
        <div className="account-avatar relative" onDragEnter={handleDrag}>
          {imageUrl !== '' && (
            <button
              className="w-6 h-6 flex items-center justify-center rounded-full absolute right-[-10px] top-[-10px] z-20 bg-bg-1 dark:bg-bg-1-dark shadow-lg"
              onClick={() => {
                setImageUrl('');
                setImageFile(undefined);
              }}
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
          {myAccountState.value.twitterScreenName ? (
            <div className=" flex items-center gap-4 relative">
              <img
                src={myAccountState.value.twitterImage}
                alt="twitter-user"
                className="w-10 h-10 rounded-full"
              />
              <TwitterIcon
                width={16}
                height={16}
                className="bg-bg-2 dark:bg-bg-2-dark rounded-full absolute left-7 top-0 border-2 border-bg-2 dark:border-bg-2-dark"
              />
              <div className="font-bold text-lg text-[#03a9f4]">
                @{myAccountState.value.twitterName}
              </div>
              <button
                onClick={onTwitterLogout}
                className="ml-auto px-4 py-2 bg-red-500/50 dark:bg-red-900/50 rounded-lg font-bold text-slate-900 dark:text-slate-200 hover:bg-red-400 dark:hover:bg-red-900"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <div className=" flex items-center gap-4">
              <TwitterIcon fill="gray" width={28} height={28} />
              <div className=" text-gray-600 font-bold text-lg">Twitter</div>
              <button
                onClick={onTwitterLogin}
                className="ml-auto px-4 py-2 bg-blue-500/50 dark:bg-blue-900/50 rounded-lg font-bold text-slate-800 dark:text-slate-200 hover:bg-blue-400 dark:hover:bg-blue-900"
              >
                Connect
              </button>
            </div>
          )}
        </div>
        <button
          className="p-3 w-full bg-primary rounded-lg text-white hover:opacity-90"
          onClick={() => setIsDialogOpen(true)}
        >
          {myAccountState.value.id ? 'Update Account' : 'Create Account'}
        </button>
        <ConfirmDialogModal
          isOpen={isDialogOpen}
          dialogType={
            myAccountState.value.id
              ? DialogType.UPDATE_ACCOUNT
              : DialogType.CREATE_ACCOUNT
          }
          onCancel={() => setIsDialogOpen(false)}
          onConfirm={handleUpdate}
        />
      </div>
    </>
  );
};

export default Account;
