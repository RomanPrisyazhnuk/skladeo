import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Arvo:wght@700&family=DM+Sans:wght@400;500;700&display=swap"
          />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-200870019-1"></script>
            <script>
                if(window && window.dataLayer){
                function gtag(){window.dataLayer.push(arguments)}}
                gtag('js', new Date());
                gtag('config', 'UA-200870019-1');
            </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
