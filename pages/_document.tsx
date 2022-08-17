import Document, { Html, Head, Main, NextScript } from "next/document";
class DocumentXD extends Document {
    render() {
        return (
            <Html lang="th">
                <Head>
                    <link rel="shortcut icon" href="nana.ico" type="image/x-icon" />
                    <meta name="theme-color" content="#ced4da" />
                    <meta name="description" content="CHIBA DEV MODIFY ALL" />
                </Head>
                <body className="bg-fixed bg-gradient-to-r from-emerald-400 to-indigo-400 dark:from-dark-500 dark:to-dark-700 dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default DocumentXD;
