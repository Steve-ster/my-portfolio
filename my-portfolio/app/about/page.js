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
          <ul>
            <li>
              <p>I’m a passionate developer with a love for clean design and creative problem-solving.</p>
            </li>
            <li>
              <p>I classify myself as a full stack web developer with proficient skills in multiple languages.</p>
            </li>  
            <li>
              <p>I enjoy spending lots of time on how a page looks but also how it functions. I believe a functional page is much better than a good looking one.</p>
            </li>
            {/* <li> 
              <p></p>
            </li> */}
          </ul>
        </section>
      </main>
    </>
  );
}

