import '../styles/globals.css'
import About from '../components/About'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>chiba_dev</title>
      </Head>
      <ThemeProvider attribute="class">
        <div className="h-screen flex gap-4 grid-cols-3 grid-rows-3 px-5 items-center justify-center">
          <div className="col-span-4 col-start-2 p-4 text-base text-center bg-white dark:bg-dark-500 border-2 rounded border-indigo-200 border-x-indigo-500 shadow-custom-light dark:shadow-custom-dark ">
            <About />
            {/* ปิดเพราะไม่ได้ใช้ให้ไปหน้าอื่น */}
            {/* <Component {...pageProps} /> */}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
