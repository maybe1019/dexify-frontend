export const handelTitle = (pathName: string) => {
  pathName = pathName.split('/')[1];
  console.log(!pathName.length);
  if (!pathName.length) {
    document.title = 'Dexify';
    return;
  }
  document.title =
    pathName.charAt(0).toUpperCase() + pathName.slice(1) + ' | Dexify';
};
