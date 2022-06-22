import React from 'react';
import Head from 'next/head';
import StorageList from 'components/Storage/List';

const Storages = () => (
  <>
    <Head>
      <title>UpCloud</title>
    </Head>
    <main>
      <StorageList />
    </main>
  </>
);

export default Storages;
