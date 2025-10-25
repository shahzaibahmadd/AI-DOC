import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>🇵🇰 Awaam AI</title>
        <meta name="description" content="AI Assistant for Pakistani Documents" />
        <link rel="icon" href="/favicon.ico" /> {/* Make sure to have a favicon in /public */}
      </Head>

      {/* This div applies the dark background and gradient from your index.html style */}
      <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col font-sans">
        <Navbar />
        {/* Main content area with padding-top to offset the fixed navbar */}
        {/* We use h-screen and pt-[57px] to make the content fill the viewport */}
        <main className="flex-1 flex flex-col pt-[57px] h-screen">
          {children}
        </main>
      </div>
    </>
  );
}