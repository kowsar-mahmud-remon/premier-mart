import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Slider from '@/components/Slider';
import Products from '@/components/Products';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const photoURL = e.target.photoURL.value;
    const description = e.target.description.value;

    // const data = {
    //   title,
    //   photoURL,
    //   description
    // };

    const res = await fetch('/api/test/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        photoURL: photoURL,
        description: description
        // name: title,
        // email: photoURL,
      }),
    });
    const data = await res.json();
    console.log(data);
    console.log(res);

  };
  const createTest = async () => {
    const randomNum = Math.floor(Math.random() * 1000);
    const res = await fetch('/api/test/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: `Test ${randomNum}`,
        photoURL: `test${randomNum}test.com`,
        description: `Test ${randomNum}`
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className=''>
      <Head>
        <title>Premier Mart</title>
        <meta name='keywords' content='web development, programming'></meta>
      </Head>
      <Slider></Slider>
      <Products></Products>
    </div>
  );
}
