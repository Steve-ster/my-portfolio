'use client';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about Steven Mclardy" />
      </Head>

      <main className="main-content">
        <section id="about">
          <h2>About Me</h2>
          <p>I’m a passionate developer with a love for clean design and creative problem-solving.</p>
        </section>
      </main>
    </>
  );
}

