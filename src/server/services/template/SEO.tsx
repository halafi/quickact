/* eslint-disable react/no-danger */
import React from 'react';

type Props = {
  title: string;
};

const SEO = ({ title }: Props) => (
  <>
    <title>{title}</title>
    <link rel="shortcut icon" type="image/png" href="favicon.ico" />
    <link rel="preload" href="bundle.js" as="script" />
  </>
);

export default SEO;
