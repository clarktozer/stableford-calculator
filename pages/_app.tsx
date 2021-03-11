import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { useState } from "react";
import { useCookie, useMount } from "react-use";
import { Header } from "../components/Header";
import { ThemeCookie, ThemeType } from "../constants";
import "../styles/global.css";
import { DarkTheme, LightTheme } from "../theme";

const siteTitle = "Stableford Calculator";

export default function App({ Component, pageProps }: AppProps) {
    const [themeCookie, updateCookie] = useCookie(ThemeCookie);
    const [isMounted, setMounted] = useState(false);
    const isDarkTheme = themeCookie === ThemeType.Dark;

    useMount(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
        setMounted(true);
    });

    const onToggleTheme = () => {
        updateCookie(isDarkTheme ? ThemeType.Light : ThemeType.Dark);
    };

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <title>{siteTitle}</title>
            </Head>
            <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
                <CssBaseline />
                {isMounted && (
                    <>
                        <Header
                            onToggleTheme={onToggleTheme}
                            isDarkTheme={isDarkTheme}
                        />
                        <Component {...pageProps} />
                    </>
                )}
            </ThemeProvider>
        </>
    );
}
