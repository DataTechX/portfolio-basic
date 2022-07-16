import '../styles/globals.css'
import About from '../components/About'

import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="h-full gap-4 grid-cols-3 grid-rows-3 px-5 my-24 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 flex items-center justify-center ">
        <div className="h-full col-span-4 col-start-2 p-4 text-base text-center bg-white dark:bg-dark-500 border-4 border-indigo-200 border-x-indigo-500 shadow-custom-light dark:shadow-custom-dark ">
          <About />
          {/* ปิดเพราะไม่ได้ใช้ให้ไปหน้าอื่น */}
          {/* <Component {...pageProps} /> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
