import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import utils from '../../helpers/utils';

const Manage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    utils.pageMeta.handelTitle(pathname);
  }, [pathname]);
  return <div>Manage</div>;
};

export default Manage;
