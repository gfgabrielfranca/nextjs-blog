import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import { getSortedPostsData } from '../lib/posts';

import Layout, { siteTitle } from '../components/Layout';
import Date from '../components/Date';

import * as Utils from '../styles/Utils';
import * as S from './styles';

interface PostData {
  date: string;
  title: string;
  id: string;
}

interface HomeProps {
  postsData: PostData[];
}

export const getStaticProps: GetStaticProps = async () => {
  const postsData = getSortedPostsData();
  return {
    props: {
      postsData,
    },
  };
};

const Home: React.FC<HomeProps> = ({ postsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <S.Section>
        <p>
          Passionate about programming and technology.{' '}
          <a
            href="https://www.linkedin.com/in/gabrielfrancas/"
            target="_blank"
            rel="noreferrer"
          >
            My Linkedin
          </a>
        </p>
      </S.Section>
      <S.Blog>
        <Utils.H2>Blog</Utils.H2>
        <S.List>
          {postsData.map(({ id, date, title }) => (
            <S.Post key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </S.Post>
          ))}
        </S.List>
      </S.Blog>
    </Layout>
  );
};

export default Home;
