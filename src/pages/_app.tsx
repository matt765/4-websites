import type { AppProps } from "next/app";

import "@fontsource/exo-2/500.css";
import "@fontsource/exo-2/300.css";
import "@fontsource/exo-2/400.css";
import "@fontsource/exo-2/500.css";
import "@fontsource/exo-2/600.css";
import "@fontsource/exo-2/700.css";

import "@/styles/globals.css";
import "@/styles/swiper.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
