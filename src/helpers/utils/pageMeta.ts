export const handelTitle = (pathName: string) => {
  pathName = pathName.split('/')[1];
  if (!pathName) return;
  document.title =
    'Dexify - ' + pathName.charAt(0).toUpperCase() + pathName.slice(1);
};
