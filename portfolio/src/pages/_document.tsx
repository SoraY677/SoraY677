import { Html, Head, Main, NextScript } from "next/document";
import {
  META_APP_ICON_PATH,
  META_APP_ICON_URL,
  META_DESCRIPTION,
  META_TITLE_BASE,
  META_TWITTER_CARD_TYPE,
} from "../config/MetaConfig";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="icon" type="image/x-icon" href={META_APP_ICON_PATH} />
        <meta name="twitter:card" content={META_TWITTER_CARD_TYPE} />
        <meta name="twitter:title" content={META_TITLE_BASE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={META_APP_ICON_URL} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
