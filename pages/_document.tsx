import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="title"
            content="Skilltober | Alexa Developers SRM X GitHub Community SRM"
          />
          <meta
            name="description"
            content="Welcome to Skilltober! Join us on 22 October 2021 to learn about how Open Source Contributions can lead to an amazing career for you."
          />
          <meta
            name="keywords"
            content="skilltober, alexadevsrm, gcsrm, hacktoberfest, digitalocean, srmist, github, alexa"
          />
          <meta name="robots" content="index, follow" />

          <meta
            property="og:url"
            content="https://skilltober.alexadevsrm.com/"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Skilltober | Alexa Developers SRM X GitHub Community SRM"
          />
          <meta
            property="og:description"
            content="Welcome to Skilltober! Join us on 22 October 2021 to learn about how Open Source Contributions can lead to an amazing career for you."
          />
          <meta
            property="og:image"
            content="https://billboard.srmkzilla.net/api/blog?title=Skilltober&subtitle=Alexa%20Developers%20SRM%20X%20GitHub%20Community%20SRM&fileType=jpeg&theme=dark&fontSize=180px"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="alexadevsrm.com" />
          <meta
            property="twitter:url"
            content="https://skilltober.alexadevsrm.com/"
          />
          <meta
            name="twitter:title"
            content="Skilltober | Alexa Developers SRM X GitHub Community SRM"
          />
          <meta
            name="twitter:description"
            content="Welcome to Skilltober! Join us on 22 October 2021 to learn about how Open Source Contributions can lead to an amazing career for you."
          />
          <meta
            name="twitter:image"
            content="https://billboard.srmkzilla.net/api/blog?title=Skilltober&subtitle=Alexa%20Developers%20SRM%20X%20GitHub%20Community%20SRM&fileType=jpeg&theme=dark&fontSize=180px"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
