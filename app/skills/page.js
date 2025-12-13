'use client';
import Head from 'next/head';

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Stevens Skills</title>
        <meta name="description" content="Explore Stevens technical skills" />
      </Head>

      <main className="main-content">
        <section id="skills">
          <div className="skills-box">
            <h2>Skills</h2>
            <ul>
              <li>Harvard Cs50x</li>
              <li>Harvard Cs50Python</li>
              <li>Harvard Cs50Web</li>
              <li>Harvard Cs50Ai</li>
              <li>React Apps</li>
              <li>Web apps</li>
              <li>Api integration</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
