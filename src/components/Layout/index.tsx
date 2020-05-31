import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import * as Utils from '../../styles/Utils';

import * as S from './styles';

interface LayoutProps {
  home?: boolean;
}

const name = 'Gabriel França';
export const siteTitle = 'Next.js Sample Website';

const Layout: React.FC<LayoutProps> = ({ home, children }) => {
  return (
    <S.Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <S.Header>
        {home ? (
          <>
            <S.HeaderHomeImage src="/images/profile.jpg" alt={name} />
            <Utils.H1>{name}</Utils.H1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <S.HeaderImage src="/images/profile.jpg" alt={name} />
              </a>
            </Link>
            <Utils.H2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </Utils.H2>
          </>
        )}
      </S.Header>
      <main>{children}</main>
      {!home && (
        <S.BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </S.BackToHome>
      )}
    </S.Container>
  );
};

export default Layout;
