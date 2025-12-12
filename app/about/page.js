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
          <p>
            I'm a passionate developer with a love for clean design and creative problem-solving.
            I build user-focused interfaces and small web applications, preferring simple,
            maintainable solutions that scale across devices.
          </p>

          <h3>Background & Approach</h3>
          <p>
            My experience blends frontend development with a strong interest in visual design.
            I focus on accessibility, performance, and clear structure. When approaching a project
            I sketch layouts, iterate on the UI, and prioritise usability and responsiveness.
          </p>

          <h3>Interests</h3>
          <p>
            Outside of coding I enjoy exploring new libraries, refining UI details, and building
            small projects that solve real problems. Open to collaboration and learning from
            other developers and designers.
          </p>
        </section>
      </main>
    </>
  );
}

