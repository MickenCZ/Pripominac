import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='cs-CZ'>
      <Head>
      <meta charSet="utf-8" />
        <link rel="icon" href="favicon.ico" />
        <link rel="preload" href="./arrow.png" as="image" />
        <link rel="apple-touch-icon" href="./logo192.png" />
        <meta httpEquiv="refresh" content="3600" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Webová aplikace pro ukládání školních upomínek"/>
        <link rel="manifest" href="manifest.json" />
        <meta name='author' content='Michael Cirkl / MickenCZ' />
      </Head>
      <body>
        <div id="portal"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}