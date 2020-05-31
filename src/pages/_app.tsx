import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css';

const pages: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default pages;
