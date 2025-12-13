'use client';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Steven</title>
        <meta name="description" content="Get in touch with Steven Mclardy" />
      </Head>

      <main className="main-content">
        <section id="contact">
          <h2>Contact Me</h2>
          <p>Feel free to reach out via email or connect with me on social media.</p>
          <ul>
            <li>Instagram: @stevie_2910</li>
            <li>Email: mclardysteven2910@gmail.com</li>
          </ul>
        </section>
      </main>
    </>
  );
}
