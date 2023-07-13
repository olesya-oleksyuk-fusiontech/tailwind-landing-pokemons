import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });
const siteTitle = 'Pokemon Landing';

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
        <main>test</main>
      </Layout>
    </>
  );
}
