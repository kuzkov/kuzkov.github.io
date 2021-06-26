import React from 'react';
import Head from 'next/head';

/*

      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie-edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
      <link rel="shortcut icon" type="image/png" href="/icons/favicon.png" />

      <title>{SITE_NAME}</title>
      <meta name="keywords" content={KEYWORDS} />
      <meta property="og:type" content="website" />
      <meta name="title" content={TITLE} />
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={IMAGE_SRC} />
      <meta property="og:url" content={URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:text:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={IMAGE_SRC} />
      <meta name="twitter:url" content={URL} />
      <meta property="og:image:width" content="450" />
      <meta property="og:image:height" content="298" />
      <link rel="image_src" href={IMAGE_SRC} />

*/
const Meta = () => {
  return (
    <Head>
      <meta char-set="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie-edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <title>Artyom Kuzkov - Frontend Engineer</title>
      <meta name="title" content="Artyom Kuzkov - Frontend Engineer" />
      <meta
        name="description"
        content="I’m a hard working and dedicated professional front-end engineer with a keen eye for detail, and a determination to deliver the very highest quality."
      />
      <meta
        name="keywords"
        content="frontend engineer, frontend developer, engineer, developer, freelancer, frontend, backend, web, portfolio, freelance"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Artyom Kuzkov" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Artyom Kuzkov - Frontend Engineer"
      />
      <meta property="og:title" content="Artyom Kuzkov - Frontend Engineer" />
      <meta
        property="og:description"
        content="I’m a hard working and dedicated professional front-end engineer with a keen eye for detail, and a determination to deliver the very highest quality."
      />
      <meta property="og:url" content="https://kuzkov.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Artyom Kuzkov - Frontend Engineer" />
      <meta
        name="twitter:text:title"
        content="Artyom Kuzkov - Frontend Engineer"
      />
      <meta
        name="twitter:description"
        content="I’m a hard working and dedicated professional front-end engineer with a keen eye for detail, and a determination to deliver the very highest quality."
      />
      <meta name="twitter:url" content="https://kuzkov.github.io" />
      <meta property="og:image:width" content="450" />
      <meta property="og:image:height" content="298" />
    </Head>
  );
};

export default Meta;
