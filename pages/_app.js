import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          DCRUSTODC - An open source community for students of DCRUST
        </title>
        <meta
          name="title"
          content="DCRUSTODC - An open source community for students of DCRUST"
        />
        <meta name="description" content="Open source community for DCRUST" />
        <meta name="keywords" content="open-source, dcrust" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_MAIN_URL} />
        <meta
          property="og:title"
          content="DCRUSTODC - An open source community by students of DCRUST"
        />
        <meta
          property="og:description"
          content="DCRUSTODC - An open source community for students of DCRUST"
        />
        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_MAIN_URL + "logo.png"}
        />

        <meta property="og:locale" content="id" />
        <meta property="og:image:alt" content="logo" />
        <meta property="og:image:type" content="png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={process.env.NEXT_PUBLIC_MAIN_URL}
        />
        <meta
          property="twitter:title"
          content="DCRUSTODC - An open source community for students of DCRUST"
        />
        <meta
          property="twitter:description"
          content="DCRUSTODC - An open source community for students of DCRUST"
        />
        <meta
          property="twitter:image"
          content={process.env.NEXT_PUBLIC_MAIN_URL + "logo.png"}
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
