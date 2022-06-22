import React from 'react';
import Head from 'next/head';
import ServerList from 'components/Server/List';

const Home = () => (
  <>
    <Head>
      <title>UpCloud</title>
    </Head>
    <main>
      <ServerList />
    </main>
  </>
);

export default Home;
