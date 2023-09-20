import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Avo e-ecommerce where you can find your preferred type of avocado"
        />
        {/* 
				
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:400,700,900" />
				<link rel="stylesheet" href="/styles.css" />
				<script/js */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
