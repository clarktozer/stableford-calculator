import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect, useMemo } from "react";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
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
                    type: "dark"
                }
            }),
        []
    );

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
