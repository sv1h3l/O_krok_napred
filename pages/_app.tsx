import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/icon.webp" />
                <meta
                    name="description"
                    content="Tipy pro lepší zdraví a dlouhodobou pohodu."
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
