import Board from '@/games/2048/components/board';
import Footer from '@/games/2048//components/footer';
import Header from '@/games/2048/components/header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Play 2048!</title>
      </Head>
      <main className='mx-auto my-5 max-w-lg p-2 '>
        <Header />
        <Board />
        <Footer />
      </main>
    </>
  );
}
