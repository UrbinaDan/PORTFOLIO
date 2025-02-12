import Head from 'next/head';
import Header from '/workspaces/PORTFOLIO/src/components/Header.jsx'; // Adjust the path based on your structure
import FooterSection from '/workspaces/PORTFOLIO/src/components/Footer1/FooterSection.jsx';
import ProjectCardBlock1 from '@/components/ProjectCard/ProjectCardBlock1';
import ProjectCardBlock2 from '@/components/ProjectCard/ProjectCardBlock2';
import ProjectCardBlock3 from '@/components/ProjectCard/ProjectCardBlock3';
import ProjectCardBlock4 from '@/components/ProjectCard/ProjectCardBlock4';

export default function About() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Projects page</title>
        <meta name="description" content="Learn more about my projects on this page." />
      </Head>
      <Header />
      <main className="container mx-auto p-12 pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="col-span-2 md:col-span-1">
            <h1 className="text-6xl font-bold mt-6">Things I've Made Trying to Make a Difference</h1>
          <p className="mt-6" style={{ color: 'var(--paragraph-color)' }}>
          In my journey as a mechanical engineer and software developer, I've had the opportunity to work on a variety of projects that showcase my passion for innovation and problem-solving. Here are some of the highlights:
          </p>
        </div>
</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
       <ProjectCardBlock1 />
       <ProjectCardBlock2 />
       <ProjectCardBlock3 />
       <ProjectCardBlock4 />
    </div>
        <FooterSection />
      </main>
    </div>
  );
}
