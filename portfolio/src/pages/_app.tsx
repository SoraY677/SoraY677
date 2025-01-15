import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import CommonLayout from "../layouts/CommonLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CommonLayout>
      <Component {...pageProps} />
    </CommonLayout>
  );
}
