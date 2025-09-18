'use client';
import Head from 'next/head';

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Steven's Skills</title>
        <meta name="description" content="Explore Steven's technical skills" />
      </Head>

      <main className="main-content">
        <section id="skills">
        <div className="skills-box">
          <h2>Skills</h2>
          <h3>Some of the Languages I specialise in:</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS</li>
            <li>UI/UX Design</li>
            <li>Python</li>
            <li>HTML</li>
            <li>Django</li>
          </ul>
        </div>
        </section>
      </main>
    </>
  );
}
