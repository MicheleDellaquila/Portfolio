import React, { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../containers/hero/hero';
import Skills from '../containers/skills/skills';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Michele Dellaquila</title>
        <link rel='icon' href='./logo.png' />
        <link rel='apple-touch-icon' href='./logo.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
        />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='author' content='Michele Dellaquila' />
        <meta
          name='description'
          content='Michele Dellaquila, software developer react js'
        />
        <meta
          name='keywords'
          content='HTML, CSS, JavaScript, REACT JS , NEXT JS , MONGO DB , EXPRESS JS , NODE JS'
        />
      </Head>
      <Hero />
      <Skills />
    </Fragment>
  );
};

export default Home;
