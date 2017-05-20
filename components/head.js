import NextHead from 'next/head';
import {string} from 'prop-types';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => (
  <NextHead>
    <meta charset="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link href='//fonts.googleapis.com/css?family=Raleway:400,300,600' rel='stylesheet' type='text/css'/>

    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    {/*<link rel="mask-icon" href="/static/images/favicon-mask.svg" color="#49B882" />*/}
    <link rel="apple-touch-icon" sizes="57x57" href="/static/images/apple-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="60x60" href="/static/images/apple-icon-60x60.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="/static/images/apple-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="/static/images/apple-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="/static/images/apple-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="/static/images/apple-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="/static/images/apple-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="/static/images/apple-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-icon-180x180.png"/>
    <link rel="icon" type="image/png" sizes="192x192"  href="/static/images/android-icon-192x192.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="96x96" href="/static/images/favicon-96x96.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png"/>
    <link rel="icon" href="/static/images/favicon.ico" />
    <link rel="manifest" href="/static/manifest.json"/>
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
    <meta name="theme-color" content="#ffffff"/>
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="stylesheet" href="/static/css/normalize.css" />
    <link rel="stylesheet" href="/static/css/skeleton.css" />
    <link rel="stylesheet" href="/static/css/main.css" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
