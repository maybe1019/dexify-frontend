import React from 'react';
import { Helmet } from 'react-helmet';
import { PageName } from '../helpers/enums';
import untypedData from '../helpers/data/page-metadata.json';
const metadata: any = untypedData;

type Props = {
  pageName?: PageName;
  title?: string;
  isAlert?: boolean;
};

function PageMeta({
  pageName = PageName.DEFAULT,
  title,
  isAlert = false,
}: Props) {
  console.log(title);
  return (
    <Helmet>
      <title>{title ?? metadata[pageName].title}</title>
      <meta property="og:title" content={title ?? metadata[pageName].title} />
      <meta
        property="og:description"
        content={metadata[pageName].description}
      />
      <meta property="og:image" content={metadata[pageName].image} />
      {isAlert && <link rel="icon" href="favicon-news.ico" />}
    </Helmet>
  );
}

export default PageMeta;
