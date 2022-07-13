import Document, { Html, Head, Main, NextScript } from "next/document";

class DocumentXD extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>NCN</title>
                    <link rel="shortcut icon" href="nana.ico" type="image/x-icon" />
                    <meta name="theme-color" content="#ced4da" />
                    <meta name="description" content="NCN CREATE PORTOLIO" />
                </Head>
                <body className="bg-fixed bg-gradient-to-r from-red-100 to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default DocumentXD;