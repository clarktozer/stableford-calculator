import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect, useMemo } from "react";
import { useCookie } from "react-use";
import { Header } from "../components/Header";
import { ThemeCookie, ThemeType } from "../constants";
import "../styles/global.css";

const siteTitle = "Stableford Calculator";

export default function App({ Component, pageProps }: AppProps) {
    const [themeCookie, updateCookie] = useCookie(ThemeCookie);
    const isDarkTheme = themeCookie === ThemeType.Dark;

    useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: isDarkTheme ? "dark" : "light"
                }
            }),
        [isDarkTheme]
    );

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
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header
                    onToggleTheme={onToggleTheme}
                    isDarkTheme={isDarkTheme}
                />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
